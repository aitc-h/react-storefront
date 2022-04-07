import "./App.scss";
import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/:category" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
