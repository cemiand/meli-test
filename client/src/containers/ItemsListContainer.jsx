import React, { useEffect, useState } from "react";
import axios from "axios";
import { ItemsList } from "../components/ItemsList";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { Loader } from "../components/Loader";

export const ItemsListContainer = ({ location }) => {
  //LOCAL STATES
  const [products, setProducts] = useState();

  //QUERY PARA COMPLETAR URL
  const query = location.search.slice(location.search.indexOf("=") + 1);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/items?search=${query}`)
      .then((items) => {
        setProducts(items.data);
        console.log("AOSJD", products);
      })
      .catch((e) => {
        setProducts("");
        console.log("ERROR", e);
      });
  }, [query]);

  return (
    <div className="bigContainer">
      <BreadCrumbs products={products} />
      {products ? <ItemsList products={products} /> : <Loader />}
    </div>
  );
};
