import { Button, Card, Stack, Typography } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";

type handleClose = {
  handleClose: () => void;
};

export const LogOut = (props: handleClose) => {
  const { handleClose } = props;
  const { signOut } = useAuth();

  return (
    <Stack
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card sx={{ width: 384, borderRadius: 8 }}>
        <Typography p={6} fontSize={20} fontWeight={600} textAlign={"center"}>
          Та системээс гарахдаа итгэлтэй байна уу?
        </Typography>

        <Stack direction={"row"} bgcolor={"#18BA5133"}>
          <Button
            sx={{
              fontSize: 17,
              fontWeight: 600,
              color: "#000",
              "&:hover": {
                bgcolor: "#18BA51",
                color: "#FFF",
              },
              px: 10,
            }}
            onClick={() => {
              signOut();
            }}
          >
            Тийм
          </Button>
          <Stack border={1} borderColor={"grey"}></Stack>
          <Button
            sx={{
              fontSize: 17,
              fontWeight: 600,
              px: 10,
              color: "#000",
              "&:hover": {
                bgcolor: "#18BA51",
                color: "#FFF",
              },
            }}
            onClick={handleClose}
          >
            Үгүй
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
};
