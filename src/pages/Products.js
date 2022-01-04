import React from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

function Products() {
  return (
    <h2 className={styles["heading"]}>
      This is Products Page
      <ul className={styles["products-list"]}>
        <li className={styles["product-item"]}>
          <Link to="/products/book">A Book</Link>
        </li>
        <li className={styles["product-item"]}>
          <Link to="/products/chair">A Chair</Link>
        </li>
        <li className={styles["product-item"]}>
          <Link to="/products/table">A Table</Link>
        </li>
      </ul>
    </h2>
  );
}

export default Products;
