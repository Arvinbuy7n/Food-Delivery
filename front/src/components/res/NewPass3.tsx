"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "..";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../providers/AuthProvider";

const validationSchema = yup.object({
  password: yup.string().required(),
  passAgain: yup.string().required(),
});

type handleProps = {
  newPassword: () => void;
};

export const NewPass3 = (props: handleProps) => {
  const router = useRouter();
  const { newPassword } = useAuth();

  const formik = useFormik({
    initialValues: {
      password: "",
      passAgain: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      newPassword(values.password, values.passAgain);
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
        <Typography alignSelf={"center"} fontSize={28} fontWeight={700}>
          Шинэ нууц үг зохиох
        </Typography>

        <Stack gap={2}>
          <CustomInput
            label="Нууц үг"
            placeholder="********"
            type="password"
            size="medium"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <CustomInput
            label="Нууц үг давтах"
            placeholder="********"
            type="password"
            size="medium"
            name="passAgain"
            value={formik.values.passAgain}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.passAgain && Boolean(formik.errors.passAgain)}
            helperText={formik.touched.passAgain && formik.errors.passAgain}
          />
        </Stack>

        <Button
          variant="contained"
          disableElevation
          disabled={!formik.values.password || !formik.values.passAgain}
          sx={{
            width: 384,
            fontSize: 13,
            px: 2,
            py: 1.3,
          }}
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
