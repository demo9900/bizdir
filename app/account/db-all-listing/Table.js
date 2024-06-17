"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const Table = () => {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  const getListingData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        process.env.BACKEND_URL + `/api/listing/user/${session.user.id}`,
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();

      console.log(data);
      setListingData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getListingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteListing = async (id) => {
    try {
      const res = await fetch(process.env.BACKEND_URL + "/api/listing/" + id, {
        headers: {
          authorization: "Bearer " + session.jwt,
        },
        method: "DELETE",
      });

      if (res.status === 200) {
        toast.success("listing deleted successfully");
        // Call getListingData to update the listing data
        getListingData();
      }
    } catch (error) {
      console.error(error);
      toast.error("somthing went wrong");
    }
  };

  if (loading) return <>Loading</>;
  return (
    <div className="table-responsive">
      <table className="table bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Listing Name</th>
            <th>Rating</th>
            <th>Views</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {listingData.map((listing, idx) => {
            return (
              <tr key={idx}>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  {idx + 1}
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  <img src={listing.listing_image} alt="N/A" />
                  {listing.listing_name}
                  {/* <span>09, Apr 2021</span> */}
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  <span className="db-list-rat">
                    {listing.ratings?.$numberDecimal}
                  </span>
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  }`}
                >
                  <span className="db-list-rat">{listing.views}</span>
                </td>
                
                {listing.listing_status !== 'Disabled'? (
                <td
                  className={`${
                    listing.listing_status === "Disabled" ? "disabled" : ""
                  } ${
                    listing.approval === "approved"
                      ? "approve"
                      : listing.approval === "rejected"
                      ? "reject"
                      : "pending"
                  } relative`}
                >
                  {listing?.approval}
                  <span
                    className="custom-tooltip"
                    data-text={`${listing.approval_by?.message}`}
                  >
                    {listing.approval_by?.message}
                  </span>
                </td>
                ):(
                <td>
                <span>{listing.listing_status}</span>
                </td>
                )}
                
                <td
                  className={` ${
                    listing.listing_status === "Disabled"
                      ? "disabled hidden"
                      : ""
                  }`}
                >
                  <Link
                    className="db-list-edit"
                    href={`/account/edit-listing/${listing._id}`}
                  >
                    Edit
                  </Link>
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled"
                      ? "disabled hidden"
                      : ""
                  }`}
                >
                  <button
                    className="db-list-edit"
                    onClick={() => deleteListing(listing._id)}
                  >
                    Delete
                  </button>
                </td>
                <td
                  className={`${
                    listing.listing_status === "Disabled"
                      ? "disabled hidden"
                      : ""
                  }`}
                >
                  <button><Link href={`/all-listing/${listing._id}`}>Preview</Link></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
