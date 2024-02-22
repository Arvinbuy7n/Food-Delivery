"use client";

import {
  PersonOutlineOutlined,
  Search,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import { Box, Drawer, Modal, Stack, Typography } from "@mui/material";
import { CustomInput } from "../customs/CustomInput";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Newtreh } from "../auto/Newtreh";
import { MyOrder } from "../customs/MyOrder";

export const Header = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <Stack
      direction={"row"}
      sx={{ justifyContent: "space-between", px: { lg: 20, xl: 40 }, py: 1 }}
    >
      <Stack direction={"row"} gap={1}>
        <Stack mt={0.3}>
          <Image
            src="/code.webp"
            alt="logo"
            width={35}
            height={36}
            onClick={() => {
              router.push("/login");
            }}
          />
        </Stack>
        <Stack direction={"row"}>
          <Typography
            fontSize={17}
            fontWeight={700}
            sx={{
              "&:hover": {
                color: "#18BA51",
              },
              px: 2,
              py: 1,
            }}
            onClick={() => {
              router.push("/home");
            }}
          >
            Нүүр
          </Typography>
          <Typography
            fontSize={17}
            fontWeight={700}
            sx={{
              "&:hover": {
                color: "#18BA51",
              },
              px: 2,
              py: 1,
            }}
            onClick={() => {
              router.push("/foodmenu");
            }}
          >
            Хоолны цэс
          </Typography>
          <Typography
            fontSize={17}
            fontWeight={700}
            sx={{
              "&:hover": {
                color: "#18BA51",
              },
              px: 2,
              py: 1,
            }}
          >
            Хүргэлтийн бүс
          </Typography>
          <Typography
            fontSize={17}
            fontWeight={700}
            sx={{
              px: 2,
              py: 1,
            }}
            onClick={() => {
              router.push("admin");
            }}
          >
            Admin
          </Typography>
        </Stack>
      </Stack>

      <Stack direction={"row"} gap={3}>
        <CustomInput
          placeholder="Хайх"
          type="text"
          size="small"
          startIcon={<Search />}
        ></CustomInput>

        <Stack direction={"row"} gap={1} sx={{ py: 1, px: 2 }}>
          <ShoppingBasketOutlined />
          <Typography
            sx={{
              "&:hover": {
                color: "#18BA51",
              },
            }}
            fontSize={16}
            fontWeight={700}
            onClick={() => {
              if (pathname == "/foodmenu") {
                openDrawer();
              }
              return false;
            }}
          >
            Сагс
          </Typography>

          <Drawer anchor={"right"} open={isDrawerOpen}>
            <Box role="presentation" width={"630px"} px={4}>
              <MyOrder closeButton={closeDrawer} />
            </Box>
          </Drawer>
        </Stack>

        <Stack direction={"row"} gap={1} sx={{ py: 1, px: 2 }}>
          <PersonOutlineOutlined />
          <Typography
            sx={{
              "&:hover": {
                color: "#18BA51",
              },
            }}
            fontSize={16}
            fontWeight={700}
            onClick={() => {
              if (pathname == "/home" || pathname == "/foodmenu") {
                openModal();
              } else {
                router.push("/login");
              }
            }}
          >
            Нэвтрэх
          </Typography>
          <Modal open={isModalOpen}>
            <Box>
              <Newtreh handleSign={closeModal} />
            </Box>
          </Modal>
        </Stack>
      </Stack>
    </Stack>
  );
};
