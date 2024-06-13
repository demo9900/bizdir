"use client";
import React, { useState } from "react";
import Link from "next/link";
const Listing_Tab = ({
  trendinglist,
  latestlist,
  verifiedlist,
  nearbylist,
  offerlist,
}) => {
  const [openTab, setOpenTab] = useState(1);

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
        {openTab === 1 && <ListingCard itemList={trendinglist} />}
        {openTab === 2 && <ListingCard itemList={latestlist} />}
        {openTab === 3 && <ListingCard itemList={verifiedlist} />}
        {openTab === 4 && <ListingCard itemList={offerlist} />}
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

const ListingCard = ({ itemList }) => {
  return (
    <ul>
      {itemList.length > 0 ? (
        itemList.map((item, index) => (
          <li key={index}>
            <div className="plac-hom-box">
              <div className="plac-hom-box-im">
                {itemList.isClaimed && (
                  <small
                    style={{
                      color: itemList.isClaimed === "claimed" ? "green" : "",
                    }}
                  >
                    {itemList?.isClaimed}
                  </small>
                )}
                <small>Unclaimed</small>
                <img
                  src={item?.listing_image}
                  className="b-lazy b-loaded"
                  alt=""
                />
                <h4>{item?.listing_name}</h4>
              </div>
              <div className="rel-list-txt-box">
                <span className="dir-ho-cat">{item?.category}</span>
                <span className="rat-more-cta-ic">More details</span>
              </div>
              <Link href={`/all-listing/${item._id}`} className="fclick" />
            </div>
          </li>
        ))
      ) : (
        <div className="container ser-re-hu mx-auto my-10 text-center">
          Oops!!! No result(s) Found . Please try with other!!!
        </div>
      )}
    </ul>
  );
};
