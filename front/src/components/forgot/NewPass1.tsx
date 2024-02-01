"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "../CustomInput";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

export const NewPass1 = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(values.email);
    },
  });

  return (
    <Container>
      <Stack
        alignItems={"center"}
        height="50vh"
        justifyContent={"center"}
        gap={6}
      >
        <Typography
          alignSelf={"center"}
          fontSize={28}
          fontWeight={700}
          onClick={() => {
            router.push("login");
          }}
        >
          Нууц үг сэргээх
        </Typography>

        <CustomInput
          label="Имэйл"
          placeholder="Имэйл хаягаа оруулна уу"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Stack display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            disableElevation
            disabled={!formik.values.email}
            sx={{
              width: 384,
              fontSize: 13,
              px: 2,
              py: 1.3,
            }}
            onClick={() => {
              router.push("new2");
            }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
