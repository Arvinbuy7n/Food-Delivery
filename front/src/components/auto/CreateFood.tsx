import {
  Button,
  Card,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Upload } from "../upload/page";

type CreateFoodProps = {
  onClose: () => void;
};

export const CreateFood = (props: CreateFoodProps) => {
  const { onClose } = props;

  return (
    <Stack
      py={8}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card sx={{ width: 560, borderRadius: 4 }}>
        <Stack>
          <Stack direction={"row"} gap={18} px={4} py={3}>
            <Image
              src={"/close.png"}
              alt=""
              width={32}
              height={32}
              onClick={onClose}
            ></Image>
            <Typography fontSize={24} fontWeight={700}>
              Create food
            </Typography>
          </Stack>

          <Stack
            gap={3}
            borderTop={1}
            borderBottom={1}
            borderColor={"#E0E0E0"}
            px={4}
            py={3}
          >
            <Stack>
              <Typography fontWeight={500}>Хоолны нэр</Typography>

              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
              ></TextField>
            </Stack>

            <Stack>
              <Typography fontWeight={500}>Хоолны ангилал</Typography>

              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
              ></TextField>
            </Stack>

            <Stack>
              <Typography fontWeight={500}>Хоолны орц</Typography>

              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
              ></TextField>
            </Stack>

            <Stack>
              <Typography fontWeight={500}>Хоолны үнэ</Typography>

              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
              ></TextField>
            </Stack>

            <Stack>
              <Stack direction={"row"}>
                <Switch defaultChecked />
                <Typography mt={1}>Хямдралтай эсэх</Typography>
              </Stack>
              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
              ></TextField>
            </Stack>

            <Stack>
              <Typography fontWeight={500}>Хоолны зураг</Typography>

              <Upload />
            </Stack>
          </Stack>

          <Stack direction={"row"} gap={2} justifyContent={"end"} px={4} py={3}>
            <Typography fontSize={16} fontWeight={700} mt={0.7}>
              Clear
            </Typography>

            <Button sx={{ bgcolor: "#393939", color: "#FFF" }}>Continue</Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
