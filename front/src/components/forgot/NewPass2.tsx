"use client";

import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "..";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../provider/AuthProvider";

const validationSchema = yup.object({
  code: yup.string().required(),
});

type checkProps = {
  checkOtp: () => void;
};
export const NewPass2 = (props: checkProps) => {
  const router = useRouter();
  const { checkOtp, user } = useAuth();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      checkOtp(values.code);
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
          Нууц үг сэргээх
        </Typography>

        <Stack gap={4}>
          <Typography>
            Таны хаяг "{user.email}" руу сэргээх <br></br> код илгээх болно.{" "}
          </Typography>

          <CustomInput
            label="Нууц үг сэргээх код"
            placeholder="Нууц үг сэргээх"
            type="password"
            size="medium"
            name="code"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
          />
        </Stack>

        <Stack display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            disableElevation
            disabled={!formik.values.code}
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
      </Stack>
    </Container>
  );
};
