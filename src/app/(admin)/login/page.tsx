import React from "react";
import style from "./page.module.scss";
import { Images, LoginForm } from "@/components";
import { getStaticAssetsPath } from "@/consts";
import { Center } from "@chakra-ui/react";
import { login } from "@/api/supabase";

export default function Page() {
  return (
    <div className={style.login}>
      <div className={style.login_left}>
        <Images
          className={style.login_left_img}
          alt="img"
          src={getStaticAssetsPath("/images/png", "logo-tsg-dark.png")}
        />
      </div>
      <Center className={style.login_right}>
        <LoginForm />
      </Center>
    </div>
  );
}
