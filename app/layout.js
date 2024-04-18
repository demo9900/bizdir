/* eslint-disable @next/next/no-head-element */
'use client'
import "@/styles/globals.css";
import "@/css/style.css";
import "@/css/bootstrap.css";
import "@/css/style2.css"
// import "../styles/admin-style.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from "next-auth/react"
import Script from "next/script";



export default function RootLayout({ children,session }) {
  
  return (
    <SessionProvider session={session}>
    <html>
      <body> 
        <div>
        {children}
        <ToastContainer />
      </div>
        </body>
    </html>
    </SessionProvider>
  );
}