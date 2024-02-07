import {
  CardMedia,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

export const UserProfile = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={"40vh"}>
      <Stack
        width={432}
        height={173}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Image src={"/pro.jpeg"} alt="" width={70} height={70} />
        <Typography fontSize={28} fontWeight={700}>
          Chekist
        </Typography>
      </Stack>

      <Stack></Stack>
    </Stack>
  );
};
