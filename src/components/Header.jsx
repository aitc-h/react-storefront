import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

// const activeStyle = {
//   color: "purple",
// };

// const activeStyleFunc = ({ isActive }) => (isActive ? activeStyle : {});

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/static/media/logo.png" />
            </Link>
          </li>
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
          {/* <li>Backpacks</li> */}
          {/* <li>Cart</li> */}
        </ul>
      </nav>
    </header>
  );
}
