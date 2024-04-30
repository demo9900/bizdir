import React from "react";
import Link from "next/link";
import CouponCard from "./CouponCard";

const page = () => {
    return (
        <div className="ud-main-inn ud-no-rhs">
            <div className="ud-cen">
                <div className="log-bor">&nbsp;</div>
                <span className="udb-inst">Coupons</span>
                <div className="ud-cen-s2">
                    <h2>Coupons</h2>
                    <Link href="/add-coupons" className="db-tit-btn">
                        Add new Coupons
                    </Link>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                data-toggle="tab"
                                href="/#coupon"
                            >
                                All Coupon Details
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                data-toggle="tab"
                                href="/#couponacc"
                            >
                                Coupon used members
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="coupon" className="container tab-pane active">
                            <div className="db-coupons">
                                <CouponCard />
                            </div>
                        </div>
                        <div id="couponacc" className="container tab-pane fade">
                            <table className="responsive-table bordered">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Coupon name</th>
                                        <th>Profile</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <span>01, Jan 1970</span>
                                        </td>
                                        <td />
                                        <td />
                                        <td>Bizbook 50% Off</td>
                                        <td>
                                            <Link
                                                href="/profile"
                                                target="_blank"
                                                className="db-list-edit"
                                            >
                                                View
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                href="/#"
                                                className="db-list-edit"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <span>01, Jan 1970</span>
                                        </td>
                                        <td />
                                        <td />
                                        <td>Amazes 50% Off</td>
                                        <td>
                                            <Link
                                                href="/profile"
                                                target="_blank"
                                                className="db-list-edit"
                                            >
                                                View
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                href="/#"
                                                className="db-list-edit"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <span>01, Jan 1970</span>
                                        </td>
                                        <td />
                                        <td />
                                        <td>Bizbook 50% Off</td>
                                        <td>
                                            <Link
                                                href="/profile"
                                                target="_blank"
                                                className="db-list-edit"
                                            >
                                                View
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                href="/#"
                                                className="db-list-edit"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
