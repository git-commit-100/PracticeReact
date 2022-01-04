import React from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  const { productId } = params;
  return (
    <>
      <h2 className={styles["heading"]}>Product Details</h2>
      <h4 className={styles["product-heading"]}>{productId}</h4>
      <p className={styles["product-info"]}>{`This is a nice ${productId}`}</p>
    </>
  );
}

export default ProductDetails;
