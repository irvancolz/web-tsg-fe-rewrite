"use client";
import { login } from "@/api/supabase";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Stack,
  useBoolean,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<string>("");
  const [loading, setLoading] = useBoolean();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading.on();
    try {
      await login({
        email: username,
        password,
      });
      setUsername("");
      setPassword("");
      redirect("/dashboard");
    } catch (error: any) {
      setInvalid(error?.message);
    }
    setLoading.off();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card bg={"white"}>
        <CardHeader>
          <Heading size={"md"} textAlign={"center"}>
            Login
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            {invalid && (
              <Heading size={"sm"} color={"red"}>
                {invalid}
              </Heading>
            )}

            <Input
              isInvalid={invalid != ""}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            <Input
              isInvalid={invalid != ""}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <Button colorScheme="blue" type="submit" isLoading={loading}>
              Login
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </form>
  );
}
