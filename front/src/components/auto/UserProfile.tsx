"use client";

import {
  Box,
  Button,
  IconButton,
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
import React, { useEffect, useState } from "react";
import { LogOut } from "./LogOut";
import { useAuth } from "../providers/AuthProvider";
import { UserPhoto } from "../upload/UserPro";
import { useFormik } from "formik";
import * as yup from "yup";

type openModal = {
  open?: boolean;
  setClose?: boolean;
};

const validationSchema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
});

export const UserProfile = (props: openModal) => {
  const { user, changeUser } = useAuth();

  const [open, setClose] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [imagePro, setImagePro] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleClose = () => {
    setClose(false);
  };

  const formik = useFormik({
    initialValues: {
      name: user?.name ?? "",
      phone: user?.phone ?? "",
      email: user?.email ?? "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      changeUser(imagePro, values.name, values.phone, values.email);
    },
  });

  useEffect(() => {
    if (!user) return;
    formik.setValues({
      name: user.name,
      phone: user.phone,
      email: user.email,
    });
  }, [user]);

  return (
    <Stack alignItems={"center"} justifyContent={"center"} gap={4} py={12}>
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}
        position={"relative"}
      >
        <Stack borderRadius={"50%"} overflow={"hidden"}>
          <Image src={user?.userImage ?? ""} alt="" width={120} height={120} />
        </Stack>

        <IconButton
          sx={{
            position: "absolute",
            bottom: -5,
            right: -2,
            border: 1,
            bgcolor: "#FFF",
            color: "#18BA51",
          }}
          onClick={() => setOpenModal(true)}
        >
          {<EditOutlined />}
        </IconButton>

        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box>
            <UserPhoto imageUrl={imagePro} setImageUrl={setImagePro} />
          </Box>
        </Modal>
      </Stack>

      <Stack gap={2}>
        <UserInput
          startIcon={<PersonOutlineOutlined />}
          // title="Таны нэр"
          label={user?.name}
          endIcon={<EditOutlined />}
          name="name"
          value={formik.values.name}
          defaultValue={user?.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <UserInput
          startIcon={<CallOutlined />}
          // title="Утасны дугаар"
          endIcon={<EditOutlined />}
          label={user?.phone}
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <UserInput
          startIcon={<MailLockOutlined />}
          // title="Имэйл хаяг"
          label={user?.email}
          endIcon={<EditOutlined />}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Stack direction={"row"} gap={1.5} px={2} py={1}>
          <IconButton sx={{ bgcolor: "#FFF", border: 1, color: "#000" }}>
            {<History />}
          </IconButton>

          <Typography mt={1} fontSize={16} fontWeight={400}>
            Захиалгын түүх
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          gap={1.5}
          px={2}
          py={1}
          onClick={() => setClose(true)}
        >
          <IconButton sx={{ bgcolor: "#FFF", border: 1, color: "#000" }}>
            {<Logout />}
          </IconButton>

          <Typography mt={1} fontSize={16} fontWeight={400}>
            Гарах
          </Typography>
        </Stack>

        <Button
          sx={{ border: 1, bgcolor: "#18BA51", color: "#FFF" }}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Хадгалах
        </Button>

        <Modal open={open}>
          <Box>
            <LogOut handleClose={handleClose} />
          </Box>
        </Modal>
      </Stack>
    </Stack>
  );
};
