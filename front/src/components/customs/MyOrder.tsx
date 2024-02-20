import { ArrowBackIos } from "@mui/icons-material";
import {
  Button,
  CardMedia,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type handleProps = {
  closeButton: () => void;
};

export const MyOrder = (props: handleProps) => {
  const [count, setCount] = useState(1);
  const { closeButton } = props;

  const handleLeft = () => {
    setCount(count - 1);
  };

  const handleRight = () => {
    setCount(count + 1);
  };

  return (
    <Stack>
      <Stack
        sx={{
          bgcolor: "#FFF",
          py: 3,
          px: 2,
          gap: 4,
        }}
      >
        <Stack direction={"row"} gap={22} pb={2}>
          <InputAdornment position="start" sx={{ mt: 2 }}>
            <IconButton>
              <ArrowBackIos onClick={closeButton} />
            </IconButton>
          </InputAdornment>
          <Typography fontSize={20} fontWeight={900}>
            Таны сагс
          </Typography>
        </Stack>
      </Stack>
      <Stack borderBottom={1} borderTop={1} borderColor={"grey.500"}>
        <Stack direction={"row"} px={2} py={5} gap={2}>
          <CardMedia>
            <Image
              src="/order.png"
              alt="pizza"
              width={240}
              height={150}
            ></Image>
          </CardMedia>

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

              <Image
                src="/close.png"
                alt="pizza"
                width={20}
                height={20}
              ></Image>
            </Stack>

            <Typography fontSize={16} color={"#767676"} fontWeight={400}>
              Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
            </Typography>

            <Stack direction={"row"} gap={4}>
              <Button
                onClick={handleLeft}
                sx={{
                  bgcolor: "#18BA51",
                  color: "#FFF",
                  fontSize: 28,
                  height: 45,
                }}
              >
                -
              </Button>
              <Typography fontSize={20} fontWeight={500} mt={1}>
                {count}
              </Typography>
              <Button
                onClick={handleRight}
                sx={{
                  bgcolor: "#18BA51",
                  color: "#FFF",
                  fontSize: 28,
                  height: 45,
                }}
              >
                +
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
