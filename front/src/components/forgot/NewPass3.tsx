"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "..";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  newPassword: yup.string().required(),
  newPassAgain: yup.string().required(),
});

export const NewPass3 = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      newPassAgain: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(values.newPassword || values.newPassAgain);
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
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <CustomInput
            label="Нууц үг давтах"
            placeholder="********"
            type="password"
            size="medium"
            name="newPassAgain"
            value={formik.values.newPassAgain}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.newPassAgain && Boolean(formik.errors.newPassAgain)
            }
            helperText={
              formik.touched.newPassAgain && formik.errors.newPassAgain
            }
          />
        </Stack>

        <Button
          variant="contained"
          disableElevation
          disabled={!formik.values.newPassword || !formik.values.newPassAgain}
          sx={{
            width: 384,
            fontSize: 13,
            px: 2,
            py: 1.3,
          }}
          onClick={() => {
            router.push("login");
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Container>
  );
};
