import React from "react";
import "./css/card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="u-details">
        <div className="profile-pic">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg"
            alt=""
          />
        </div>
        <div className="username">
          <span>Rushil</span>
        </div>
      </div>
      <div className="p-details">
        <div className="p-text">
          <span>Hello everyone im i won the hackathone.</span>
        </div>
        <div className="p-img">
          <img
            src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
            alt=""
          />
        </div>
      </div>
      <div className="likes">
        <div className="like">
          <div className="l-icon">
            <i className="fa-regular fa-heart"></i>
            {/* <i className="fa-solid fa-heart"></i> */}
          </div>
          <div className="l-count">
            <span>10</span>
          </div>
        </div>
        <div className="share">
          <div className="s-icon">
            <i className="fa-solid fa-share"></i>
          </div>
          <div className="s-count">
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
