import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useCard } from "../providers/CartProvider";

type OrderProps = {
  image: string;
  name: string;
  price: string;
  ingredient: string;
  quantity: number;
};

export const MyOrderItem = (props: OrderProps) => {
  const { image, name, price, ingredient, quantity } = props;
  const { addBasket, setAddBasket } = useCard();

  return (
    <Stack borderTop={1} borderColor={"grey.500"}>
      <Stack direction={"row"} p={4} justifyContent={"space-between"}>
        <Image src={image} alt="pizza" width={245} height={150}></Image>

        <Stack gap={2} width={"45%"}>
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
              <Image src="/close.png" alt="" width={26} height={26} />
            </Stack>
          </Stack>

          <Typography
            fontSize={16}
            color={"#767676"}
            fontWeight={400}
            borderBottom={1}
          >
            {ingredient}
          </Typography>

          <Stack direction={"row"} gap={4}>
            <Typography
              sx={{
                bgcolor: "#18BA51",
                color: "#FFF",
                px: 1.5,
                pb: 0.5,
                borderRadius: 2,
                fontSize: 20,
              }}
            >
              -
            </Typography>
            <Typography fontSize={16} fontWeight={500} mt={0.5}>
              {quantity}
            </Typography>
            <Typography
              sx={{
                bgcolor: "#18BA51",
                color: "#FFF",
                px: 1.5,
                pb: 0.5,
                borderRadius: 2,
                fontSize: 20,
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
