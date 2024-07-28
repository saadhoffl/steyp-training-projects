import React from "react";
import style from "./signin.module.css";
import Link from "next/link";

function signin() {
  return (
    <section className={style.container}>
      <div className={style.left}>
        <div className={style.logo_container}>
          <Link href="/">
            <h1 className={style.logo}>Exclusive</h1>
          </Link>
        </div>
        <div className={style.main_heading}>
          Buy it, Touch it & Enjoy it. All products is exclusively designed for
          you.
        </div>
      </div>
      <div className={style.right}>
        <div className={style.login_container}>
          <h1 className={style.login_heading}>Login to your account</h1>
          <h2 className={style.login_info}>
            Enter your email and password to login
          </h2>
          <form className={style.login_form}>
            <div className={style.input_container}>
              <input
                className={style.input}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className={style.input_container}>
              <input
                className={style.input}
                type="password"
                placeholder="Password"
              />
            </div>
            <Link href="/signup" className={style.signup_btn}>
              Don't have an account?
            </Link>
            <div className={style.submit_btn_container}>
              <button type="submit" className={style.submit_btn}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default signin;
