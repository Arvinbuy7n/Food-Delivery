import { ArrowBackIos } from "@mui/icons-material";
import {
  Button,
  Card,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useCard } from "../providers/CartProvider";
import { MyOrderItem } from "./MyOrderItem";
import { usePathname, useRouter } from "next/navigation";

type handleProps = {
  closeButton?: () => void;
  foodName: string;
  price: number;
  ingredients: string;
  foodImage: string;
};

export const MyOrder = (props: handleProps) => {
  const { closeButton } = props;
  const { addBasket } = useCard();
  const router = useRouter();
  const pathname = usePathname();

  const sumBasket = addBasket.reduce((sum, currentValue) => {
    return sum + currentValue.food.price * currentValue.quantity;
  }, 0);

  return (
    <Stack justifyContent={"space-between"} height={"100vh"}>
      <Stack overflow={"scroll"}>
        {pathname != "/step" && (
          <Stack
            sx={{
              bgcolor: "#FFF",
              py: 3,
              px: 2,
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
        )}

        <Stack>
          {addBasket.map((item, _index) => {
            return (
              <MyOrderItem
                key={_index}
                image={item.food.foodImage}
                name={item.food.foodName}
                ingredient={item.food.ingredient}
                quantity={item.quantity}
                price={item.food.price}
              />
            );
          })}
        </Stack>
      </Stack>

      <Card sx={{ mb: 2 }}>
        <Stack direction={"row"} justifyContent={"space-between"} px={2} py={4}>
          <Stack width={"50%"}>
            <Typography fontSize={18} fontWeight={400}>
              Нийт төлөх дүн
            </Typography>
            <Typography fontSize={18} fontWeight={700}>
              {sumBasket}
            </Typography>
          </Stack>

          <Button
            sx={{
              width: "50%",
              textAlign: "center",
              bgcolor: "#18BA51",
              color: "#FFF",
            }}
            onClick={() => {
              router.push("/step");
              if (closeButton) closeButton();
            }}
          >
            Захиалах
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
};
