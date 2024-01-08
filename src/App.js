import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img="katie-zafares.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zafares"
        price="136"
      />
    </div>
  );
}