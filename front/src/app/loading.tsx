import { CircularProgress, Stack, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#FFF"}
      gap={3}
    >
      <CircularProgress color="primary" />
      <Typography fontSize={18} fontWeight={700}>
        {" "}
        Түр хүлээнэ үү...
      </Typography>
    </Stack>
  );
}
