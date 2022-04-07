import "./App.scss";
import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Detail from "./components/Detail";
import { writeProductData } from "./lib/db";
import { readProductData } from "./lib/db";

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
                <button
                  onClick={() =>
                    writeProductData({
                      id: 1,
                      category: "shoes",
                      image: "shoe1.jpg",
                      name: "Hiker",
                      price: 94.95,
                      skus: [
                        {
                          sku: "17",
                          size: 7,
                        },
                        {
                          sku: "18",
                          size: 8,
                        },
                      ],
                      description:
                        "This rugged boot will get you up the mountain safely.",
                    })
                  }
                  disabled={true}
                >
                  Write
                </button>
                <button onClick={readProductData}>Log</button>
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
