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
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<string>("");
  const [loading, setLoading] = useBoolean();
  const router = useRouter();

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
      router.push("/dashboard");
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
              value={username}
            />
            <Input
              isInvalid={invalid != ""}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
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
