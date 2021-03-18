import React from "react";
import "../styles/ItemDescription.css";
import { BreadCrumbs } from "./BreadCrumbs";

export const ItemDescription = ({ product }) => {
  return (
    <div className="background">
      <BreadCrumbs products={product} />
      <div className="itemDescriptionContainer">
        <div className="details">
          <div className="imgContainer">
            <img
              className="descriptionImg"
              src={product.item.picture}
              alt="Product Img"
            />
          </div>
          <div className="moreDetails">
            <div>
              <h6>
                {product.item.condition} - {product.item.sold_quantity} vendidos
              </h6>
              <h1 className="title">{product.item.title}</h1>
            </div>
            <div className="priceContainer">
              <div className="price">
                <h1>$ {product.item.price.amount}</h1>
                <h4>{product.item.price.decimals}</h4>
              </div>
              <button className="btnComprar">Comprar</button>
            </div>
          </div>
        </div>
        <div className="description">
          <h2>Descripcion del producto</h2>
          <p>{product.item.description}</p>
        </div>
      </div>
    </div>
  );
};
