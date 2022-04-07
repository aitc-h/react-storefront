import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ListProduct() {
  return <h1>Product</h1>;
}

export default function Products() {
  const [size, setSize] = useState("");
  const { category } = useParams();
  const products = [
    {
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
      description: "This rugged boot will get you up the mountain safely.",
    },
    {
      id: 2,
      category: "shoes",
      image: "shoe2.jpg",
      name: "Climber",
      price: 78.99,
      skus: [
        {
          sku: "28",
          size: 8,
        },
        {
          sku: "29",
          size: 9,
        },
      ],
      description: "Sure-footed traction in slippery conditions.",
    },
    {
      id: 3,
      category: "shoes",
      image: "shoe3.jpg",
      name: "Explorer",
      price: 145.95,
      skus: [
        {
          sku: "37",
          size: 7,
        },
        {
          sku: "38",
          size: 8,
        },
        {
          sku: "39",
          size: 9,
        },
      ],
      description: "Look stylish while stomping in the mud.",
    },
  ];

  return (
    <section id={category}>
      {/* <h1>{toTitleCase(category)}</h1> */}
      <h1>{category}</h1>

      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">All sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        {size && <h2>Found {products.length} items</h2>}
      </section>

      <section id="products">
        {products.map((p) => (
          <ListProduct {...p} />
        ))}
      </section>
    </section>
  );
}
