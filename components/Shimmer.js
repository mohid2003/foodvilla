import React from 'react';
import "../shimmer.css";

function Shimmer(props) {

  return (
    <div className="Shimmer-Cards">
      {Array(8).fill("").map((v, i) => (
        <div className="shimmercard" key={i}>
          <div className="shimmerBG media"></div>
          <div className="p-32">
            <div className="shimmerBG title-line"></div>
            <div className="shimmerBG title-line end"></div>

            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
