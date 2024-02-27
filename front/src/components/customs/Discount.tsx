import { ArrowForwardIos, Star } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { useFood } from "../providers/FoodProvider";
import { CardFood } from "..";
import { useRouter } from "next/navigation";

export const Discount = () => {
  const { recordList } = useFood();
  const router = useRouter();

  return (
    <Stack gap={4}>
      <Stack sx={{ justifyContent: "space-between" }} direction={"row"}>
        <Stack direction={"row"} gap={0.5}>
          <IconButton sx={{ width: 22, height: 22, mt: 0.5, color: "#18BA51" }}>
            {<Star />}
          </IconButton>
          <Typography fontSize={22} fontWeight={700}>
            Хямдралтай
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          onClick={() => {
            router.push("/foodmenu");
          }}
        >
          <Typography fontSize={14} color={"#18BA51"}>
            Бүгдийг харах
          </Typography>

          <InputAdornment position="end">
            <IconButton sx={{ mt: 2.5, color: "#18BA51" }}>
              <ArrowForwardIos sx={{ width: 15 }} />
            </IconButton>
          </InputAdornment>
        </Stack>
      </Stack>

      <Stack>
        <Grid container gap={2}>
          {recordList
            .filter((name) => name.discount)
            .map((item, index) => (
              <Grid key={index} item>
                <CardFood
                  foodName={item.foodName}
                  price={item.price}
                  ingredient={item.ingredient}
                  discount={item.discount}
                  foodImage={item.foodImage}
                  _id={item._id}
                  foodCategory={item.foodCategory}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
