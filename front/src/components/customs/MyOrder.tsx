import { ArrowBackIos } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { useCard } from "../providers/CartProvider";
import { MyOrderItem } from "./MyOrderItem";

type handleProps = {
  closeButton: () => void;
  foodName: string;
  price: string;
  ingredients: string;
  foodImage: string;
};

export const MyOrder = (props: handleProps) => {
  const { closeButton } = props;

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

      <Stack>
        <Stack>
          {/* {addBasket.map((item, _index) => {
            return (
              <MyOrderItem
                image={item.foodImage}
                name={item.foodName}
                price={item.price}
                ingredient={item.ingredient}
              />
            );
          })} */}
        </Stack>

        {/* <Stack
          direction={"row"}
          justifyContent={"space-between"}
          px={2}
          py={4}
          borderTop={1}
        >
          <Stack width={"50%"}>
            <Typography fontSize={18} fontWeight={400}>
              Нийт төлөх дүн
            </Typography>
            <Typography fontSize={18} fontWeight={700}>
              11
            </Typography>
          </Stack>

          <Button
            sx={{
              width: "50%",
              textAlign: "center",
              bgcolor: "#18BA51",
              color: "#FFF",
            }}
          >
            Захиалах
          </Button>
        </Stack> */}
      </Stack>
    </Stack>
  );
};
