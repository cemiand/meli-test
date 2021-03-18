import React from "react";
import "../styles/BreadCrumbs.css";

export const BreadCrumbs = ({ products }) => {
  const categories = products?.categories;
  return (
    <div className="BreadCrumbs">
      {categories &&
        categories.map((categorie) => {
          return (
            <span key={categorie.toString()}>
              {categorie}
              <svg
                className="separator"
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="8"
              >
                <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
              </svg>
            </span>
          );
        })}
    </div>
  );
};
