"use client";

import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { CustomInput } from "..";
import { useRouter } from "next/navigation";
import { WbCloudyOutlined } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../providers/AuthProvider";

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  password: yup.string().required(),
  passAgain: yup.string().required(),
});

export const SignUp = () => {
  const router = useRouter();
  const { signUp } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      passAgain: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(
        values.name,
        values.email,
        values.address,
        values.password,
        values.passAgain
      );
    },
  });

  return (
    <Container>
      <Stack
        alignItems={"center"}
        height="90vh"
        justifyContent={"center"}
        gap={6}
      >
        <Typography alignSelf={"center"} fontSize={28} fontWeight={700}>
          Бүртгүүлэх
        </Typography>

        <Stack gap={1}>
          <CustomInput
            label="Нэр"
            placeholder="Нэрээ оруулна уу"
            type="text"
            size="medium"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <CustomInput
            label="И-мэйл"
            placeholder="И-мэйл хаягаа оруулна уу"
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.name}
          />

          <CustomInput
            label="Хаяг"
            placeholder="Та хаягаа оруулна уу"
            type="text"
            size="medium"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />

          <CustomInput
            label="Нууц үг"
            placeholder="Нууц үгээ оруулна уу"
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
            placeholder="Нууц үгээ оруулна уу"
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

        <Stack gap={4} display={"flex"} alignItems={"center"}>
          <Stack direction={"row"} gap={0.5}>
            <InputAdornment position="end">
              <IconButton sx={{ mt: 2.6 }}>
                <WbCloudyOutlined />
              </IconButton>
            </InputAdornment>
            <Typography fontSize={14} fontWeight={400}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Stack>

          <Button
            variant="contained"
            disableElevation
            disabled={
              !formik.values.name ||
              !formik.values.email ||
              !formik.values.address ||
              !formik.values.password ||
              !formik.values.passAgain
            }
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
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
