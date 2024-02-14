import React from "react";
import style from "./page.module.scss";
import { Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";
import { Box, Button, Card, Center, Input, Stack } from "@chakra-ui/react";

export default function Page() {
  return (
    <Center h="100vh">
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
        <Stack justify={"center"}>
          <form className={style.right_form}>
            <Input placeholder="username" required />
            <Input placeholder="password" required />
            <Button colorScheme="blue">Login</Button>
          </form>
        </Stack>
      </div>
    </Center>
  );
}
