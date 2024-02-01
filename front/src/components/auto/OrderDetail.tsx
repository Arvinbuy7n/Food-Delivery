import { Button, Card, Stack, Typography } from "@mui/material";
import { count } from "console";
import Image from "next/image";
import React from "react";

type OrderDetailProps = {
  handleClose: () => void;
  add: number;
};

export const OrderDetail = (props: OrderDetailProps) => {
  const { handleClose } = props;
  const [add, setAdd] = React.useState(1);

  const handleLeft = () => {
    setAdd(add - 1);
  };

  const handleRight = () => {
    setAdd(add + 1);
  };

  return (
    <Stack
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      <Stack width={950}>
        <Card sx={{ borderRadius: 4 }}>
          <Stack
            height={535}
            p={4}
            bgcolor={"#FFF"}
            direction={"row"}
            sx={{ justifyContent: "space-between" }}
          >
            <Stack>
              <Image src="/pizza.png" alt="food" width={480} height={480} />
            </Stack>

            <Stack gap={2}>
              <Stack sx={{ alignItems: "end" }}>
                <Image
                  src="/close.png"
                  alt="ss"
                  width={24}
                  height={24}
                  onClick={handleClose}
                ></Image>
              </Stack>
              <Stack gap={4}>
                <Stack>
                  <Typography fontSize={28} fontWeight={700}>
                    Main Pizza
                  </Typography>
                  <Typography fontSize={18} fontWeight={600} color={"#18BA51"}>
                    34,800₮
                  </Typography>
                </Stack>

                <Stack>
                  <Typography fontSize={18} fontWeight={600}>
                    Орц
                  </Typography>
                  <Card sx={{ bgcolor: "grey.200" }}>
                    <Typography p={1} fontSize={16}>
                      Хулуу, төмс, лууван , сонгино, цөцгийн тос, <br></br>{" "}
                      самрын үр
                    </Typography>
                  </Card>
                </Stack>

                <Typography fontSize={18} fontWeight={600}>
                  Тоо
                </Typography>

                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Button
                    sx={{
                      bgcolor: "#18BA51",
                      color: "#FFF",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                    onClick={handleLeft}
                  >
                    -
                  </Button>
                  <Typography fontSize={16} fontWeight={500} mt={1}>
                    {add}
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: "#18BA51",
                      color: "#FFF",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                    onClick={handleRight}
                  >
                    +
                  </Button>
                </Stack>

                <Button
                  sx={{ bgcolor: "#18BA51", color: "#fff", fontSize: 12 }}
                >
                  Сагслах
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};
