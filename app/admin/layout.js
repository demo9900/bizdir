/* eslint-disable @next/next/no-head-element */
import React from "react";
import TopNav from "@/components/Admin/TopNav";
import LeftSidebar from "@/components/Admin/LeftSidebar/LeftSidebar"


import "../../styles/admin-style.css"

export const metadata = {
  title: 'bizdir',
  
};
export default function DashboardLayout({ children }) {
  
  return (
        <>
        <TopNav/>
        <LeftSidebar/>
        {children}
   </>
  );
}