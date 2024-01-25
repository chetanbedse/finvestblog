import React from "react";

function Logo({ width = "250px" }) {
  return (
    <div>
      <img src="/logo.png" alt="" width={width} />
    </div>
  );
}

export default Logo;
