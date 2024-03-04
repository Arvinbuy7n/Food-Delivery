"use client";

import { Container, ImageListItem, Stack, Typography } from "@mui/material";
import { CardMenu } from "../customs/CardMenu";
import {
  AccessTime,
  ImportContacts,
  LunchDiningOutlined,
} from "@mui/icons-material";
import { useFood } from "../providers/FoodProvider";
import { FoodSection } from "../auto/FoodSection";
import Image from "next/image";
import { Discount } from "../customs/Discount";
import { useState } from "react";

export const HomeHead = () => {
  const { categoryList } = useFood();
  const [all, setAll] = useState(4);

  const handleSeeAll = () => {
    if (all === 4) {
      setAll(40);
    } else setAll(4);
  };

  return (
    <Stack>
      <Stack bgcolor={"#18BA51"} sx={{ backgroundImage: "url(back.png)" }}>
        <Container>
          <Stack
            sx={{
              width: "auto",
              justifyContent: "space-between",
            }}
            direction={"row"}
            height={788}
            justifyContent={"center"}
          >
            <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
              <Typography fontSize={55} color={"#FFF"} fontWeight={600} mr={23}>
                Pinecone Food delivery
              </Typography>

              <Container
                sx={{
                  borderBottom: 1,
                  borderColor: "#FFF",
                  width: 360,
                  mr: 24,
                }}
              />

              <Typography fontSize={22} color={"#FFF"} fontWeight={700} mr={30}>
                Horem ipsum dolor sit amet, <br></br> consectetur adipiscing
                elit.
              </Typography>
            </Stack>

            <Stack justifyContent={"center"} alignItems={"center"} pr={20}>
              <Image src={"/photo.png"} alt="" width={440} height={430}></Image>

              <ImageListItem
                sx={{
                  width: 300,
                  height: 300,
                  position: "absolute",
                  ml: 48,
                  mt: 13,
                }}
              >
                <img src="hool.png" />
              </ImageListItem>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Container sx={{ border: 1, borderColor: "#E0E0E0" }}>
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          py={14}
          sx={{ justifyContent: "space-between" }}
        >
          <CardMenu
            startIcon={<ImportContacts />}
            title="Хүргэлтийн төлөв хянах"
            label="Захиалга бэлтгэлийн явцыг хянах"
          />
          <CardMenu
            startIcon={<AccessTime />}
            title="Шуурхай хүргэлт"
            label="Захиалга бэлтгэлийн явцыг хянах"
          />
          <CardMenu
            startIcon={<LunchDiningOutlined />}
            title="Эрүүл, баталгаат орц"
            label="Захиалга бэлтгэлийн явцыг хянах"
          />
          <CardMenu
            startIcon={<ImportContacts />}
            title="Хоолны өргөн сонголт"
            label="Захиалга бэлтгэлийн явцыг хянах"
          />
        </Stack>

        <Discount handle={handleSeeAll} />

        <Stack gap={3}>
          {categoryList.map((item, _index) => {
            return (
              <FoodSection
                category={item.category}
                handleSeeAll={handleSeeAll}
                all={all}
              />
            );
          })}
        </Stack>
      </Container>
    </Stack>
  );
};
