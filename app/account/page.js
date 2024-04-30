"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hook";

const page = () => {
    const userdata = useAppSelector((state) => state.auth);
    console.log("redux data ", userdata);
    return (
        <div className="ud-main-inn">
            <div className="ud-cen ">
                <div className="log-bor">&nbsp;</div>{" "}
                <span className="udb-inst">User Dashboard</span>
                <div className="cd-cen-intr">
                    <div className="cd-cen-intr-inn">
                        <h2>
                            Welcom back, <b>Digital koncept</b>
                        </h2>
                        <p>
                            Stay up to date reports in your listing, products,
                            events and blog reports here
                        </p>
                    </div>
                </div>
                <div className="ud-cen-s1">
                    <ul>
                        <li>
                            <div>
                                {" "}
                                <b>21</b>
                                <h4>All Listings</h4>
                                <p>Total no of listings</p>{" "}
                                <Link href="/db-all-listing">&nbsp;</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                {" "}
                                <b>13</b>
                                <h4>Enquiries</h4>
                                <p>Total no of enquiry</p>{" "}
                                <Link href="/db-enquiry">&nbsp;</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                {" "}
                                <b>18</b>
                                <h4>Followings</h4>
                                <p>Total no of followings</p>{" "}
                                <Link href="/db-followings">&nbsp;</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* START */}
                <div className="ud-cen-s3 ud-cen-s4">
                    <h2>Profile page</h2>
                    <Link href="/db-my-profile-edit" className="db-tit-btn">
                        Edit profile page
                    </Link>
                    <div className="ud-payment ud-pro-link">
                        <div className="pay-lhs">
                            <div className="lis-pro-badg">
                                <div>
                                    <img
                                        src="/user/62736rn53themes.png"
                                        alt="theme"
                                    />
                                    <h4>Digital koncept</h4>
                                    <p>Member since 26, Mar 2021</p>
                                </div>{" "}
                                <Link
                                    href="/profile"
                                    className="fclick"
                                    target="_blank"
                                >
                                    &nbsp;
                                </Link>
                            </div>
                        </div>
                        <div className="pay-rhs">
                            <ul>
                                <li>
                                    <b>Name : </b> Digital koncept
                                </li>
                                <li>
                                    <b>Followers : </b> <span>07</span>
                                </li>
                                <li>
                                    <b>City : </b> Sydney
                                </li>
                                <li>
                                    <b>Email : </b> connect@bizdir.in
                                </li>
                                <li className="pro">
                                    <input
                                        type="text"
                                        defaultValue="profile"
                                        readOnly=""
                                    />
                                </li>
                                <li className="pre">
                                    <Link target="_blank" href="/profile">
                                        View my profile page
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* END */}
                {/* START */}
                <div className="ud-cen-s3 ud-cen-s4">
                    <h2>Business page</h2>
                    <Link href="/company-profile-edit" className="db-tit-btn">
                        Edit business page
                    </Link>
                    <div className="ud-payment ud-pro-link bus-pg">
                        <div className="pay-lhs">
                            <div className="lis-pro-badg">
                                <div>
                                    <img
                                        src="/user/39791rn53-themes.png"
                                        alt="theme"
                                    />
                                    <h4>Digital koncept net</h4>
                                    <p>Member since 26, Mar 2021</p>
                                </div>{" "}
                                <Link
                                    href="/company-profile"
                                    className="fclick"
                                    target="_blank"
                                >
                                    &nbsp;
                                </Link>
                            </div>
                        </div>
                        <div className="pay-rhs">
                            <ul>
                                <li>
                                    <b>Name : </b> Digital koncept net
                                </li>
                                <li>
                                    <b>Page views : </b> <span>19</span>
                                </li>
                                <li className="pro">
                                    <input
                                        type="text"
                                        defaultValue="company-profile"
                                        readOnly=""
                                    />
                                </li>
                                <li className="pre">
                                    <Link
                                        target="_blank"
                                        href="/company-profile"
                                    >
                                        View business page
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* END */}
            </div>
            <div className="ud-rhs">
                <div className="ud-rhs-promo">
                    <h3>Promote my business</h3>
                    <p>
                        Your listing show on the top of the respective category
                        page
                    </p>{" "}
                    <Link href="/promote-business">Start now</Link>
                </div>
                {/*    //Total Point Section Starts*/}
                <div className="ud-rhs-poin">
                    <div className="ud-rhs-poin1">
                        <h4>Your points</h4>
                        <span className="count1">60</span>
                    </div>
                    <div className="ud-rhs-poin2">
                        <h3>Earn more credit points</h3>
                        <p>
                            Use this poins to promote your listing.{" "}
                            <Link href="/#">Click here</Link> for demo
                        </p>{" "}
                        <Link href="/buy-points" className="cta">
                            Buy Points
                        </Link>
                    </div>
                </div>
                {/*    //Total Point Section Ends*/}
                <div className="ud-rhs-pay">
                    <div className="ud-rhs-pay-inn">
                        <h3>Payment Information</h3>
                        <ul>
                            <li>
                                <b>Plan name : </b> Premium Plus
                            </li>
                            <li>
                                <b>Start date : </b> 26, Mar 2021
                            </li>
                            <li>
                                <b>Expiry date : </b> 26, Mar 2031
                            </li>
                            <li>
                                <b>Duration : </b> 10 year
                            </li>
                            <li>
                                <b>Remaining Days: </b> 3638
                            </li>
                            <li>
                                <span className="ud-stat-pay-btn">
                                    <b>Checkout cost:</b> $20
                                </span>
                            </li>
                            <li>
                                <span className="ud-stat-pay-btn">
                                    <b>Payment Status:</b> PENDING
                                </span>
                            </li>
                        </ul>{" "}
                        <Link href="/db-payment" className="btn btn2">
                            Pay Now
                        </Link>
                    </div>
                </div>

                <div className="ud-rhs-sec-1">
                    <h4>Admin Notification</h4>
                    <ul>
                        <li>
                            <Link target="_blank" href="/xxxxxxxxxxxxxxxxxx">
                                <h5>test</h5>
                                <p>test</p>
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="/demoo">
                                <h5>demo2</h5>
                                <p>demo2222</p>
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="/demo">
                                <h5>demo</h5>
                                <p>demo notification</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="/https://www.location-voitures-maurice.com/"
                            >
                                <h5>
                                    https://www.location-voitures-maurice.com/
                                </h5>
                                <p>
                                    https://www.location-voitures-maurice.com/
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="/prueba">
                                <h5>preuba</h5>
                                <p>prieba</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="/https://directoryfinder.net/demo/business-directory-template/listing-details?code=LIST211"
                            >
                                <h5>Homey massage offer 50%</h5>
                                <p>Special offer for this month only</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="/https://youtu.be/O8EeSKUgyj8"
                            >
                                <h5>How lead tracking works?</h5>
                                <p>Lead and url tracking work process</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="/http://www.fltdsgn.com/"
                            >
                                <h5>Other url redirect</h5>
                                <p>
                                    Other url redirect test by directory finder
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="/https://directoryfinder.net/how-to-install-this-on-local-server-tutorial-videos"
                            >
                                <h5>
                                    How to install directoryfinder template?
                                </h5>
                                <p>
                                    How to install directoryfinder template in
                                    local server
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="/http://directoryfinder.net/demo/business-directory-template/event-details?row=10"
                            >
                                <h5>How to add new listing?</h5>
                                <p>Just few clicks to add your new listing</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="/https://youtu.be/93_4_0Dyys8"
                            >
                                <h5>Best Business Directory Template</h5>
                                <p>
                                    Get the premium business directory templates
                                    with the best quality
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="/www.google.com1">
                                <h5>1test noti title1</h5>
                                <p>
                                    Tour Travel | Tour Travel Package Template
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ud-rhs-promo ud-rhs-promo-1">
                    <h3>Community members</h3>
                    <p>
                        Follow your favirote business users and grove your
                        online business now.
                    </p>{" "}
                    <Link href="/community">Community</Link>
                </div>
                <div className="ud-rhs-sec-3">
                    <div className="list-mig-like">
                        <div className="list-ri-peo-like">
                            <h3>Who all are follow you</h3>
                            <ul>
                                <li>
                                    <Link
                                        href="/profile/rachel"
                                        target="_blank"
                                    >
                                        <img
                                            src="/user/63520pexels-photo-1130626.jpeg"
                                            alt="theme"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/profile/betty-d-friedman"
                                        target="_blank"
                                    >
                                        <img
                                            src="/user/8766pexels-photo-774909.jpeg"
                                            alt="theme"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/profile/claude-d-dial"
                                        target="_blank"
                                    >
                                        <img
                                            src="/user/33654pexels-photo-91227.jpeg"
                                            alt="theme"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profile/kumar" target="_blank">
                                        <img
                                            src="/user/4913411004989_334444876752279_544839968_n.jpg"
                                            alt="theme"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/profile/deneme"
                                        target="_blank"
                                    >
                                        <img
                                            src="/user/475847.jpg"
                                            alt="theme"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profile/clic" target="_blank">
                                        <img
                                            src="/user/475847.jpg"
                                            alt="theme"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/profile/nawaf-alayli"
                                        target="_blank"
                                    >
                                        <img
                                            src="/user/475847.jpg"
                                            alt="theme"
                                        />
                                    </Link>
                                </li>
                                {/*                    <li>*/}
                                {/*                        <Link href="/profile" target="_blank">*/}
                                {/*                            <img src="/user/2.jpg" alt="theme">*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li>*/}
                                {/*                        <Link href="/profile" target="_blank">*/}
                                {/*                            <img src="/user/3.jpg" alt="theme">*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li>*/}
                                {/*                        <Link href="/profile" target="_blank">*/}
                                {/*                            <img src="/user/4.jpg" alt="theme">*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li>*/}
                                {/*                        <Link href="/profile" target="_blank">*/}
                                {/*                            <img src="/user/5.jpg" alt="theme">*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li>*/}
                                {/*                        <Link href="/profile" target="_blank">*/}
                                {/*                            <img src="/user/6.jpg" alt="theme">*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li>*/}
                                {/*                        <Link href="/profile" target="_blank">*/}
                                {/*                            <img src="/user/7.jpg" alt="theme">*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li>*/}
                                {/*                        <Link href="/profile" target="_blank">*/}
                                {/*                            <img src="/user/8.jpg" alt="theme">*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
