import { Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useCard } from "../providers/CartProvider";
import { Record } from "../providers/FoodProvider";

type OrderDetailProps = {
  handleClose: () => void;
  add?: number;
  setAdd?: Dispatch<SetStateAction<number>>;
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
      <Stack width={950}>
        <Card sx={{ borderRadius: 4 }}>
          <Stack height={535} p={4} bgcolor={"#FFF"} direction={"row"} gap={4}>
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
                  <Typography fontSize={28} fontWeight={700}>
                    {foodName}
                  </Typography>
                  <Stack direction={"row"}>
                    <Typography
                      fontSize={18}
                      fontWeight={600}
                      color={"#18BA51"}
                    >
                      {price}
                    </Typography>
                    <Typography
                      color={"#18BA51"}
                      fontSize={18}
                      fontWeight={600}
                    >
                      ₮
                    </Typography>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography fontSize={18} fontWeight={600}>
                    Орц
                  </Typography>
                  <Card sx={{ bgcolor: "grey.200" }}>
                    <Typography p={1} fontSize={16}>
                      {ingredient}
                    </Typography>
                  </Card>
                </Stack>

                <Typography fontSize={18} fontWeight={600}>
                  Тоо
                </Typography>

                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Button
                    sx={{
                      bgcolor: "#18BA51",
                      color: "#FFF",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                    onClick={() => {
                      changeCount(-1);
                    }}
                  >
                    -
                  </Button>
                  <Typography fontSize={16} fontWeight={500} mt={1}>
                    {add}
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: "#18BA51",
                      color: "#FFF",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                    onClick={() => {
                      changeCount(1);
                    }}
                  >
                    +
                  </Button>
                </Stack>

                <Button
                  sx={{ bgcolor: "#18BA51", color: "#fff", fontSize: 12 }}
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
