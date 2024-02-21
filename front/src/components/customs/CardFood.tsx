"use client";

import {
  Box,
  Button,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { OrderDetail } from "../auto/OrderDetail";
import Image from "next/image";

type CardFoodProps = {
  foodname: string;
  price: string;
  ingredient: string;
  discount?: string;
  discountPrice?: string;
  foodImage: string;
};

export const CardFood = (props: CardFoodProps) => {
  const { foodname, price, discount, discountPrice, foodImage, ingredient } =
    props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack gap={1} position={"relative"} mb={6}>
      <Image
        src={foodImage}
        alt=""
        onClick={handleOpen}
        width={288}
        height={186}
      />
      <Modal open={open}>
        <Box>
          <OrderDetail
            handleClose={handleClose}
            add={5}
            foodName={foodname}
            foodImage=""
            price={price}
            ingredient={ingredient}
          />
        </Box>
      </Modal>

      <Button
        sx={{
          bgcolor: "#18BA51",
          color: "#FFF",
          fontSize: 18,
          fontWeight: 600,
          borderRadius: 10,
          position: "absolute",
          right: 28,
          top: 10,
          py: 0,
        }}
      >
        {discount}
      </Button>

      <Stack display={"flex"}>
        <Typography fontSize={20} fontWeight={600}>
          {foodname}
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Stack direction={"row"}>
            <Typography color={"#18BA51"} fontSize={18} fontWeight={600}>
              {price}
            </Typography>
            <Typography color={"#18BA51"} fontSize={18} fontWeight={600}>
              ₮
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Typography fontSize={18} fontWeight={400}>
              {discountPrice}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
