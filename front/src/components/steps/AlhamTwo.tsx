"use client";

import { Button, Card, Stack, Typography } from "@mui/material";
import { CustomRadio } from "../customs/CustomRadio";
import { useCard } from "../providers/CartProvider";
import { MyOrderItem } from "../customs/MyOrderItem";
import { usePathname } from "next/navigation";
import { MyOrder } from "../customs/MyOrder";

export const AlhamTwo = () => {
  const { addBasket } = useCard();
  const pathname = usePathname();

  return (
    <Stack py={8} gap={6}>
      <Stack direction={"row"}>
        <CustomRadio />

        <Stack>
          <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
            Алхам 2
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Захиалга баталгаажуулах
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Stack>

      <Card
        sx={{
          width: 530,
        }}
      >
        <Stack py={2} px={1} justifyContent={"space-between"} height={580}>
          <Stack overflow={"scroll"}>
            <MyOrder
              closeButton={close}
              foodName=""
              price={0}
              ingredients=""
              foodImage=""
            />
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
