import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


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
                    const response = await fetch(
                        `${process.env.BACKEND_URL}/api/auth/login`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ email, password }),
                        }
                    );

                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error(data.message);
                    }

                    return {
                        token: data.token,
                        id: data.id,
                        name: data.user.name,
                        email: data.user.email,
                        image: data.user.image,
                        is_verified: data.user.is_verified,
                    };
                } catch (error) {
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
        async signIn({ account, profile,user }) {
            if (account.provider === "google") {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/login/google`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: profile.name,
                            email: profile.email,
                            email_verified: profile.email_verified,
                            method: account.provider,
                            picture: profile.picture
                        }),
                    });
                    const data = await response.json();
                    console.log("response :", data);
                    if(response.status === 200 || response.status === 201 ){
                        user.token = data.token;
                        user.id = data.id;
                        user.role = data.user.role.role_name;
                        user.is_verified = data.user.is_verified;
                        return data;
                    }else if (response.status === 403){
                         return '/login?error=please try another method'
                    }
                } catch (error) {
                    console.error("Error storing user data:", error); 
                }
            }
           return true;
        },        
        async jwt({ token, user,trigger,session }) {
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
                token.image = session.image
              }
            console.log("user from jwt",user)
            return { ...token };
        },
        async session({ session, token }) {
            session.jwt = token.jwt;
            session.user = {
                id:token.id,
                name: token.name,
                email: token.email,
                image: token.image,
                is_verified: token.is_verified,
            };
            // Attach the token to the session object

            return session;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
          },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
