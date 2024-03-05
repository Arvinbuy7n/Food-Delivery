"use client";

import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material";
import { MenuItem } from "../customs/MenuItem";
import { MoreVert } from "@mui/icons-material";
import { CardFood } from "..";
import React, { useState } from "react";
import { CreateCategory } from "./CreateCategory";
import { CreateFood } from "./CreateFood";
import { useFood } from "../providers/FoodProvider";
import { useAuth } from "../providers/AuthProvider";
import { useRouter } from "next/navigation";

type Open = {
  isOpen?: Boolean;
  closeModal?: Boolean;
  filterCategory?: string;
  setFilterCategory?: string;
};

export const FoodCategory = (props: Open) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFood, closeFood] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const { categoryList, recordList, searchValue } = useFood();
  const { admin } = useAuth();
  const router = useRouter();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOpen = () => closeFood(true);
  const handleClose = () => closeFood(false);

  if (!admin) {
    router.push("/home");
  }
  return (
    <Stack direction={"row"} px={36}>
      <Stack width={"25%"} height={"100%"} py={2} px={4} gap={5}>
        <Typography fontSize={22} fontWeight={700}>
          Food menu
        </Typography>

        <Stack gap={3}>
          {categoryList.map((item, _index) => {
            return (
              <MenuItem
                key={_index}
                label={item.category}
                endIcon={<MoreVert />}
                setCategoryName={setCategoryName}
              />
            );
          })}

          <Stack
            sx={{
              color: "#5E6166",
              border: 1,
              borderRadius: 2,
            }}
            py={1}
            direction={"row"}
            onClick={openModal}
            justifyContent={"center"}
            gap={0.5}
          >
            <Typography fontSize={18} fontWeight={500} color={"#5E6166"}>
              +
            </Typography>
            <Typography
              fontSize={18}
              fontWeight={500}
              color={"#5E6166"}
              pt={0.2}
            >
              Create new category
            </Typography>
          </Stack>
        </Stack>

        <Modal open={isOpen}>
          <Box>
            <CreateCategory handleClose={closeModal} />
          </Box>
        </Modal>
      </Stack>

      <Stack width={"75%"} px={3} pt={4} pb={8} gap={4} bgcolor={"#F4F4F4"}>
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
              .filter((name) =>
                name.foodName.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => (
                <Grid key={index}>
                  <CardFood
                    foodName={item.foodName}
                    price={item.price}
                    discount={item.discount}
                    ingredient={item.ingredient}
                    foodImage={item.foodImage}
                    _id=""
                    foodCategory={item.foodCategory}
                  ></CardFood>
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
