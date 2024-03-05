import { Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useCard } from "../providers/CartProvider";
import { Record } from "../providers/FoodProvider";

type OrderDetailProps = {
  handleClose: () => void;
  add?: number;
} & Record;

export const OrderDetail = ({
  handleClose,
  add: propsAdd,
  ...props
}: OrderDetailProps) => {
  const { foodName, foodImage, price, ingredient } = props;
  const { addFood, add, setAdd } = useCard();

  const basketClick = () => {
    addFood({
      food: props,
      quantity: add,
    });
    handleClose();
  };

  const changeCount = (change: number) => {
    setAdd((prev) => {
      if (change < 0 && prev == 1) return prev;
      return prev + change;
    });
  };

  return (
    <Stack
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      <Stack width={{ xs: 380, lg: 950 }}>
        <Card sx={{ borderRadius: 4 }}>
          <Stack
            height={535}
            p={4}
            bgcolor={"#FFF"}
            flexDirection={{ xs: "column", lg: "row" }}
            gap={4}
          >
            <Card sx={{ borderRadius: 2, width: 490 }}>
              <Image src={foodImage} alt="food" width={500} height={500} />
            </Card>

            <Stack gap={2} width={440}>
              <Stack sx={{ alignItems: "end" }}>
                <Image
                  src="/close.png"
                  alt="ss"
                  width={24}
                  height={24}
                  onClick={handleClose}
                ></Image>
              </Stack>
              <Stack gap={4}>
                <Stack>
                  <Typography fontSize={26} fontWeight={700}>
                    {foodName}
                  </Typography>
                  <Stack direction={"row"}>
                    <Typography
                      fontSize={18}
                      fontWeight={600}
                      color={"#18BA51"}
                    >
                      {price}₮
                    </Typography>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography fontSize={18} fontWeight={600} color={"#000"}>
                    Орц
                  </Typography>
                  <Card sx={{ bgcolor: "#F6F6F6" }}>
                    <Typography p={1} fontSize={16} fontWeight={400}>
                      {ingredient}
                    </Typography>
                  </Card>
                </Stack>

                <Typography fontSize={18} fontWeight={600} color={"#000"}>
                  Тоо
                </Typography>

                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography
                    sx={{
                      bgcolor: "#18BA51",
                      color: "#FFF",
                      fontSize: 20,
                      fontWeight: 700,
                      py: 1,
                      px: 2.3,
                      borderRadius: 2,
                    }}
                    onClick={() => {
                      changeCount(-1);
                    }}
                  >
                    -
                  </Typography>
                  <Typography fontSize={18} fontWeight={500} mt={1.3}>
                    {add}
                  </Typography>
                  <Typography
                    sx={{
                      bgcolor: "#18BA51",
                      color: "#FFF",
                      fontSize: 20,
                      fontWeight: 700,
                      py: 1,
                      px: 2,
                      borderRadius: 2,
                    }}
                    onClick={() => {
                      changeCount(1);
                    }}
                  >
                    +
                  </Typography>
                </Stack>

                <Button
                  sx={{
                    bgcolor: "#18BA51",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 400,
                    py: 1,
                  }}
                  onClick={() => {
                    basketClick();
                  }}
                >
                  Сагслах
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};
