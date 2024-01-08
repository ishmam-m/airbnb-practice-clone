import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./data.js";

const cards = data.map(element => {
  return ( 
    <Card
      key={element.id}
      element={element}
    />
  );
});

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-grid">
        {cards}
      </div>
    </div>
  );
}