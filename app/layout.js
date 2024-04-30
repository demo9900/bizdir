/* eslint-disable @next/next/no-head-element */
"use client";
import "@/styles/globals.css";
import "@/css/style.css";
import "@/css/bootstrap.css";
import "@/css/style2.css";
import { Poppins } from "next/font/google";
// import "../styles/admin-style.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
});

export default function RootLayout({ children, session }) {
    return (
        <StoreProvider>
            <SessionProvider session={session}>
                <html className={poppins.className}>
                    <body>
                        <div>
                            {children}
                            <ToastContainer />
                        </div>
                    </body>
                </html>
            </SessionProvider>
        </StoreProvider>
    );
}
