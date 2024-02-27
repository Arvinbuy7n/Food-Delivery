"use client";

import {
  PersonOutlineOutlined,
  Search,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
  Grid,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { CustomInput } from "../customs/CustomInput";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Newtreh } from "../auto/Newtreh";
import { MyOrder } from "../customs/MyOrder";
import { useAuth } from "../providers/AuthProvider";
import { useFood } from "../providers/FoodProvider";
import { useCard } from "../providers/CartProvider";

export const Header = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, isLogged, admin } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const { addBasket } = useCard();

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
    <Container>
      <Stack direction={"row"} sx={{ justifyContent: "space-between", py: 1 }}>
        <Stack direction={"row"} gap={1}>
          <Stack mt={0.3}>
            <Image src="/code.webp" alt="logo" width={35} height={36} />
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
            {admin && (
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
            )}
          </Stack>
        </Stack>

        <Stack direction={"row"} gap={3}>
          <CustomInput
            placeholder="Хайх"
            type="text"
            size="small"
            startIcon={<Search />}
          ></CustomInput>

          <Stack
            direction={"row"}
            gap={1}
            sx={{ py: 1, px: 2 }}
            position={"relative"}
          >
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
            <Stack
              position={"absolute"}
              top={3}
              left={26}
              bgcolor={"#F16767"}
              borderRadius={2}
              px={0.6}
              fontSize={12}
              color={"#FFF"}
            >
              {addBasket.length}
            </Stack>

            <Drawer anchor={"right"} open={isDrawerOpen} onClose={closeDrawer}>
              <Box role="presentation" width={"630px"} px={4}>
                <MyOrder
                  closeButton={closeDrawer}
                  foodName=""
                  price=""
                  ingredients=""
                  foodImage=""
                />
              </Box>
            </Drawer>
          </Stack>

          <Stack direction={"row"} gap={1} sx={{ py: 1, px: 2 }}>
            <PersonOutlineOutlined
              onClick={() => {
                router.push("/profile");
              }}
            />
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
              {isLogged ? user?.name : "Нэвтрэх"}
            </Typography>

            <Modal open={isModalOpen} onClose={closeModal}>
              <Box>
                <Newtreh handleSign={closeModal} />
              </Box>
            </Modal>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
