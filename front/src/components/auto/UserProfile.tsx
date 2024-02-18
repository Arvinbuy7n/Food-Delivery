import { IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { UserInput } from "../UserInput";
import {
  CallOutlined,
  EditOutlined,
  History,
  Logout,
  MailLockOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

export const UserProfile = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      height={"70vh"}
      gap={4}
    >
      <Stack alignItems={"center"} justifyContent={"space-between"} gap={4}>
        <Image src={"/pro.jpeg"} alt="" width={70} height={70} />

        <Typography fontSize={28} fontWeight={700}>
          Chekist
        </Typography>
      </Stack>

      <Stack gap={2}>
        <UserInput
          startIcon={<PersonOutlineOutlined />}
          placeholder="Таны нэр"
          endIcon={<EditOutlined />}
        />
        <UserInput
          startIcon={<CallOutlined />}
          endIcon={<EditOutlined />}
          placeholder="Утасны дугаар"
        />
        <UserInput
          startIcon={<MailLockOutlined />}
          placeholder="Имэйл хаяг"
          endIcon={<EditOutlined />}
        />

        <Stack direction={"row"} gap={1.5} px={2} py={1}>
          <IconButton sx={{ bgcolor: "#FFF", border: 1, color: "#000" }}>
            {<History />}
          </IconButton>

          <Typography mt={1} fontSize={16} fontWeight={400}>
            Захиалгын түүх
          </Typography>
        </Stack>

        <Stack direction={"row"} gap={1.5} px={2} py={1}>
          <IconButton sx={{ bgcolor: "#FFF", border: 1, color: "#000" }}>
            {<Logout />}
          </IconButton>

          <Typography mt={1} fontSize={16} fontWeight={400}>
            Гарах
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
