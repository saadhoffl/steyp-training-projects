import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <section className={style.top_container}>
      <div className={style.container}>
        <div className={style.list_container}>
          <ul className={style.list}>
            <li className={style.list_heading}>Exclusive</li>
            <li className={style.list_sub_heading}>Subscribe</li>
            <li className={style.list_item}>Get 10% off your first order</li>
          </ul>
          <div className={style.input_container}>
            <input
              placeholder="Enter Your Email"
              className={style.input}
            ></input>
            <Image
              className={style.sendicon}
              src="/assets/icons/iconsend.png"
              alt="sendicon"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className={style.list_container}>
          <ul className={style.list}>
            <li className={style.list_heading}>Support</li>
            <li className={style.list_item}>
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </li>
            <li className={style.list_item}>exclusive@gmail.com</li>
            <li className={style.list_item}>+88015-88888-9999</li>
          </ul>
        </div>
        <div className={style.list_container}>
          <ul className={style.list}>
            <li className={style.list_heading}>Account</li>
            <li className={style.list_item}>My Account</li>
            <li className={style.list_item}>Login / Register</li>
            <li className={style.list_item}>Cart</li>
            <li className={style.list_item}>Wishlist</li>
            <li className={style.list_item}>Shop</li>
          </ul>
        </div>
        <div className={style.list_container}>
          <ul className={style.list}>
            <li className={style.list_heading}>Quick Link</li>
            <li className={style.list_item}>Privacy Policy</li>
            <li className={style.list_item}>Terms Of Use</li>
            <li className={style.list_item}>FAQ</li>
            <li className={style.list_item}>Contact</li>
          </ul>
        </div>
        <div className={style.download_app}>
          <h1 className={style.download_heading}>Download App</h1>
          <h3 className={style.download_sub_heading}>
            Save $3 with App New User Only
          </h3>
          <div className={style.download_container}>
            <Image
              src="/assets/images/qrcode.png"
              alt=""
              width={80}
              height={80}
            />
            <div className={style.app}>
              <Image
                src="/assets/images/googleplay.png"
                alt=""
                width={100}
                height={40}
              />
              <Image
                src="/assets/images/appstore.png"
                alt=""
                width={100}
                height={40}
              />
            </div>
          </div>
          <div className={style.social_icon}>
            <Image
              src="/assets/icons/icon_facebook.png"
              alt=""
              width={20}
              height={20}
              className={style.star}
            />
            <Image
              src="/assets/icons/icontwitter.png"
              alt=""
              width={20}
              height={20}
              className={style.star}
            />
            <Image
              src="/assets/icons/iconinstagram.png"
              alt=""
              width={20}
              height={20}
              className={style.star}
            />
            <Image
              src="/assets/icons/iconlinkedin.png"
              alt=""
              width={20}
              height={20}
              className={style.star}
            />
          </div>
        </div>
      </div>
      <div className={style.copyright}>
        <FontAwesomeIcon icon={faCopyright} className={style.copyright_icon} />
        <h1 className={style.copyright_text}>
          Copyright Rimel 2022. All right reserved
        </h1>
      </div>
    </section>
  );
}

export default Footer;
