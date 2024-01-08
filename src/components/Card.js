import React from "react";
import cardImage from "../images/katie-zafares.png";
import starIcon from "../images/Star.png";

export default function Card() {
  return (
    <div className="card-container">
      <img src={cardImage} className="card-image" />
      <p>
        <img src={starIcon} className="star-icon"/>
        5.0 <span className="grey-text">(6) &#8226; USA</span>
      </p>
      <p className="activity">
        Life lessons with Katie Zafares
      </p>
      <p>
        <b>From $136</b> / person
      </p>
    </div>
  );
}