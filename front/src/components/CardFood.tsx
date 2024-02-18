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
import { OrderDetail } from "./auto/OrderDetail";

type CardFoodProps = {
  foodname: string;
  price: string;
  discount?: string;
  discountPrice?: string;
};

export const CardFood = (props: CardFoodProps) => {
  const { foodname, price, discount, discountPrice } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ mb: 8 }}
      gap={2}
    >
      <CardMedia sx={{ width: 288, height: 186 }}>
        <img src="oreo.png" onClick={handleOpen} />
      </CardMedia>
      <Modal open={open}>
        <Box>
          <OrderDetail handleClose={handleClose} add={5} />
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
          py: 0,
          mb: 23,
          ml: 25,
        }}
      >
        {discount}
      </Button>

      <Stack justifyContent={"end"} display={"flex"} mr={14}>
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
            <Typography fontSize={18} fontWeight={400}>
              ₮
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
