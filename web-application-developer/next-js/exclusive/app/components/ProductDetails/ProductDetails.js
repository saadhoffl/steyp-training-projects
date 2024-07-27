import React from "react";
import style from "./ProductDetails.module.css";

function ProductDetails() {
  return (
    <>
      <section className={style.product_heading_container}>
        <h1 className={style.heading}>
          Home <span className={style.slash}>/</span> Camera
          <span className={style.slash}> / </span> CANON EOS DSLR Camera
        </h1>
      </section>
    </>
  );
}

export default ProductDetails;
