"use client";

import {
  CardMedia,
  Container,
  Grid,
  IconButton,
  ImageListItem,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { CardMenu } from "../customs/CardMenu";
import {
  AccessTime,
  ArrowForwardIos,
  ImportContacts,
  LunchDiningOutlined,
} from "@mui/icons-material";
import { CardFood } from "../customs/CardFood";
import Image from "next/image";
import { useFood } from "../FoodProvider";

export const HomeHead = () => {
  const { recordList } = useFood();

  return (
    <Stack>
      <Stack
        sx={{
          backgroundColor: "#18BA51",
          backgroundImage: "url(back.png)",
          width: "auto",
          justifyContent: "space-between",
          px: { md: 40 },
        }}
        height="788px"
        direction={"row"}
        justifyContent={"center"}
      >
        <Stack justifyContent={"center"} alignItems={"center"} gap={2}>
          <Typography fontSize={55} color={"#FFF"} fontWeight={600} mr={23}>
            Pinecone <br></br> Food delivery
          </Typography>

          <Container
            sx={{ borderBottom: 1, borderColor: "#FFF", width: 350, mr: 25 }}
          />

          <Typography fontSize={22} color={"#FFF"} fontWeight={700} mr={30}>
            Horem ipsum dolor sit amet, <br></br> consectetur adipiscing elit.
          </Typography>
        </Stack>

        <Stack justifyContent={"center"} alignItems={"center"} pr={20}>
          <ImageListItem sx={{ width: 440, height: 430 }}>
            <img src="photo.png" />
          </ImageListItem>

          <ImageListItem
            sx={{
              width: 300,
              height: 300,
              position: "absolute",
              ml: 48,
              mt: 10,
            }}
          >
            <img src="hool.png" />
          </ImageListItem>
        </Stack>
      </Stack>

      <Stack
        sx={{
          px: { md: 40 },
        }}
      >
        <Stack
          direction={"row"}
          py={12}
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

        <Stack gap={4}>
          <Stack sx={{ justifyContent: "space-between" }} direction={"row"}>
            <Stack direction={"row"} gap={0.5}>
              <CardMedia sx={{ mt: 0.6 }}>
                <Image src="/star.png" alt="" width={22} height={22} />
              </CardMedia>
              <Typography fontSize={22} fontWeight={700}>
                 Хямдралтай
              </Typography>
            </Stack>

            <Stack direction={"row"}>
              <Typography fontSize={14} color={"#18BA51"}>
                Бүгдийг харах
              </Typography>

              <InputAdornment position="end">
                <IconButton sx={{ mt: 2.5, color: "#18BA51" }}>
                  <ArrowForwardIos sx={{ width: 15 }} />
                </IconButton>
              </InputAdornment>
            </Stack>
          </Stack>

          <Stack>
            <Grid container>
              {recordList.map((item, index) => (
                <Grid key={index} item>
                  <CardFood
                    foodname={item.foodName}
                    price={item.price}
                    ingredient={item.ingredient}
                    discount={item.discount}
                    foodImage={item.foodImage}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
