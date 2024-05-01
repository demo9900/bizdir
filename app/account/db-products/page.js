"use client";
import React from "react";
import Headertwo from "@/components/Headertwo";
import Footer from "@/components/Footer";
import BottomMenu from "@/components/BottomMenu";
import Link from "next/link";

const page = () => {
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
                    <table className="responsive-table bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                {/*<th>Rating</th>*/}
                                <th>Views</th>
                                {/*<th>Expiry on</th>*/}
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <img
                                        alt="demoimage"
                                        src="/products/3466audi_png1737.png"
                                    />
                                    Audi q3 <span>26, Mar 2021</span>
                                </td>
                                {/*<td><span className="db-product-rat">*/}
                                {/*</span></td>*/}
                                <td>
                                    <span className="db-list-rat">8</span>
                                </td>
                                {/*<td><span className="db-product-ststus">8 June 2020</span></td>*/}
                                <td>
                                    <span className="db-list-ststus">
                                        Active
                                    </span>
                                </td>
                                <td>
                                    <Link
                                        href="/edit-product?code=PROD036"
                                        className="db-list-edit"
                                    >
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <Link href="/#">Delete</Link>
                                </td>
                                <td>
                                    <Link
                                        href="/product-details"
                                        className="db-list-edit"
                                        target="_blank"
                                    >
                                        Preview
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;
