import React from "react";
import style from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faHeadset,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section className={style.container}>
      <div className={style.card_container}>
        <div className={style.icon_container}>
          <FontAwesomeIcon icon={faTruck} className={style.icon} />
        </div>
        <h1 className={style.heading}>FREE AND FAST DELIVERY</h1>
        <h3 className={style.sub_heading}>
          Free delivery for all orders over $140
        </h3>
      </div>
      <div className={style.card_container}>
        <div className={style.icon_container}>
          <FontAwesomeIcon icon={faHeadset} className={style.icon} />
        </div>
        <h1 className={style.heading}>24/7 CUSTOMER SERVICE</h1>
        <h3 className={style.sub_heading}>Friendly 24/7 customer support</h3>
      </div>
      <div className={style.card_container}>
        <div className={style.icon_container}>
          <FontAwesomeIcon icon={faShieldHalved} className={style.icon} />
        </div>
        <h1 className={style.heading}>MONEY BACK GUARANTEE</h1>
        <h3 className={style.sub_heading}>We reurn money within 30 days</h3>
      </div>
    </section>
  );
}

export default Services;
