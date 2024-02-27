"use client";

import { Button, Card, Stack, Typography } from "@mui/material";
import { CustomRadio } from "../customs/CustomRadio";
import { useCard } from "../providers/CartProvider";
import { MyOrderItem } from "../customs/MyOrderItem";

export const AlhamTwo = () => {
  const { addBasket } = useCard();

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
        <Stack
          py={2}
          px={3}
          justifyContent={"space-between"}
          height={580}
          overflow={"scroll"}
        >
          <Stack>
            {addBasket.map((item, _index) => {
              return (
                <MyOrderItem
                  image={item.food.foodImage}
                  name={item.food.foodName}
                  price={item.food.price}
                  ingredient={item.food.ingredient}
                />
              );
            })}
          </Stack>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography fontSize={18} fontWeight={400}>
                Нийт төлөх дүн
              </Typography>
              <Typography fontSize={18} fontWeight={700}>
                {addBasket.reduce(
                  (total, currentValue) =>
                    total + Number(currentValue.food.price),
                  0
                )}
              </Typography>
            </Stack>

            <Button sx={{ bgcolor: "#EEEFF2", px: 8 }}>Захиалах</Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
