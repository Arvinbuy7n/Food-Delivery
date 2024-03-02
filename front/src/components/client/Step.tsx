"use client";

import { Container, Stack } from "@mui/material";
import { AlhamNeg } from "./AlhamNeg";
import { AlhamTwo } from "./AlhamTwo";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  district: string;
  setDistrict: Dispatch<SetStateAction<string>>;

  khoroo: string;
  setKhoroo: Dispatch<SetStateAction<string>>;

  apart: string;
  setApart: Dispatch<SetStateAction<string>>;

  addition: string;
  setAddition: Dispatch<SetStateAction<string>>;

  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
};

export const Step = () => {
  const [district, setDistrict] = useState("");
  const [khoroo, setKhoroo] = useState("");
  const [apart, setApart] = useState("");
  const [addition, setAddition] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <Container>
      <Stack direction={"row"} justifyContent={"center"} gap={16}>
        <AlhamNeg
          districts={district}
          setDistricts={setDistrict}
          khoroos={khoroo}
          setKhoroos={setKhoroo}
          aparts={apart}
          setAparts={setApart}
          phone={phone}
          setPhone={setPhone}
          addition={addition}
          setAddition={setAddition}
        />
        <AlhamTwo />
      </Stack>
    </Container>
  );
};
