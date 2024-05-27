import React from "react";

const ComingSoon = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontWeight: "700", marginBottom: "30px", fontSize: "90px" }}>
        Coming Soon
      </h1>

      <h5>
        We&apos;re working hard to bring something amazing for you. Stay tuned.
      </h5>
    </div>
  );
};

export default ComingSoon;
