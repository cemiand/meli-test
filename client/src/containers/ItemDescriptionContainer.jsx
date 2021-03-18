import React, { useEffect, useState } from "react";
import axios from "axios";
import { ItemDescription } from "../components/ItemDescription";
import { Loader } from "../components/Loader";

export const ItemDescriptionContainer = ({ match }) => {
  //LOCAL STATES
  const [product, setProduct] = useState({});

  const productId = match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/items/${productId}`)
      .then((item) => {
        setProduct(item.data);
      })
      .catch((e) => {
        setProduct("");
        console.log("ERROR", e);
      });
  }, [productId]);

  return product.item ? <ItemDescription product={product} /> : <Loader />;
};
