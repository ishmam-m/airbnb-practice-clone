import React from "react";
import airbnbLogo from "../images/airbnb.png"

export default function Navbar() {
  return (
    <nav class="navbar">
      <img src={airbnbLogo} class="logo"/>
    </nav>
  );
}