import React from "react";
import Image from "next/image";
import style from "./ProductDetails.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faStar,
  faTentArrowTurnLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

async function getProducts(id) {
  const response = await fetch(
    `http://localhost:8000/api/v1/products/view/${id}/`,
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyNTMwNDU4LCJpYXQiOjE3MjI1MzAxNTgsImp0aSI6IjJkMDIyMDE3Yjc0OTQ1OTg5MDA5ZTI5NzYwOThmNDE4IiwidXNlcl9pZCI6MX0.Eg7mNc71i2r6gLyMsYQ7rM2lcC5Zlztr1StZ-bAiisk`,
      },
    }
  );
  const data = await response.json();
  return data.data;
}

const ProductDetails = async ({ id }) => {
  const products = await getProducts(id);
  return (
    <>
      <section className={style.product_heading_container}>
        <h1 className={style.heading}>
          Home <span className={style.slash}>/</span> {products.category}
          <span className={style.slash}> / </span> {products.name}
        </h1>
      </section>
      <section className={style.product_details}>
        <div className={style.left_container}>
          <Image
            className={style.product_img}
            src={products.image}
            alt={products.name}
            width={400}
            height={300}
          />
        </div>
        <div className={style.right_container}>
          <h1 className={style.product_name}>{products.name}</h1>
          <div className={style.stock_review_container}>
            <div className={style.star_container}>
              <FontAwesomeIcon icon={faStar} className={style.star} />
              <FontAwesomeIcon icon={faStar} className={style.star} />
              <FontAwesomeIcon icon={faStar} className={style.star} />
              <FontAwesomeIcon icon={faStar} className={style.star} />
              <FontAwesomeIcon icon={faStar} className={style.star} />
            </div>
            <div className={style.stock_review_count_container}>
              <h3 className={style.stock_review_count}>(150 Reviews) </h3>
              <span className={style.slash}> | </span>
              <h3 className={style.in_stock}> In Stock</h3>
            </div>
          </div>
          <div className={style.description_container}>
            <p className={style.description}>{products.description}</p>
          </div>
          <div className={style.color_container}>
            <h3 className={style.color_heading}>Color:</h3>
            <FontAwesomeIcon icon={faCircle} className={style.active} />
            <FontAwesomeIcon icon={faCircle} className={style.circle} />
          </div>
          <div className={style.delivery_top_container}>
            <div className={style.delivery_container}>
              <FontAwesomeIcon icon={faTruck} className={style.delivery_icon} />
              <div className={style.delivery}>
                <h3 className={style.delivery_heading}>Free Delivery</h3>
                <h3 className={style.delivery_sub_heading}>
                  Enter your postal code for Delivery Availability
                </h3>
              </div>
            </div>
            <div className={style.delivery_container}>
              <FontAwesomeIcon
                icon={faTentArrowTurnLeft}
                className={style.delivery_icon}
              />
              <div className={style.delivery}>
                <h3 className={style.delivery_heading}>Return Delivery</h3>
                <h3 className={style.delivery_sub_heading}>
                  Free 30 Days Delivery Returns. Details
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
