/* eslint-disable @next/next/no-head-element */
import "@/styles/globals.css";
import "@/css/style.css";
import "@/css/bootstrap.css";
import "@/css/style2.css"
// import "../styles/admin-style.css"


import Script from "next/script";


export const metadata = {
  title: 'bizdir',
  
};
export default function RootLayout({ children }) {
  
  return (
    <html>
      <body> 
        <div>
        {children}
      </div>
        </body>
    </html>
  );
}