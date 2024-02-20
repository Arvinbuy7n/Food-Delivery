import {
  Box,
  Card,
  CardMedia,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { UserInput } from "../customs/UserInput";
import {
  CallOutlined,
  EditOutlined,
  History,
  Logout,
  MailLockOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { LogOut } from "./LogOut";

type openModal = {
  open?: boolean;
  setClose?: boolean;
};

export const UserProfile = (props: openModal) => {
  const [open, setClose] = React.useState(false);

  const handleOpen = () => {
    setClose(true);
  };

  const handleClose = () => {
    setClose(false);
  };

  return (
    <Stack alignItems={"center"} justifyContent={"center"} gap={4} py={12}>
      <Stack alignItems={"center"} justifyContent={"space-between"} gap={4}>
        <Card sx={{ borderRadius: "60%" }}>
          <Image src={"/pro.jpeg"} alt="" width={120} height={120} />
        </Card>

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

        <Stack direction={"row"} gap={1.5} px={2} py={1} onClick={handleOpen}>
          <IconButton sx={{ bgcolor: "#FFF", border: 1, color: "#000" }}>
            {<Logout />}
          </IconButton>

          <Typography mt={1} fontSize={16} fontWeight={400}>
            Гарах
          </Typography>
        </Stack>

        <Modal open={open}>
          <Box>
            <LogOut handleClose={handleClose} />
          </Box>
        </Modal>
      </Stack>
    </Stack>
  );
};
