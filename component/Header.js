'use strict';
'use client';
import React from 'react';
import Script from 'next/script';
import { useState } from 'react';
import $ from "jquery";
const Header = () => {
  const [ isMenuVisible, setMenuVisibility ] = useState(false);
  const [ isMobMenuVisible, setMobMenuVisibility ] = useState(false);
  const [isDashboardVisible, setDashboardVisiblity] = useState(false);

  return (
    <>
    <div className="hom-top">
  <div className="container">
    <div className="row">
      <div className="hom-nav  db-open ">
        {/*MOBILE MENU*/}
        {/*<div class="menu">
                          <i class="material-icons mopen">menu</i>
                      </div>*/}
        <a href="index.html" className="top-log">
          <img src="https://ik.imagekit.io/rrw4vjgxohv/bizbook/logo-b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672921621987" alt="" className="ic-logo" />
        </a>
        <div className="menu" onClick={() => setMenuVisibility(! isMenuVisible)}>
          <h4>All Category</h4>
        </div>
        <div className={`${isMenuVisible ? 'pop-menu ani': 'pop-menu' }`}>
          <div className="container">
            <div className="row">
              {" "}
              <i className="material-icons clopme" onClick={() => setMenuVisibility(! isMenuVisible)}>close</i>
              <div className="pmenu-spri">
                <ul>
                  <li>
                    <a href="all-category.html" className="act">
                      <img src="/icon/shop.png" />
                      All Services
                    </a>
                  </li>
                  <li>
                    <a href="events.html">
                      <img src="/icon/calendar.png" />
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="all-products.html">
                      <img src="/icon/cart.png" />
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="coupons.html">
                      <img src="/icon/coupons.png" />
                      Coupon &amp; deals
                    </a>
                  </li>
                  <li>
                    <a href="blog-posts.html">
                      <img src="/icon/blog1.png" />
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="community.html">
                      <img src="/icon/11.png" />
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pmenu-cat">
                <h4>All Categories</h4>
                <input type="text" id="pg-sear" placeholder="Search category" />
                <ul id="pg-resu">
                  <li>
                    <a href="all-listing.html">
                      Wedding halls - <span>03</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Hotel &amp; Food - <span>01</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Pet shop - <span>12</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Digital Products - <span>31</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Spa and Facial - <span>10</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Real Estate - <span>23</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Sports - <span>05</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Education - <span>02</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Electricals - <span>05</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Automobiles - <span>06</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Transportation - <span>02</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Hospitals - <span>08</span>
                    </a>
                  </li>
                  <li>
                    <a href="all-listing.html">
                      Hotels And Resorts - <span>09</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dir-home-nav-bot">
                <ul>
                  <li>
                    A few reasons you’ll love Online Business Directory{" "}
                    <span>Call us on: +01 6214 6548</span>
                  </li>
                  <li>
                    <a
                      href="post-your-ads.html.html"
                      className="waves-effect waves-light btn-large"
                    >
                      <i className="material-icons">font_download</i> Advertise
                      with us
                    </a>
                  </li>
                  <li>
                    <a
                      href="pricing-details.html.html"
                      className="waves-effect waves-light btn-large"
                    >
                      {" "}
                      <i className="material-icons">store</i> Add your business
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*END MOBILE MENU*/}
        <div className="top-ser">
          <form name="filter_form" id="filter_form" className="filter_form">
            <ul>
              <li className="sr-sea">
                {/*                                            <input type="text"  id="*/}
                {/*" class="autocomplete"*/}
                {/*                                                   placeholder="*/}
                {/*">*/}
                <input
                  type="text"
                  autoComplete="off"
                  id="top-select-search"
                  placeholder="Search for services and business..."
                />
                <ul id="tser-res1" className="tser-res tser-res2">
                  <li>
                    <div>
                      <h4>The Royal Spa Center For Womens</h4>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Real estate</h4>
                      <span>Chennai, India</span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Education</h4>
                      <span>
                        Schools, university, colleges, online classes, tution
                        centers, distance education..
                      </span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Hotel and resort booking</h4>
                      <span>
                        hotel booking online, hotel reservation, holiday room
                        booking
                      </span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Import and export</h4>
                      <span>
                        Import and export to other countrys with low cost
                      </span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Properties in Illunois</h4>
                      <span>Villas, Plots, House rent and buy</span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Schools in Adyar</h4>
                      <span>schools, adyar, education, </span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Laptop services near you</h4>
                      <span>laptop services, computer services</span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Hospital and medical services near you</h4>
                      <span>Hospital and medical services near you</span>
                      <a href="all-listing.html" />
                    </div>
                  </li>
                </ul>
              </li>
              <li className="sbtn">
                <button
                  type="button"
                  className="btn btn-success"
                  id="top_filter_submit"
                >
                  <i className="material-icons">&nbsp;</i>
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="al duration-500" onMouseEnter={() => setDashboardVisiblity(true)}  onMouseLeave={() => setDashboardVisiblity(false)} >
          <div className="head-pro">
            <img src="https://ik.imagekit.io/rrw4vjgxohv/bizbook/62736rn53themes.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672921816064" alt="" />
            <b>Profile by</b>
            <br />
            <h4>Rn53 Themes</h4>
            <a href="dashboard.html" className="fclick" />
          </div>
          <div className='db-menu duration-500' style={{display:`${isDashboardVisible ? 'block': 'none'}`, transition:'0.3s'}} >
            <ul>
              <li>
                <a href="dashboard.html" className="db-lact">
                  <img src="/icon/dbl1.png" alt="" />
                  My Dashboard
                </a>
              </li>
              <li>
                <a href="db-all-listing.html">
                  <img src="/icon/dbl7.png" alt="" />
                  All Listings
                </a>
              </li>
              <li>
                <a href="add-listing-start.html" className="tz-lma">
                  <img src="/icon/dbl3.png" alt="" />
                  Add New Listing
                </a>
              </li>
              <li>
                <a href="db-enquiry.html">
                  <img src="/icon/dbl14.png" alt="" />
                  Lead enquiry
                </a>
              </li>
              <li>
                <a href="db-events.html">
                  <img src="/icon/dbl4.png" alt="" />
                  Events
                </a>
              </li>
              <li>
                <a href="db-blog-posts.html">
                  <img src="/icon/dbl10.png" alt="" />
                  Blog posts
                </a>
              </li>
              <li>
                <a href="db-review.html">
                  <img src="/icon/dbl13.png" alt="" />
                  Reviews
                </a>
              </li>
              <li>
                <a href="db-my-profile.html">
                  <img src="/icon/dbl6.png" alt="" />
                  My Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/icon/dbl12.png" alt="" />
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*MOBILE MENU*/}
        <div className="mob-menu ">
          <div className="mob-me-ic">
            <i className="material-icons" onClick={() => setMobMenuVisibility(! isMenuVisible)}>menu</i>
          </div>
          <div className={`${isMobMenuVisible ? 'mob-me-all mobmenu-show' :'mob-me-all' }`}>
            <div className="mob-me-clo" >
              <i className="material-icons" onClick={() => setMobMenuVisibility(! isMobMenuVisible)}>close</i>
            </div>
            <div className="mv-pro ud-lhs-s1">
              <img src="/user/62736rn53themes.png" alt="" />
              <h4>Rn53 Themes</h4>
              <b>Join on 26, Mar 2021</b>
            </div>
            <div className="mv-pro-menu ud-lhs-s2">
              <ul>
                <li>
                  <a href="dashboard.html" className="">
                    <img src="/icon/dbl1.png" alt="" />
                    My Dashboard
                  </a>
                </li>
                <li>
                  <a href="db-all-listing.html" className="">
                    <img src="/icon/shop.png" alt="" />
                    All Listings
                  </a>
                </li>
                <li>
                  <a href="add-listing-start.html">
                    <img src="/icon/dbl3.png" alt="" />
                    Add New Listing
                  </a>
                </li>
                <li>
                  <a href="db-enquiry.html" className="">
                    <img src="/icon/tick.png" alt="" />
                    Lead enquiry
                  </a>
                </li>
                <li>
                  <a href="db-products.html" className="">
                    <img src="/icon/cart.png" alt="" />
                    All Products
                  </a>
                </li>
                <li>
                  <a href="db-events.html" className="">
                    <img src="/icon/calendar.png" alt="" />
                    Events
                  </a>
                </li>
                <li>
                  <a href="db-blog-posts.html" className="">
                    <img src="/icon/blog1.png" alt="" />
                    Blog posts
                  </a>
                </li>
                <li>
                  <a href="db-coupons.html" className="">
                    <img src="/icon/coupons.png" alt="" />
                    Coupons
                  </a>
                </li>
                <li>
                  <a href="db-promote.html" className="">
                    <img src="/icon/promotion.png" alt="" />
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="db-seo.html" className="">
                    <img src="/icon/seo.png" alt="" />
                    SEO
                  </a>
                </li>
                <li>
                  <a href="db-review.html" className="">
                    <img src="/icon/dbl13.png" alt="" />
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="db-message.html" className="">
                    <img src="/icon/dbl14.png" alt="" />
                    Messages
                  </a>
                </li>
                <li>
                  <a href="db-my-profile.html" className="">
                    <img src="/icon/dbl6.png" alt="" />
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="db-like-listings.html" className="">
                    <img src="/icon/dbl15.png" alt="" />
                    Liked Listings
                  </a>
                </li>
                <li>
                  <a href="db-followings.html" className="">
                    <img src="/icon/dbl18.png" alt="" />
                    Followings
                  </a>
                </li>
                <li>
                  <a href="db-post-ads.html" className="">
                    <img src="/icon/dbl11.png" alt="" />
                    Ad Summary
                  </a>
                </li>
                <li>
                  <a href="db-payment.html" className="">
                    <img src="/icon/dbl9.png" alt="" />
                    Payment &amp; plan
                  </a>
                </li>
                <li>
                  <a href="db-invoice-all.html" className="">
                    <img src="/icon/dbl16.png" alt="" />
                    Payment invoice
                  </a>
                </li>
                <li>
                  <a href="db-notifications.html" className="">
                    <img src="/icon/dbl19.png" alt="" />
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="how-to.html" className="" target="_blank">
                    <img src="/icon/dbl17.png" alt="" />
                    How to's
                  </a>
                </li>
                <li>
                  <a href="db-setting.html" className="">
                    <img src="/icon/dbl210.png" alt="" />
                    Setting
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/icon/dbl12.png" alt="" />
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
            <div className="mv-cate">
              <h4>All Categories</h4>
              <ul>
                <li>
                  {" "}
                  <a href="all-listing.html">Wedding halls</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Hotel &amp; Food</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Pet shop</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Digital Products</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Spa and Facial</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Real Estate</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Sports</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Education</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Electricals</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Automobiles</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Transportation</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Hospitals</a>
                </li>
                <li>
                  {" "}
                  <a href="all-listing.html">Hotels And Resorts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*END MOBILE MENU*/}
      </div>
    </div>
  </div>
    </div>
    </>
  )
}

export default Header
