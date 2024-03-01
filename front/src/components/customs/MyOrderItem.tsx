import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useCard } from "../providers/CartProvider";
import { usePathname } from "next/navigation";

type OrderProps = {
  image: string;
  name: string;
  price: number;
  ingredient: string;
  quantity: number;
  sumBasket: number;
};

export const MyOrderItem = (props: OrderProps) => {
  const { image, name, ingredient, quantity, sumBasket } = props;
  const { addBasket, setAddBasket, setAdd } = useCard();

  const changeCount = (change: number) => {
    setAdd((prev) => {
      if (change < 0 && prev == 1) return prev;
      return prev + change;
    });
  };

  const pathname = usePathname();

  return (
    <Stack borderTop={1} borderColor={"grey.500"}>
      <Stack direction={"row"} px={2} py={4} justifyContent={"space-between"}>
        <Image src={image} alt="pizza" width={240} height={150}></Image>

        <Stack gap={2} width={"45%"}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography fontSize={18} fontWeight={600}>
                {name}
              </Typography>
              <Typography color={"#18BA51"} fontWeight={600} fontSize={18}>
                {sumBasket}
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

          <Typography fontSize={16} color={"#767676"} fontWeight={400}>
            {ingredient}
          </Typography>

          {pathname != "/step" && (
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
                onClick={() => {
                  changeCount(-1);
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
                onClick={() => {
                  changeCount(1);
                }}
              >
                +
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
