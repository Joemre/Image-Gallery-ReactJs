import React from "react";
import data from "../helper/Data";

const Card = () => {
  console.log(data);
  return (
    <div className="parent">
      {data.map((image, i) => {
        return (
          <div className="container" key={i}>
            <div className="card">
              <div className="img">
                <img src={image.src.large} alt="img" />
              </div>
              <div className="info">
                <p style={{ color: "purple" }}>{image.photographer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
