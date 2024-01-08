import React from "react";

export default function Hero() {
  return (
    <section class="hero-container">
      <div className="photo-grid-container">
        <img src="/images/photo-grid.png" class="photo-grid"/>
      </div>
      
      <div className="hero-info-container">
        <h1 className="hero-header">Online Experiences</h1>
        <p className="description">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
  );
}