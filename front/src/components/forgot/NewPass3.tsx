"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "..";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const NewPass3 = () => {
  const router = useRouter();

  const [newPass, setNewPass] = useState("");
  const [passAgain, setPassAgain] = useState("")

  return (
    <Container>
      <Stack
        alignItems={"center"}
        height="50vh"
        justifyContent={"center"}
        gap={6}
      >
        <Typography alignSelf={"center"} fontSize={28} fontWeight={700}>
          Шинэ нууц үг зохиох
        </Typography>

        <Stack gap={2}>
          <CustomInput
            label="Нууц үг"
            placeholder="********"
            type="password"
            size="medium"
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value)
            }}
          />
          <CustomInput
            label="Нууц үг давтах"
            placeholder="********"
            type="password"
            size="medium"
            value={passAgain}
            onChange={(e) => {
              setPassAgain(e.target.value)
            }}
          />
        </Stack>

          <Button
            variant="contained"
            disableElevation
            disabled={!newPass || !passAgain}
            sx={{
              width: 384,
              fontSize: 13,
              px: 2,
              py: 1.3,
            }}
            onClick={() => {
              router.push("login");
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
    </Container>
  );
};
