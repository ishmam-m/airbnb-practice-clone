import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      {props.element.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
      <img src={"/images/" + props.element.coverImg} className="card-image" />
      <p>
        <img src="/images/Star.png" className="star-icon"/>
        {props.element.stats.rating} <span className="grey-text">({props.element.stats.reviewCount}) &#8226; {props.element.location}</span>
      </p>
      <p className="activity">
        {props.element.title}
      </p>
      <p>
        <b>From ${props.element.price}</b> / person
      </p>
    </div>
  );
}