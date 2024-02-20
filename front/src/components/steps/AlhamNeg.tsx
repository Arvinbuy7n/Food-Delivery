import { Card, Select, Stack, TextField, Typography } from "@mui/material";
import { CustomRadio } from "../customs/CustomRadio";
import { Address } from "../customs/Select";
import { CheckBox, LocationOn } from "@mui/icons-material";

export const AlhamNeg = () => {
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

            <Address label="Дүүрэг сонгоно уу" startIcon={<LocationOn />} />
            <Address label="Хороо сонгоно уу" startIcon={<LocationOn />} />
            <Address
              label="Байр, гудамж сонгоно уу"
              startIcon={<LocationOn />}
            />
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

          <Stack>
            <Typography>Төлбөр төлөх</Typography>

            <Stack direction={"row"} gap={10}>
              <Stack direction={"row"} gap={2}>
                <CheckBox></CheckBox>
                <Typography>Бэлнээр</Typography>
              </Stack>

              <Stack direction={"row"} gap={2}>
                <CheckBox></CheckBox>
                <Typography>Бэлнээр</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
