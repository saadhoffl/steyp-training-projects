"use client";

import React, { useState, useEffect } from "react";
import style from "./signin.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

function signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nextPath, setNextPath] = useState("");
  const { updateUserData } = useUser();
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const next = query.get("next");
    setNextPath(next || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", JSON.stringify(data));
        updateUserData(data);
        router.push(nextPath || "/");
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          <form className={style.login_form} onSubmit={handleSubmit}>
            <div className={style.input_container}>
              <input
                className={style.input}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={style.input_container}>
              <input
                className={style.input}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
