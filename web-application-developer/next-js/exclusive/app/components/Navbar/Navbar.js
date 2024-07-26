import React from "react";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <section className={style.top_container}>
      <section className={style.container}>
        <div className={style.left}>
          <span className={style.logo}>Exclusive</span>
        </div>
        <div className={style.middle}>
          <ul className={style.navbar}>
            <li className={(style.navitem, style.active)}>Home</li>
            <li className={style.navitem}>Contact</li>
            <li className={style.navitem}>About</li>
            <li className={style.navitem}>Signin</li>
          </ul>
        </div>
        <div className={style.right}>
          <div className={style.search_bar_container}>
            <input
              className={style.search_bar}
              type="text"
              placeholder="What are you looking for?"
            />
            <FontAwesomeIcon className={style.icon} icon={faMagnifyingGlass} />
          </div>
          <FontAwesomeIcon className={style.icon} icon={faHeart} />
          <FontAwesomeIcon className={style.icon} icon={faCartShopping} />
        </div>
      </section>
    </section>
  );
}

export default Navbar;
