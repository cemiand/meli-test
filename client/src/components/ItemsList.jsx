import React from "react";
import { Item } from "./Item";
import "../styles/ItemsList.css";

export const ItemsList = ({ products }) => {
  console.log(products);
  return (
    <div className="ItemsContainer">
      {products?.items &&
        products.items.map((item) => {
          return <Item key={item.id} products={item} />;
        })}
    </div>
  );
};
