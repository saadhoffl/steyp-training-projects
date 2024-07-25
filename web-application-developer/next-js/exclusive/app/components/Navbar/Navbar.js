import React from "react";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <section className={style.container}>
      <div className={style.left}>
        <span className={style.logo}>Exclusive</span>
      </div>
      <div className={style.middle}>
        <ul className={style.navbar}>
          <li className={style.navitem}>Home</li>
          <li className={style.navitem}>Contact</li>
          <li className={style.navitem}>About</li>
          <li className={style.navitem}>Signup</li>
        </ul>
      </div>
      <div className={style.right}>
        <div className={style.search_bar_container}>
          <input
            className={style.search_bar}
            type="text"
            placeholder="Search"
          />
          <span className={style.search_icon}>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>

        <span className={style.user_wishlist}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
        <span className={style.cart_icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
    </section>
  );
}

export default Navbar;
