"use client";

import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  IconButton,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";

export const Footer = () => {
  return (
    <Stack
      height={"600px"}
      bgcolor={"#18BA51"}
      sx={{
        backgroundImage: "url(back.png)",
      }}
    >
      <Stack gap={6} px={26} py={16} alignItems={"center"}>
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

        <Stack display={"flex"} direction={"row"} gap={11} px={10}>
          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
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
          >
            Хоолны цэс
          </Typography>

          <Typography
            color={"#FFF"}
            fontWeight={600}
            fontSize={16}
            sx={{ borderBottom: 1 }}
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
          sx={{ borderBottom: 1, color: "#FFF", width: 1170 }}
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
