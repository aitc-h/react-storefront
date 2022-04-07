import React from "react";
import "../styles/Header.css";

const activeStyle = {
  color: "purple",
};

const activeStyleFunc = ({ isActive }) => (isActive ? activeStyle : {});

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img alt="Carved Rock Fitness" src="/static/media/logo.png" />
          </li>
          <li>Shoes</li>
          <li>Backpacks</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}
