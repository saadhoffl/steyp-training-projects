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

function ProductDetails() {
  return (
    <>
      <section className={style.product_heading_container}>
        <h1 className={style.heading}>
          Home <span className={style.slash}>/</span> Camera
          <span className={style.slash}> / </span> CANON EOS DSLR Camera
        </h1>
      </section>
      <section className={style.product_details}>
        <div className={style.left_container}>
          <Image
            className={style.product_img}
            src="/assets/images/camera.png"
            alt="product_img"
            width={400}
            height={300}
          />
        </div>
        <div className={style.right_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
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
            <p className={style.description}>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
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
}

export default ProductDetails;
