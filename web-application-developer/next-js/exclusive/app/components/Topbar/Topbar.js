import React from "react";
import style from "./Topbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  return (
    <section className={style.container}>
      <div className={style.left}>
        <p className={style.paragraph}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className={style.shopnow}>Shop Now</span>
        </p>
      </div>
      <div className={style.right}>
        <button className={style.languages}>English</button>
        <FontAwesomeIcon icon={faChevronDown} className={style.chevron_down} />
      </div>
    </section>
  );
}

export default Topbar;
