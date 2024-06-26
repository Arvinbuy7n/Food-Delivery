import { Card, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { OrderSelect } from "./OrderSelect";
import { Dispatch, SetStateAction } from "react";
import { LocationOnOutlined } from "@mui/icons-material";

type CustomProps = {
  districts: string;
  setDistricts: Dispatch<SetStateAction<string>>;

  khoroos: string;
  setKhoroos: Dispatch<SetStateAction<string>>;

  aparts: string;
  setAparts: Dispatch<SetStateAction<string>>;

  addition: string;
  setAddition: Dispatch<SetStateAction<string>>;

  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
};

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

const isValid = Boolean(district) && Boolean(khoroo) && Boolean(apart);

export const AddressForm = (props: CustomProps) => {
  const {
    districts,
    setDistricts,
    khoroos,
    setKhoroos,
    aparts,
    setAparts,
    addition,
    setAddition,
    phone,
    setPhone,
  } = props;
  return (
    <Card sx={{ p: 3, width: 432, borderRadius: 4 }}>
      <Stack gap={4}>
        <Stack gap={2}>
          <Typography fontSize={14}>Хаяг аа оруулна уу</Typography>

          <Stack>
            <OrderSelect
              label="Дүүрэг сонгоно уу"
              onChange={(event) => {
                setDistricts(event.target.value);
              }}
            >
              {district.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    <Stack direction={"row"} alignItems={"start"} gap={1}>
                      <LocationOnOutlined />
                      {item}
                    </Stack>
                  </MenuItem>
                );
              })}
            </OrderSelect>
          </Stack>

          <Stack>
            <OrderSelect
              label="Хороо сонгоно уу"
              onChange={(event) => {
                setKhoroos(event?.target.value);
              }}
            >
              {khoroo.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    <Stack direction={"row"} alignItems={"start"} gap={1}>
                      <LocationOnOutlined />
                      {item}
                    </Stack>
                  </MenuItem>
                );
              })}
            </OrderSelect>
          </Stack>

          <Stack>
            <OrderSelect
              label="Байр, гудамж сонгоно уу"
              onChange={(event) => {
                setAparts(event?.target.value);
              }}
            >
              {apart.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    <Stack direction={"row"} alignItems={"start"} gap={1}>
                      <LocationOnOutlined />
                      {item}
                    </Stack>
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

          <TextField
            placeholder="Орц, давхар, орцны код ..."
            onChange={(e) => {
              setAddition(e.target.value);
            }}
          ></TextField>
        </Stack>

        <Stack>
          <Typography fontSize={14} fontWeight={400}>
            Утасны дугаар*
          </Typography>

          <TextField
            placeholder="Phone number"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          ></TextField>
        </Stack>

        <Stack gap={1}>
          <Typography>Төлбөр төлөх</Typography>
          {/* <Stack flexDirection={"row"} gap={"33px"}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
              onClick={() => {
                setPaymentMethod(false);
              }}
              sx={{ cursor: "pointer" }}
            >
              <Checkbox color="default" checked={!paymentMethod} />
              <Typography>Бэлнээр</Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
              onClick={() => {
                setPaymentMethod(true);
              }}
              sx={{ cursor: "pointer" }}
            >
              <Checkbox checked={paymentMethod} color="default" />
              <Typography>Картаар</Typography>
            </Stack>
          </Stack> */}
        </Stack>
      </Stack>
    </Card>
  );
};
