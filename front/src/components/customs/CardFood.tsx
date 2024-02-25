"use client";

import {
  Box,
  Button,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { OrderDetail } from "../auto/OrderDetail";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SuccessToast } from "./SuccessToast";
import { EditButton } from "./EditButton";

type CardFoodProps = {
  foodname: string;
  price: string;
  ingredient: string;
  discount?: string;
  discountPrice?: string;
  foodImage: string;

  setCategoryName?: Dispatch<SetStateAction<string>>;
};

export const CardFood = (props: CardFoodProps) => {
  const { foodname, price, discount, discountPrice, foodImage, ingredient } =
    props;
  const [open, setOpen] = React.useState(false);
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
        <Modal open={edit}>
          <Box>
            <EditButton />
          </Box>
        </Modal>
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
            foodName={foodname}
            foodImage={foodImage}
            price={price}
            ingredient={ingredient}
          />
        </Box>
      </Modal>

      <Stack display={"flex"}>
        <Typography fontSize={20} fontWeight={600} onClick={handleClick}>
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
