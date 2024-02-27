import { Button, CardMedia, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useCard } from "../providers/CartProvider";

type OrderProps = {
  image: string;
  name: string;
  price: string;
  ingredient: string;
};

export const MyOrderItem = (props: OrderProps) => {
  const { image, name, price, ingredient } = props;
  const [count, setCount] = useState(1);
  const { addBasket, setAddBasket } = useCard();

  const handleLeft = () => {
    setCount(count - 1);
  };

  const handleRight = () => {
    setCount(count + 1);
  };

  return (
    <Stack borderTop={1} borderColor={"grey.500"}>
      <Stack direction={"row"} p={4} justifyContent={"space-between"}>
        <CardMedia>
          <Image src={image} alt="pizza" width={245} height={150}></Image>
        </CardMedia>

        <Stack gap={2.8} width={"45%"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography fontSize={18} fontWeight={600}>
                {name}
              </Typography>
              <Typography color={"#18BA51"} fontWeight={600} fontSize={18}>
                {price}
              </Typography>
            </Stack>

            <Stack
              mt={1}
              onClick={() => {
                const basket = addBasket.filter(
                  (element) => element.food.foodName != name
                );

                setAddBasket(basket);
              }}
            >
              <Image src="/close.png" alt="pizza" width={26} height={26} />
            </Stack>
          </Stack>

          <Typography
            fontSize={16}
            color={"#767676"}
            fontWeight={400}
            border={1}
            borderRadius={1}
          >
            {ingredient}
          </Typography>

          <Stack direction={"row"} gap={4}>
            <Typography
              onClick={handleLeft}
              sx={{
                bgcolor: "#18BA51",
                color: "#FFF",
                px: 2,
              }}
            >
              -
            </Typography>
            <Typography fontSize={16} fontWeight={500}>
              {count}
            </Typography>
            <Typography
              onClick={handleRight}
              sx={{
                bgcolor: "#18BA51",
                color: "#FFF",
                px: 2,
              }}
            >
              +
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
