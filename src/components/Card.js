import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <img src={"/images/" + props.img} className="card-image" />
      <p>
        <img src="/images/Star.png" className="star-icon"/>
        {props.rating} <span className="grey-text">({props.reviewCount}) &#8226; {props.location}</span>
      </p>
      <p className="activity">
        {props.title}
      </p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}