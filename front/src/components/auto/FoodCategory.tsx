import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material";
import { MenuItem } from "../Menu";
import { MoreVert } from "@mui/icons-material";
import { CardFood } from "..";
import React from "react";
import { CreateCategory } from "./CreateCategory";
import { CreateFood } from "./CreateFood";

type Open = {
  isOpen?: Boolean;
  closeModal?: Boolean;
};
export const FoodCategory = (props: Open) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openFood, closeFood] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOpen = () => closeFood(true);
  const handleClose = () => closeFood(false);

  return (
    <Stack sx={{ px: 32 }} direction={"row"}>
      <Stack width={"25%"} height={"100%"} py={2} px={4} gap={5}>
        <Typography fontSize={22} fontWeight={700}>
          Food menu
        </Typography>

        <Stack gap={3}>
          <MenuItem label={"Breakfast"} endIcon={<MoreVert />} />
          <MenuItem label={"Soup"} endIcon={<MoreVert />} />
          <MenuItem label={"Main Course"} endIcon={<MoreVert />} />
          <MenuItem label={"Dessert"} endIcon={<MoreVert />} />

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
            Breakfast
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
          <Grid container sx={{ justifyContent: "space-between" }}>
            {new Array(6).fill(0).map((_, index) => (
              <Grid key={index} item md={4}>
                <CardFood
                  foodname="Өглөөний хоол"
                  price="14,800"
                  discount="-20"
                  discountPrice="6,800"
                ></CardFood>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};