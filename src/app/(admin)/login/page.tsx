import React from "react";
import style from "./page.module.scss";
import { Button, Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";

export default function Page() {
  return (
    <div className={style.login}>
      <div className={style.left}>
        <Images
          src={getStaticAssetsPath("/images/png", "logo-tsg-dark.png")}
          alt="logo tsg"
          className={style.left_img}
        />
        <h1 className={style.left_title}>Welcome to TSGITDEV Admin panel</h1>
        <p className={style.left_desc}>
          Please login with provided credentials given.
        </p>
      </div>
      <div className={style.right}>
        <form className={style.right_form}>
          <label>
            username
            <input type="text" />
          </label>
          <label>
            password
            <input type="password" />
          </label>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
