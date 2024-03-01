import { Card, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { CustomRadio } from "../customs/CustomRadio";
import { CheckBox, LocationOn } from "@mui/icons-material";
import { OrderSelect } from "./OrderSelect";
import { useFormik } from "formik";
import { useCard } from "../providers/CartProvider";
import * as yup from "yup";
import { Dispatch, SetStateAction } from "react";

type CustomProps = {
  districts: string;
  setDistricts: Dispatch<SetStateAction<string>>;

  khoroos: string;
  setKhoroos: Dispatch<SetStateAction<string>>;

  aparts: string;
  setAparts: Dispatch<SetStateAction<string>>;
};

const validationSchema = yup.object({
  district: yup.string().required(),
  khoroo: yup.string().required(),
  apart: yup.string().required(),
  addition: yup.string().required(),
  phone: yup.number().required(),
});

const district = [
  "Баянзүрх дүүрэг",
  "Хан-Уул дүүрэг",
  "Баянгол дүүрэг",
  "Сонгинохайрхан дүүрэг",
  "Чингэлтэй дүүрэг",
];

const khoroo = [
  "1-р хороо",
  "2-р хороо",
  "3-р хороо",
  "4-р хороо",
  "5-р хороо",
  "6-р хороо",
];

const apart = [
  "Нархан хотхон",
  "26-р байр",
  "Хоймор хотхон",
  "45-р байр",
  "Зайсан хотхон",
];

export const AlhamNeg = (props: CustomProps) => {
  const { postOrder, addBasket } = useCard();
  const { districts, setDistricts, khoroos, setKhoroos, aparts, setAparts } =
    props;

  // const formik = useFormik({
  //   initialValues: {
  //     district: "",
  //     khoroo: "",
  //     apart: "",
  //     addition: "",
  //     phone: [],
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     postOrder(   {
  //      values.district,
  //       va
  //       apart: string;
  //       addition: string;
  //       phone: number;
  //       paymentMethod: boolean;
  //     }, { addBasket });
  //   },
  // });
  return (
    <Stack py={8} gap={6}>
      <Stack direction={"row"}>
        <CustomRadio />

        <Stack>
          <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
            Алхам 1
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Хаягийн мэдээлэл оруулах
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Stack>

      <Card sx={{ p: 2, width: 432 }}>
        <Stack gap={4}>
          <Stack gap={2}>
            <Typography>Хаяг аа оруулна уу</Typography>

            <Stack>
              <OrderSelect
                label=""
                type=""
                onChange={(event) => {
                  setDistricts(event?.target.value);
                }}
              >
                {district.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </OrderSelect>
            </Stack>

            <Stack>
              <OrderSelect
                label="ss"
                type=""
                onChange={(event) => {
                  setKhoroos(event?.target.value);
                }}
              >
                {khoroo.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </OrderSelect>
            </Stack>

            <Stack>
              <OrderSelect
                label=""
                type=""
                onChange={(event) => {
                  setAparts(event?.target.value);
                }}
              >
                {apart.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </OrderSelect>
            </Stack>
          </Stack>

          <Stack>
            <Typography fontSize={14} fontWeight={400}>
              Нэмэлт мэдээлэл
            </Typography>

            <TextField placeholder="Орц, давхар, орцны код ..."></TextField>
          </Stack>

          <Stack>
            <Typography fontSize={14} fontWeight={400}>
              Утасны дугаар*
            </Typography>

            <TextField placeholder="Phone number"></TextField>
          </Stack>

          <Stack gap={1}>
            <Typography>Төлбөр төлөх</Typography>

            <Stack direction={"row"} gap={10}>
              <Stack direction={"row"} gap={1}>
                <CheckBox></CheckBox>
                <Typography>Бэлнээр</Typography>
              </Stack>

              <Stack direction={"row"} gap={1}>
                <CheckBox></CheckBox>
                <Typography>Дансаар</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
