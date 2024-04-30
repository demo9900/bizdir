import React from "react";
import Headertwo from "@/components/Headertwo";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/BottomMenu";
import Link from "next/link";
import Table from "./Table";

const page = () => {
    return (
        <div className="ud-main-inn ud-no-rhs">
            <div className="ud-cen">
                <div className="log-bor">&nbsp;</div>{" "}
                <span className="udb-inst">All Listings</span>
                <div className="ud-cen-s2">
                    <h2>Listing Details</h2>
                    <Link
                        href="/account/add-listing-start"
                        className="db-tit-btn"
                    >
                        Add New Listing
                    </Link>

                    <Table />
                </div>
            </div>
        </div>
    );
};

export default page;
