import React from "react";
import style from "./Products.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

function Products() {
  return (
    <section className={style.product_container}>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
      <div className={style.product_card}>
        <div className={style.product_top_container}>
          <div className={style.img_container}>
            <Image
              className={style.product_img}
              src="/assets/images/camera.png"
              alt="product_img"
              width={400}
              height={300}
            />
          </div>
          <button className={style.add_to_cart_button}>Add To Cart</button>
          <FontAwesomeIcon icon={faHeart} className={style.heart_icon} />
          <FontAwesomeIcon icon={faEye} className={style.eye_icon} />
        </div>
        <div className={style.bottom_container}>
          <h1 className={style.product_name}>CANON EOS DSLR Camera</h1>
          <div className={style.price_review_container}>
            <span className={style.price}>$360</span>
            <Image
              className={style.product_star}
              src="/assets/images/fivestar.png"
              alt="star"
              width={25}
              height={25}
            />
            <span className={style.review_count}>(95)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
