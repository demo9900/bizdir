"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const EventList = () => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session, status } = useSession();

    const getEventData = async () => {
        try {
            setLoading(true);
            const res = await fetch(process.env.BACKEND_URL + "/api/event", {
                headers: {
                    authorization: "Bearer " + session.jwt,
                },
            });

            const data = await res.json();

            console.log(data);
            setEventData(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (status === "authenticated") getEventData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const deleteEvent = async (id) => {
        try {
            const res = await fetch(
                process.env.BACKEND_URL + "/api/event/" + id,
                {
                    headers: {
                        authorization: "Bearer " + session.jwt,
                    },
                    method: "DELETE",
                }
            );

            getEventData();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <>Loading...</>;

    return (
        <table className="responsive-table bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Event Name</th>
                    <th>Event Date</th>
                    <th>Views</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Preview</th>
                </tr>
            </thead>
            <tbody>
                {eventData.map((event, idx) => (
                    <tr key={event._id}>
                        <td>{idx + 1}</td>
                        <td>
                            CHAMPIONS OF INDIA RUN-RIDE-WALK
                            <span>12, Mar 2021</span>
                        </td>
                        <td>21, Mar 2021</td>
                        <td>
                            <span className="db-list-rat">8</span>
                        </td>
                        <td>
                            <Link href="/edit-event" className="db-list-edit">
                                Edit
                            </Link>
                        </td>
                        <td>
                            <Link href="/#" className="db-list-edit">
                                Delete
                            </Link>
                        </td>
                        <td>
                            <Link
                                href="/event-details"
                                className="db-list-edit"
                                target="_blank"
                            >
                                Preview
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EventList;
