import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from "@/lib/apollo";
import { LOGIN_USER } from "@/lib/mutation";

const authOptions = {
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;


          // Send GraphQL mutation request to login user
          const { data, errors } = await client.mutate({
            mutation: LOGIN_USER,
            variables: { email: email, password: password },
          });


          if (errors || data.loginUser.code !== 200) {
            console.log(data.loginUser.message);
            throw new Error(data.loginUser.message);
          }

          const user = await data.loginUser.user;

          return {
            token: user.token,
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            is_verified: user.is_verified,
          };
        } catch (error) {
          console.log("something went wrong", error);
          throw new Error(error.message);
        }
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account.provider === "google") {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/auth/login/google`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: profile.name,
                email: profile.email,
                email_verified: profile.email_verified,
                method: account.provider,
                picture: profile.picture,
              }),
            }
          );
          const data = await response.json();
          console.log("response :", data);
          if (response.status === 200 || response.status === 201) {
            user.token = data.token;
            user.id = data.id;
            user.role = data.user.role.role_name;
            user.is_verified = data.user.is_verified;
            return data;
          } else if (response.status === 403) {
            return "/login?error=please try another method";
          }
        } catch (error) {
          console.error("Error storing user data:", error);
          return error;
        }
      }
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.jwt = user.token; // Store the token in the JWT token
        token.id = user.id; // Store the user ID in the JWT token
        token.name = user.name; // Store the user name in the JWT token
        token.email = user.email; // Store the user email in the JWT token
        token.image = user.image; // Store the user image in the JWT token
        token.is_verified = user.is_verified; // // Store the token in the JWT token
      }
      if (trigger === "update" && session?.image) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.image = session.image;
      }
      return { ...token };
    },
    async session({ session, token }) {
      session.jwt = token.jwt;
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        image: token.image,
        is_verified: token.is_verified,
      };
      // Attach the token to the session object

      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
