import React from "react";
import style from "./Spotlight.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Spotlight() {
  return (
    <section className={style.container}>
      <div className={style.left}>
        <div className={style.heading_container}>
          <FontAwesomeIcon icon={faAppleWhole} className={style.icon_apple} />
          <h1 className={style.heading}>iPhone 14 Series</h1>
        </div>
        <h1 className={style.offers_heading}>Up to 10% off Voucher</h1>
        <div className={style.button_container}>
          <button className={style.button}>Shop Now</button>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={style.icon_right_arrow}
          />
        </div>
      </div>
      <div className={style.right}>
        <div className={style.img_container}>
          <Image
            className={style.spotlight_img}
            src="/assets/images/spotlight_img.jpg"
            alt="spotlight_img"
            width={385}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default Spotlight;
