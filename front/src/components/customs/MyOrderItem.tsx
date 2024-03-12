import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useCard } from "../providers/CartProvider";
import { usePathname } from "next/navigation";
import { useState } from "react";

type OrderProps = {
  image: any;
  name: string;
  price: number;
  ingredient: string;
  quantity: number;
};

export const MyOrderItem = (props: OrderProps) => {
  const { image, name, ingredient, quantity, price } = props;
  const { addBasket, setAddBasket } = useCard();

  const pathname = usePathname();

  return (
    <Stack borderTop={1} borderColor={"grey.500"}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        px={2}
        py={4}
        justifyContent={"space-between"}
        gap={{ xs: 3, md: 0 }}
      >
        <Image src={image} alt="pizza" width={240} height={150}></Image>

        <Stack gap={2} width={{ xs: "100%", md: "45%" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack>
              <Typography fontSize={18} fontWeight={600}>
                {name}
              </Typography>
              <Typography color={"#18BA51"} fontWeight={600} fontSize={18}>
                {Number(price) * Number(quantity)}
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
              <Stack sx={{ cursor: "pointer" }}>
                <Image src="/close.png" alt="" width={26} height={26} />
              </Stack>
            </Stack>
          </Stack>

          <Typography fontSize={16} color={"#767676"} fontWeight={400}>
            {ingredient}
          </Typography>

          {pathname != "/step" && (
            <Stack
              direction={"row"}
              gap={4}
              justifyContent={{ xs: "center", md: "start" }}
            >
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
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

// const [a, setA] = useState([
//   {
//     _id: "1",
//     quantity: 2
//   },
//   {
//     _id: "2",
//     quantity: 1
//   }
// ])

// const increase = (_id: string) => {
//   const newA = a.map(item => {
//     if (item._id === _id) {
//       return { ...item, quantity: item.quantity + 1 }
//     }
//     return { ...item }
//   })

//   setA(newA)
// }
