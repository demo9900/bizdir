"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CouponCard = () => {
    const [couponData, setCouponData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session, status } = useSession();

    const getCouponData = async () => {
        try {
            setLoading(true);
            const res = await fetch(process.env.BACKEND_URL + "/api/coupon", {
                headers: {
                    authorization: "Bearer " + session.jwt,
                },
            });

            const data = await res.json();

            console.log(data);
            setCouponData(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (status === "authenticated") getCouponData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const deleteCoupon = async (id) => {
        try {
            const res = await fetch(
                process.env.BACKEND_URL + "/api/coupon/" + id,
                {
                    headers: {
                        authorization: "Bearer " + session.jwt,
                    },
                    method: "DELETE",
                }
            );

            getCouponData();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <>Loading</>;

    return (
        <ul>
            {couponData.map((coupon) => (
                <li key={coupon._id}>
                    <div className="db-coup-lhs">
                        <div className="coup-box">
                            <div className="coup-box-1">
                                <div className="s1">
                                    <div className="lhs">
                                        <img
                                            src={coupon.coupon_image}
                                            alt={coupon.coupon_name}
                                        />
                                    </div>
                                    <div className="rhs">
                                        <h4>{coupon.coupon_name}</h4>
                                    </div>
                                </div>
                                <div className="s2">
                                    <div className="lhs">
                                        <span>Expires</span>
                                        <h6>{coupon.end_date}</h6>
                                        <Link href="/coupons">
                                            Terms &amp; Conditions Apply
                                        </Link>
                                    </div>
                                    <div className="rhs">
                                        <Link href="/coupons">
                                            <span className="get-coup-btn get-coup-act">
                                                Get coupon
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="db-coup-rhs">
                        <h5>
                            <b>{coupon.coupon_use_members.length}</b>
                            <span>Members access this coupon</span>
                        </h5>
                        <ol>
                            <li>
                                <b>Start date:</b> {coupon.start_date}
                            </li>
                            <li>
                                <b>Expiry date:</b> {coupon.end_date}
                            </li>
                            <li>
                                <b>Coupon code:</b> {coupon.coupon_code}
                            </li>
                            <li>
                                <Link href="/edit-coupon">Edit</Link>
                                <button
                                    onClick={() => deleteCoupon(coupon._id)}
                                >
                                    Delete
                                </button>
                            </li>
                        </ol>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CouponCard;
