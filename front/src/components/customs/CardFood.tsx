"use client";

import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { OrderDetail } from "../auto/OrderDetail";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Record } from "../providers/FoodProvider";

type CardFoodProps = {
  setCategoryName?: Dispatch<SetStateAction<string>>;
} & Record;

export const CardFood = ({ setCategoryName, ...props }: CardFoodProps) => {
  const { foodName, price, discount, foodImage, ingredient } = props;
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const pathname = usePathname();

  const handleClick = () => {
    setEdit(true);
  };

  return (
    <Stack gap={1} mb={6}>
      <Stack borderRadius={4} overflow={"hidden"} position={"relative"}>
        <Image
          src={foodImage}
          alt=""
          onClick={() => {
            if (pathname == "/foodmenu" || pathname == "/home") {
              handleOpen();
            }
          }}
          width={275}
          height={186}
        />
      </Stack>

      <Button
        sx={{
          bgcolor: "#18BA51",
          color: "#FFF",
          fontSize: 18,
          fontWeight: 600,
          borderRadius: 10,
          position: "absolute",
          ml: 25,
          mt: 1,
          py: 0,
        }}
      >
        {discount}
      </Button>

      <Modal open={open}>
        <Box>
          <OrderDetail
            handleClose={handleClose}
            add={5}
            {...props}
            foodCategory=""
            foodImage={foodImage}
            price={price}
            ingredient={ingredient}
          />
        </Box>
      </Modal>

      <Stack display={"flex"}>
        <Typography fontSize={20} fontWeight={600} onClick={handleClick}>
          {foodName}
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Stack direction={"row"}>
            <Typography color={"#18BA51"} fontSize={18} fontWeight={600}>
              {price}₮
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
