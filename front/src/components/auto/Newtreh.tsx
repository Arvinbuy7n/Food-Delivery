"use client";

import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "../customs/CustomInput";
import { usePathname, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../provider/AuthProvider";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type handleProps = {
  handleSign: () => void;
};

export const Newtreh = (props: handleProps) => {
  const router = useRouter();
  const { login } = useAuth();
  const { handleSign } = props;
  const pathname = usePathname();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <Card
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        width: 448,
        borderRadius: 3,
      }}
    >
      <Stack gap={6} p={4} alignItems={"center"}>
        <Typography alignSelf={"center"} fontSize={28} fontWeight={700}>
          Нэвтрэх
        </Typography>

        <Stack gap={2}>
          <CustomInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            type="text"
            size="medium"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Stack>
            <CustomInput
              label="Нууц үг"
              placeholder="Нууц үг"
              type="password"
              size="medium"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Typography
              display={"flex"}
              justifyContent={"end"}
              fontSize={16}
              fontWeight={400}
              fontFamily={"sans-serif"}
              color="#3F4145"
              onClick={() => {
                router.push("/new1");
              }}
            >
              Нууц үг сэргээх
            </Typography>
          </Stack>
        </Stack>

        <Stack gap={4} display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            disableElevation
            disabled={!formik.values.email || !formik.values.password}
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
            Нэвтрэх
          </Button>

          <Typography fontSize={16} fontWeight={400} color={"#3F4145"}>
            Эсвэл
          </Typography>

          <Button
            variant="outlined"
            disableElevation
            sx={{
              color: "#272727",
              width: 384,
              fontSize: 13,
              fontWeight: 400,
              px: 2,
              py: 1.3,
            }}
            onClick={() => {
              if (pathname) {
                router.push("/sign");
              }
              handleSign();
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};
