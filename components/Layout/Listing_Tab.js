"use client";
import React, { useState } from "react";
import Link from "next/link";
import TabCard from "@/components/TabCard";
const Listing_Tab = ({
  trendinglist,
  latestlist,
  verifiedlist,
  nearbylist,
  offerlist,
}) => {
  const [openTab, setOpenTab] = useState(1);
console.log("latest listing =>", latestlist)
  return (
    <div className="products row mx-auto">
      <div className="home-tit">
        <h2>
          <span>Popular Services</span> near you
        </h2>
        <p>
          lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
          fringilla.
        </p>
      </div>
      <div className="list-filt-v2 mb-[20px]">
        <ul>
          <li>
            <div className="chbox">
              <label
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                className={openTab === 1 ? "select" : ""}
                htmlFor="lfv2-pop"
              >
                Trending
              </label>
            </div>
          </li>
          <li>
            <div className="chbox">
              <label
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                className={openTab === 2 ? "select" : ""}
                htmlFor="lfv2-op"
              >
                Latest
              </label>
            </div>
          </li>
          <li>
            <div className="chbox">
              <label
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                className={openTab === 3 ? "select" : ""}
                htmlFor="lfv2-tru"
              >
                Verified
              </label>
            </div>
          </li>

          <li>
            <div className="chbox">
              <label
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                className={openTab === 4 ? "select" : ""}
                htmlFor="lfv2-off"
              >
                Offers
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="plac-hom-all-pla">
        {openTab === 1 && <TabCard itemList={trendinglist} />}
        {openTab === 2 && <TabCard itemList={latestlist} />}
        {openTab === 3 && <TabCard itemList={verifiedlist} />}
        {openTab === 4 && <TabCard itemList={offerlist} />}
      </div>
      <div className="hom-cate-more">
        <Link href="/all-listing" className="cta-new-blue">
          View all services
        </Link>
      </div>
    </div>
  );
};

export default Listing_Tab;


