import { Button, Card, Stack, Typography } from "@mui/material";

export const SearchClick = () => {
  return (
    <Stack height={"50vh"} ml={10}>
      <Card
        sx={{
          width: 180,
          borderRadius: "16px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button>
          <Stack direction={"row"} color="#000" gap={2} p={0.5} height={"30px"}>
            <Typography fontSize={14}>Салад</Typography>
            <Typography>/</Typography>
            <Typography fontSize={14}>Хайлт</Typography>
          </Stack>
        </Button>
      </Card>
    </Stack>
  );
};
