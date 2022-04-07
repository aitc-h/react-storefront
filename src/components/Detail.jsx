import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { toTitleCase } from "../lib/string";
import { useProduct } from "../lib/db";

export default function Detail() {
  const { id, category } = useParams();
  const [sku, setSku] = useState("");

  const { isLoading, isError, product } = useProduct(id);

  if (isLoading) return <Spinner />;
  if (isError) return <PageNotFound />;

  const { name, description, price, skus, image } = product;

  return (
    <div id="detail">
      <h4>{toTitleCase(category)} &gt; </h4>
      <h1>{name}</h1>
      <p>{description}</p>
      <p id="price">${price}</p>
      <select
        title="Size"
        id="size"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
      >
        <option value="">Select size</option>
        {skus?.map(({ sku, size }) => (
          <option key={sku} value={sku}>
            {size}
          </option>
        ))}
      </select>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "add", id, sku });
            navigate("/cart");
          }}
          disabled={!sku}
        >
          Add to cart
        </button>
      </p>
      <img
        src={`https://github.com/aitc-h/RMS-10/raw/master/public/images/${image}`}
        alt={category}
      />
    </div>
  );
}
