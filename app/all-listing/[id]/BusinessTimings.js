import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const BusinessTimings = ({ timingData }) => {
  const [showTimings, setShowTimings] = useState(false);
  const date = new Date();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function timing_status(week_off = [], curr_day) {
    return week_off.includes(curr_day) ? "Closed" : "Opened";
  }

  console.log("Timings here ->", timingData);
  return (
    <div className="list-work-hrs">
      <div className="today">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          <b>Working hours</b>
          <BiChevronDown
            cursor={"pointer"}
            size={24}
            onClick={() => setShowTimings(!showTimings)}
            style={{
              transform: !showTimings ? "rotate(-90deg)" : "rotate(0deg)",
              transition: "0.2s all ease-in-out",
            }}
          />
        </div>
        <span className="status">
          {timing_status(timingData?.week_off, date.getDay())}
        </span>
        {timing_status(timingData?.week_off, date.getDay()) === "Opened" && (
          <small className="time">
            {timingData?.open_time} - {timingData?.close_time}
          </small>
        )}
      </div>
      <div
        className="timing"
        style={{
          height: !showTimings ? "0" : "220px",
          marginTop: "24px",
          transition: "0.2s all ease-in-out",
          overflow: "hidden",
        }}
      >
        <ul>
          {days.map((d, idx) => (
            <li key={idx} style={{ border: 0, padding: "4px 0" }}>
              {d}:{" "}
              <span
                className="time"
                style={{
                  color:
                    timing_status(timingData?.week_off, d) === "Closed"
                      ? "red"
                      : "green",
                }}
              >
                {timing_status(timingData?.week_off, d) === "Closed"
                  ? "Closed"
                  : `${timingData?.open_time} - ${timingData?.close_time}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessTimings;
