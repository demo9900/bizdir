import React from "react";
// import Headertwo from "@/components/Headertwo";
// import Footer from "@/components/Footer";
// import BottomMenu from "@/components/BottomMenu";
import Link from "next/link";
import ProductsList from "./ProductsList";
import ComingSoon from "@/components/ComingSoon";

const page = () => {

    return <ComingSoon />
    return (
        <div className="ud-main-inn ud-no-rhs">
            <div className="ud-cen">
                <div className="log-bor">&nbsp;</div>
                <span className="udb-inst">All Products</span>
                <div className="ud-cen-s2">
                    <h2>Product Details</h2>
                    <Link href="/add-new-product" className="db-tit-btn">
                        Add new Product
                    </Link>
                    <ProductsList />
                </div>
            </div>
        </div>
    );
};

export default page;
