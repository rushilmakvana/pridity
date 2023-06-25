import React from "react";
import "./css/card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="u-details">
        <div className="profile-pic"></div>
        <div className="username"></div>
      </div>
      <div className="p-details"></div>
    </div>
  );
};

export default Card;
