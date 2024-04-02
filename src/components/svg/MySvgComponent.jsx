import React from "react";

const MySvgComponent = () => {
  return (
    <svg className="svg-base mb-2" style={{ width: "28px", height: "28px" }}>
      <use href="#dia-faceted-round" />
    </svg>
  );
};

export default MySvgComponent;
