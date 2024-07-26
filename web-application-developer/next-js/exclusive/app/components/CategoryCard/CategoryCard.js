import React from "react";
import style from "./CategoryCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faDesktop,
  faClock,
  faHeadphonesSimple,
  faCamera,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

function CategoryCard() {
  return (
    <section className={style.container}>
      <div className={style.heading_container}>
        <span className={style.right_border}></span>
        <h1 className={style.main_heading}>Categories</h1>
      </div>
      <div className={style.sub_heading_container}>
        <h1 className={style.sub_heading}>Browse By Category</h1>
      </div>
      <div className={style.category_card}>
        <div className={style.card}>
          <div className={style.img_container}>
            <FontAwesomeIcon
              icon={faMobileScreenButton}
              className={style.mobile_screen_icon}
            />
          </div>
          <h1 className={style.card_heading}>Phones</h1>
        </div>
        <div className={style.card}>
          <div className={style.img_container}>
            <FontAwesomeIcon
              icon={faDesktop}
              className={style.mobile_screen_icon}
            />
          </div>
          <h1 className={style.card_heading}>Computers</h1>
        </div>
        <div className={style.card}>
          <div className={style.img_container}>
            <FontAwesomeIcon
              icon={faClock}
              className={style.mobile_screen_icon}
            />
          </div>
          <h1 className={style.card_heading}>SmartWatch</h1>
        </div>
        <div className={style.card}>
          <div className={style.img_container}>
            <FontAwesomeIcon
              icon={faHeadphonesSimple}
              className={style.mobile_screen_icon}
            />
          </div>
          <h1 className={style.card_heading}>HeadPhones</h1>
        </div>
        <div className={style.card}>
          <div className={style.img_container}>
            <FontAwesomeIcon
              icon={faGamepad}
              className={style.mobile_screen_icon}
            />
          </div>
          <h1 className={style.card_heading}>Gaming</h1>
        </div>
        <div className={style.card}>
          <div className={style.img_container}>
            <FontAwesomeIcon
              icon={faCamera}
              className={style.mobile_screen_icon}
            />
          </div>
          <h1 className={style.card_heading}>Camera</h1>
        </div>
      </div>
    </section>
  );
}

export default CategoryCard;
