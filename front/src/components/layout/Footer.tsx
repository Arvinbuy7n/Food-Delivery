"use client";

import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import {
  Container,
  IconButton,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  return (
    <Stack
      bgcolor={"#18BA51"}
      sx={{
        backgroundImage: "url(back.png)",
      }}
    >
      <Stack
        gap={6}
        px={{ xs: 4, md: 26 }}
        py={{ xs: 8, md: 16 }}
        alignItems={"center"}
      >
        <Stack direction={"row"} gap={1}>
          <ImageListItem
            sx={{
              width: 25,
            }}
          >
            <img src="num.webp"></img>
          </ImageListItem>
          <Typography fontSize={20} fontWeight={700} color={"#FFF"}>
            Food Delivery
          </Typography>
        </Stack>

        <Stack
          flexDirection={{ xs: "column", lg: "row" }}
          gap={{ xs: 4, lg: 11 }}
          px={10}
          textAlign={"center"}
        >
          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
            onClick={() => {
              router.push("/home");
            }}
          >
            Нүүр
          </Typography>

          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
          >
            Холбоо барих
          </Typography>

          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
            onClick={() => {
              router.push("/foodmenu");
            }}
          >
            Хоолны цэс
          </Typography>

          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
            onClick={() => [router.push("/service")]}
          >
            Үйлчилгээний нөхцөл
          </Typography>

          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
          >
            Хүргэлтийн бүс
          </Typography>

          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
          >
            Нууцлалын бодлого
          </Typography>
        </Stack>

        <Stack direction={"row"} justifyContent={"center"} gap={2}>
          <IconButton
            sx={{
              backgroundColor: "#FFF",
            }}
          >
            <FacebookRounded />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#FFF",
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#FFF",
            }}
          >
            <Twitter />
          </IconButton>
        </Stack>

        <Container
          sx={{ borderBottom: 1, color: "#FFF", width: { xs: 250, lg: 1170 } }}
        ></Container>

        <Stack gap={1} alignItems={"center"}>
          <Typography color={"#FFF"} fontSize={16} fontWeight={400}>
            © 2024 Pinecone Foods LLC
          </Typography>
          <Typography color={"#FFF"} fontSize={16} fontWeight={400}>
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
