import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const SearchResult = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack gap={4} py={22} alignItems={"center"}>
        <Image src={"/box.png"} alt="" width={133} height={133} />

        <Typography fontSize={15} fontWeight={400} color={"#8B8E95"}>
          Уучлаарай илэрц олдсонгүй...
        </Typography>
      </Stack>
    </Stack>
  );
};
