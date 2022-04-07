import "./App.scss";
import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<h1>Route!</h1>} />
        </Routes>
        <h1>Welcome!</h1>
      </main>
    </div>
  );
}

export default App;
