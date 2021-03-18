import React from "react";
import { Link } from "react-router-dom";
import shippingLogo from "../assets/meliFiles/ic_shipping.png";
import "../styles/Item.css";

export const Item = ({ products }) => {
  console.log("PRODUCTS", products);
  return (
    <div key={products.id} className="itemContainer">
      <div className="item">
        <Link className="itemImgLink" to={`/items/${products.id}`}>
          <img className="itemImg" src={products.picture} alt="Product img" />
        </Link>
        <div className="content">
          <span className="spanPrice">
            ${products.price.amount}{" "}
            {products.free_shipping ? (
              <img
                className="shippingLogo"
                src={shippingLogo}
                alt="shipping logo"
              />
            ) : null}
          </span>
          <p>{products.title}</p>
        </div>
        <p className="address">{products.address}</p>
      </div>
    </div>
  );
};
