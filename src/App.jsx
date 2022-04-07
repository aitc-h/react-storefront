import "./App.scss";
import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Detail from "./components/Detail";
import { writeProductData } from "./lib/db";

function App() {
  return (
    <div className="content">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome</h1>
                <button onClick={writeProductData}>fb</button>
              </>
            }
          />
          <Route path="/:category" element={<Products />} />
          <Route path="/:category/:id" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
