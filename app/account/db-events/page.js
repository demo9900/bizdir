import React from "react";
// import Headertwo from "@/components/Headertwo";
// import Footer from "@/components/Footer";
// import BottomMenu from "@/components/BottomMenu";
import Link from "next/link";
import EventList from "./EventList";

const page = () => {
    return (
        <div className="ud-main-inn ud-no-rhs">
            <div className="ud-cen">
                <div className="log-bor">&nbsp;</div>
                <span className="udb-inst">All Events</span>
                <div className="ud-cen-s2">
                    <h2>Event Details</h2>
                    <Link href="/create-new-event" className="db-tit-btn">
                        Add new Event
                    </Link>
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
                        <EventList />
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;
