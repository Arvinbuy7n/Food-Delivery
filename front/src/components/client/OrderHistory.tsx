"use client";

import { Card, Stack, Typography } from "@mui/material";
import { History } from "./History";
import { useCard } from "../providers/CartProvider";
import { useState } from "react";

export const OrderHistory = () => {
  const { orderList } = useCard();
  const [selected, setSelected] = useState("");

  // const foods = orderList.find((item) => item._id == selected)?.foods;

  return (
    <Stack py={10} direction={"row"} justifyContent={"center"} gap={10}>
      <Card sx={{ width: 450, height: 720, p: 2 }}>
        <Stack gap={4}>
          <Typography fontSize={20} fontWeight={400}>
            Захиалгын түүх
          </Typography>

          <Stack gap={2}>
            {orderList.map((item, index) => {
              return (
                <History key={index} setSelected={setSelected} {...item} />
              );
            })}
          </Stack>
        </Stack>
      </Card>

      <Card sx={{ width: 450, height: 720, p: 2 }}>
        <Stack gap={4}>
          <Typography fontSize={20} fontWeight={400}>
            Захиалгын дэлгэрэнгүй
          </Typography>

          <Stack></Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
