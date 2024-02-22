import { Box, Card, IconButton, Modal, Stack, Typography } from "@mui/material";
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

import { useAuth } from "../provider/AuthProvider";
import { Upload } from "../upload/page";
import { UserPhoto } from "../upload/UserPro";
type openModal = {
  open?: boolean;
  setClose?: boolean;
};

export const UserProfile = (props: openModal) => {
  const [open, setClose] = React.useState(false);
  const { user, setUser } = useAuth();
  const [imagePro, setImagePro] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handle = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setClose(true);
  };

  const handleClose = () => {
    setClose(false);
  };

  const { name, email, phone, userImage } = user;

  return (
    <Stack alignItems={"center"} justifyContent={"center"} gap={4} py={12}>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}
        position={"relative"}
      >
        <Card sx={{ borderRadius: 32 }}>
          <Image src={userImage} alt="" width={120} height={120} />
        </Card>

        <IconButton
          sx={{
            position: "absolute",
            bottom: 55,
            right: 20,
            border: 1,
            bgcolor: "#FFF",
            color: "#18BA51",
          }}
          onClick={handleClick}
        >
          {<EditOutlined />}
        </IconButton>

        <Modal open={openModal} onClose={handle}>
          <Box>
            <UserPhoto imageUrl={imagePro} setImageUrl={setImagePro} />
          </Box>
        </Modal>

        <Typography fontSize={28} fontWeight={700}>
          {name}
        </Typography>
      </Stack>

      <Stack gap={2}>
        <UserInput
          startIcon={<PersonOutlineOutlined />}
          title="Таны нэр"
          label={name}
          endIcon={<EditOutlined />}
        />
        <UserInput
          startIcon={<CallOutlined />}
          title="Утасны дугаар"
          endIcon={<EditOutlined />}
          label={phone}
        />
        <UserInput
          startIcon={<MailLockOutlined />}
          title="Имэйл хаяг"
          label={email}
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
