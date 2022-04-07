import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import QC from "./lib/db";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <QC>
        <App />
      </QC>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
