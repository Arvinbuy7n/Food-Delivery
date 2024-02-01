"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "..";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const NewPass2 = () => {
  const router = useRouter();

  const [passCreate, setPassCreate] = useState("");

  const handlePassword = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassCreate(e.target.value)
  }

  return (
    <Container>
      <Stack
        alignItems={"center"}
        height="50vh"
        justifyContent={"center"}
        gap={6}
      >
        <Typography alignSelf={"center"} fontSize={28} fontWeight={700}>
          Нууц үг сэргээх
        </Typography>

        <Stack gap={4}>
          <Typography>
            Таны example@pinecone.mn хаяг руу сэргээх <br></br> код илгээх
            болно.{" "}
          </Typography>

          <CustomInput
            label="Нууц үг сэргээх код"
            placeholder="Нууц үг сэргээх"
            type="password"
            size="medium"
            value={passCreate}
            onChange={handlePassword}
          />
        </Stack>

        <Stack display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            disableElevation
            disabled={!passCreate}
            sx={{
              width: 384,
              fontSize: 13,
              px: 2,
              py: 1.3,
            }}
            onClick={() => {
              router.push("new3");
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
