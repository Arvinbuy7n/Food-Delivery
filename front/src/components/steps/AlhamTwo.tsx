import {
  Button,
  Card,
  CardMedia,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CustomRadio } from "../CustomRadio";
import { Address } from "../Select";
import { CheckBox, LocationOn } from "@mui/icons-material";
import Image from "next/image";

export const AlhamTwo = () => {
  return (
    <Stack py={8} gap={6}>
      <Stack direction={"row"}>
        <CustomRadio />

        <Stack>
          <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
            Алхам 2
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Захиалга баталгаажуулах
          </Typography>
          <Typography fontSize={20} fontWeight={400}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Stack>

      <Card
        sx={{
          width: 432,
        }}
      >
        <Stack py={2} px={3} justifyContent={"space-between"} height={580}>
          <Stack
            direction={"row"}
            py={2}
            gap={2}
            borderBottom={1}
            borderTop={1}
            borderColor={"grey.500"}
          >
            <Image
              src="/order.png"
              alt="pizza"
              width={184}
              height={121}
            ></Image>

            <Stack justifyContent={"space-between"}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack>
                  <Typography fontSize={18} fontWeight={600}>
                    Main Pizza
                  </Typography>
                  <Typography color={"#18BA51"} fontWeight={600} fontSize={18}>
                    34,800₮
                  </Typography>
                </Stack>
              </Stack>

              <Typography fontSize={16} color={"#767676"} fontWeight={400}>
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography fontSize={18} fontWeight={400}>
                Нийт төлөх дүн
              </Typography>
              <Typography fontSize={18} fontWeight={700}>
                34,800₮
              </Typography>
            </Stack>

            <Button sx={{ bgcolor: "#EEEFF2", px: 8 }}>Захиалах</Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
