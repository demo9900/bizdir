'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Table from "./Table";
import { useSession } from "next-auth/react";
import { toast } from 'react-toastify';
const page = () => {
    const {data:session,status} = useSession();
    const [user,setUser]= useState();
    const getUser = async () => {
        try {
            const res = await fetch(`${process.env.BACKEND_URL}/api/user`,{
             headers:{
                authorization: "Bearer " + session.jwt,
             }
            });
            console.log(res);
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (status === "authenticated") getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);
    const showToast = () =>{
        toast.warn("your limit exceeded")
    }
    console.log("user data", user)
    return (
        <div className="ud-main-inn ud-no-rhs">
            <div className="ud-cen">
                <div className="log-bor">&nbsp;</div>{" "}
                <span className="udb-inst">All Listings</span>
                <div className="ud-cen-s2">
                    <h2>Listing Details</h2>
                    {user?.subscription.listing_limit === 0 ? (
                        <Link onClick={showToast} href="#!" className="db-tit-btn">
                        Add New Listing
                        </Link>
                    ):(
                        <Link
                        href="/account/add-listing"
                        className="db-tit-btn"
                    >
                        Add New Listing
                    </Link>
                    )}
                    
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default page;
