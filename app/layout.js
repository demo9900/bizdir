/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css";
import "../css/style.css";
import "../css/bootstrap.css";
import "../css/style2.css"

import Script from "next/script";
import Head from "next/head";
import Header from "../component/Header";


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body> 
        <div>
       
        {children}
      </div>
        </body>
    </html>
  );
}