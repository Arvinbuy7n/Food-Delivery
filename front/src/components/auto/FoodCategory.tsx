"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { MenuItem } from "../customs/MenuItem";
import { MoreVert } from "@mui/icons-material";
import { CardFood } from "..";
import React, { useState } from "react";
import { CreateCategory } from "./CreateCategory";
import { CreateFood } from "./CreateFood";
import { useFood } from "../FoodProvider";

type Open = {
  isOpen?: Boolean;
  closeModal?: Boolean;
  filterCategory?: string;
  setFilterCategory?: string;
};

export const FoodCategory = (props: Open) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openFood, closeFood] = React.useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [filterCategory, setFilterCategory] = useState([]);
  const { categoryList, recordList, setCategoryList } = useFood();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOpen = () => closeFood(true);
  const handleClose = () => closeFood(false);

  return (
    <Stack direction={"row"} px={60}>
      <Stack width={"25%"} height={"100%"} py={2} px={4} gap={5}>
        <Typography fontSize={22} fontWeight={700}>
          Food menu
        </Typography>

        <Stack gap={3}>
          {/* <Button
            sx={{
              fontSize: 18,
              fontFamily: "sans-serif",
              color: "#000",
              border: 1,
              borderRadius: 2,
              textAlign: "center",
            }}
            onClick={() => setCategoryList([])}
          >
            All foods
          </Button> */}
          {categoryList.map((item, _index) => {
            return (
              <MenuItem
                label={item.category}
                endIcon={<MoreVert />}
                setCategoryName={setCategoryName}
              />
            );
          })}

          <Button
            sx={{
              color: "#5E6166",
              border: 1,
              borderRadius: 2,
            }}
            onClick={openModal}
          >
            + Create new category
          </Button>
        </Stack>

        <Modal open={isOpen}>
          <Box>
            <CreateCategory handleClose={closeModal} />
          </Box>
        </Modal>
      </Stack>

      <Stack
        width={"75%"}
        px={3}
        py={4}
        gap={4}
        bgcolor={"#F4F4F4"}
        height={"100vh"}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontSize={22} fontWeight={700}>
            {categoryName}
          </Typography>

          <Button
            sx={{ color: "#FFF", bgcolor: "#18BA51" }}
            onClick={handleOpen}
          >
            Add new food
          </Button>
        </Stack>

        <Modal open={openFood}>
          <Box>
            <CreateFood onClose={handleClose} />
          </Box>
        </Modal>

        <Stack>
          <Grid container gap={2}>
            {recordList
              .filter((item) => item.foodCategory.includes(categoryName))
              .map((item, index) => (
                <Grid key={index}>
                  <CardFood
                    foodname={item.foodName}
                    price={item.price}
                    discount={item.discount}
                    ingredient={item.ingredient}
                    foodImage={item.foodImage}
                  ></CardFood>
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
