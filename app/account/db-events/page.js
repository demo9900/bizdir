import React from "react";
// import Headertwo from "@/components/Headertwo";
// import Footer from "@/components/Footer";
// import BottomMenu from "@/components/BottomMenu";
import Link from "next/link";
import EventList from "./EventList";
import ComingSoon from "@/components/ComingSoon";

const page = () => {

    return <ComingSoon />
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

                    <EventList />
                </div>
            </div>
        </div>
    );
};

export default page;
