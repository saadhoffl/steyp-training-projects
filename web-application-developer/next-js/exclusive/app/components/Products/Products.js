import React from "react";
import style from "./Products.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

async function getProducts() {
  const response = await fetch(
    "http://localhost:8000/api/v1/products/?qsize=8"
  );
  const data = await response.json();
  return data.data;
}

const Products = async () => {
  const products = await getProducts();
  const RenderPlaces = () => {
    return products.map((product, index) => {
      return (
        <div className={style.product_card} key={index}>
          <Link href={`/product-details/${product.id}`}>
            <div className={style.product_top_container}>
              <div className={style.img_container}>
                <Image
                  className={style.product_img}
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                />
              </div>
              <button className={style.add_to_cart_button}>Add To Cart</button>
              <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
              <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
            </div>
          </Link>
          <div className={style.bottom_container}>
            <h1 className={style.product_name}>{product.name}</h1>
            <div className={style.price_review_container}>
              <span className={style.price}>${product.price}</span>
              <div className={style.product_star}>
                <FontAwesomeIcon icon={faStar} className={style.star} />
                <FontAwesomeIcon icon={faStar} className={style.star} />
                <FontAwesomeIcon icon={faStar} className={style.star} />
                <FontAwesomeIcon icon={faStar} className={style.star} />
                <FontAwesomeIcon icon={faStar} className={style.star} />
              </div>
              <span className={style.review_count}>(95)</span>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <section className={style.product_container}>{RenderPlaces()}</section>
      <section className={style.product_view_button}>
        <Link href="/products">
          <button className={style.view_button}>View All Products</button>
        </Link>
      </section>
    </>
  );
};

export default Products;
