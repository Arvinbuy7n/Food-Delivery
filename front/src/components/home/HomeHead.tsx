"use client";

import { Container, Stack, Typography } from "@mui/material";
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
            width={"100%"}
            direction={"row"}
            height={{ xs: 500, md: 788 }}
            gap={{ xs: 15, md: 30 }}
            ml={{ xs: 1, lg: 0 }}
          >
            <Stack gap={2} justifyContent={"center"} alignItems={"center"}>
              <Typography
                fontSize={55}
                color={"#FFF"}
                fontWeight={600}
                borderBottom={1}
              >
                Pinecone <br></br> Food delivery
              </Typography>

              <Typography fontSize={22} color={"#FFF"} fontWeight={700} mr={7}>
                Horem ipsum dolor sit amet, <br></br> consectetur adipiscing
                elit.
              </Typography>
            </Stack>

            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              display={{ md: "flex", xs: "none" }}
            >
              <Image src={"/photo.png"} alt="" width={440} height={430}></Image>

              <Stack position={"absolute"} ml={48} mt={13}>
                <Image
                  src={"/hool.png"}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>

      <Container sx={{ border: 1, borderColor: "#E0E0E0" }}>
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          py={{ md: 14, xs: 6 }}
          gap={{ xs: 4 }}
          alignItems={"center"}
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

        <Discount handle={handleSeeAll} see={all} />

        <Stack gap={3}>
          {categoryList.map((item, _index) => {
            return (
              <FoodSection
                key={_index}
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
