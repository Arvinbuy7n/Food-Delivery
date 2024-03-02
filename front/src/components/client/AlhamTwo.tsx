"use client";

import { Card, Stack, Typography } from "@mui/material";
import { MyOrder } from "../customs/MyOrder";
import Image from "next/image";

export const AlhamTwo = () => {
  return (
    <Stack py={8} gap={6}>
      <Stack direction={"row"} gap={2}>
        <Stack mt={2} ml={3}>
          <Image src={"/State.png"} alt="" width={48} height={48} />
        </Stack>

        <Stack>
          <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
            Алхам 2
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Захиалга баталгаажуулах
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Stack>

      <Card
        sx={{
          width: 530,
        }}
      >
        <Stack py={2} px={1} justifyContent={"space-between"} height={580}>
          <Stack overflow={"scroll"}>
            <MyOrder foodName="" price={0} ingredients="" foodImage="" />
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
