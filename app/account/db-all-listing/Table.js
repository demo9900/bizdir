"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Table = () => {
    const [listingData, setListingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session, status } = useSession();

    console.log(session);
    const getListingData = async () => {
        try {
            setLoading(true);
            console.log("inside getlisting", session.jwt);
            const res = await fetch(process.env.BACKEND_URL + "/api/listing", {
                headers: {
                    authorization: "Bearer " + session.jwt,
                },
            });

            const data = await res.json();

            console.log(data);
            setListingData(data);

            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getListingData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const deleteListing = async (id) => {
        try {
            const res = await fetch(
                process.env.BACKEND_URL + "/api/listing/" + id,
                {
                    headers: {
                        authorization: "Bearer " + session.jwt,
                    },
                    method: "DELETE",
                }
            );
            const data = await res.json();

            console.log(res.status, data.status);
            getListingData();
        } catch (error) {
            console.error(error);
        }
    };

    const updateListing = async (id) => {
        try {
            console.log("updated");

            getListingData();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <>Loading</>;

    console.log(listingData);
    return (
        <div className="table-responsive">
            <table className="table bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Listing Name</th>
                        <th>Rating</th>
                        <th>Views</th>
                        <th>Created by</th>
                        {/*<th>Promote</th>*/}
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {listingData.map((listing, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>
                                    <img
                                        src={listing.gallery_images[0]}
                                        alt="N/A"
                                    />
                                    {listing.listing_name}
                                    {/* <span>09, Apr 2021</span> */}
                                </td>
                                <td>
                                    <span className="db-list-rat">
                                        {listing.ratings.$numberDecimal}
                                    </span>
                                </td>
                                <td>
                                    <span className="db-list-rat">
                                        {listing.views}
                                    </span>
                                </td>
                                <td>
                                    <a
                                        href="http://localhost/directory/bizbook/profile/rn53-themes"
                                        className="db-list-ststus"
                                        target="_blank"
                                    >
                                        {listing.user_name}
                                    </a>
                                </td>
                                {/* <td>
                                    <a
                                        href="admin-promote-now.html?code=&&type=listing"
                                        class="db-list-edit"
                                    ></a>
                                </td> */}
                                <td>
                                    <button
                                        onClick={() =>
                                            updateListing(listing._id)
                                        }
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            deleteListing(listing._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button>Preview</button>
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
