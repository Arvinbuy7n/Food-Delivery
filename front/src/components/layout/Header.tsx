"use client";

import {
  Menu,
  PersonOutlineOutlined,
  Search,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Drawer,
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
import { useCard } from "../providers/CartProvider";
import { useFood } from "../providers/FoodProvider";
import { MobileMenu } from "../auto/MobileMenu";

export const Header = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { user, isLogged, admin } = useAuth();
  const { addBasket } = useCard();
  const { setSearchValue } = useFood();
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

  const handleClick = () => {
    setMenu(false);
  };
  return (
    <Container>
      <Stack direction={"row"} sx={{ justifyContent: "space-between", py: 1 }}>
        <Stack direction={"row"} gap={1}>
          <Stack mt={0.3}>
            <Image src="/code.webp" alt="logo" width={35} height={36} />
          </Stack>
          <Stack direction={"row"} display={{ xs: "none", lg: "flex" }}>
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
                  color: "#18BA51",
                }}
                onClick={() => {
                  router.push("admin");
                }}
              >
                ADMIN
              </Typography>
            )}
          </Stack>
        </Stack>

        <Stack direction={"row"} gap={{ xs: 1, md: 3 }}>
          <Stack>
            <CustomInput
              placeholder="Хайх"
              type="text"
              size="small"
              startIcon={<Search />}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
            ></CustomInput>
          </Stack>

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
              display={{ xs: "none", lg: "flex" }}
              onClick={() => {
                if (pathname == "/foodmenu" || pathname == "/home") {
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
              <Box role="presentation" width={"600px"} px={4}>
                <MyOrder
                  closeButton={closeDrawer}
                  foodName=""
                  price={0}
                  ingredients=""
                  foodImage=""
                />
              </Box>
            </Drawer>
          </Stack>

          <Stack direction={"row"} gap={3} sx={{ py: 1 }} px={{ xs: 0, lg: 2 }}>
            <Stack direction={"row"} gap={1}>
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
                display={{ xs: "none", lg: "flex" }}
              >
                {isLogged ? user?.name : "Нэвтрэх"}
              </Typography>
            </Stack>

            <Stack display={{ xs: "flex", lg: "none" }}>
              <Menu
                onClick={() => {
                  setMenu(true);
                }}
              />
            </Stack>

            {menu && <MobileMenu onClose={handleClick} />}

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
