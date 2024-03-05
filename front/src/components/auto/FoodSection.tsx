import { ArrowForwardIos, Star } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { CardFood } from "..";
import { useFood } from "../providers/FoodProvider";

type Props = {
  category: string;
  handleSeeAll: () => void;
  all: number;
};

export const FoodSection = (props: Props) => {
  const { category, handleSeeAll, all } = props;
  const { recordList, searchValue } = useFood();

  return (
    <Stack gap={4}>
      <Stack
        sx={{ justifyContent: "space-between" }}
        direction={"row"}
        px={{ xs: 2, lg: 0 }}
      >
        <Stack direction={"row"} gap={0.5}>
          <IconButton sx={{ width: 22, height: 22, mt: 0.5, color: "#18BA51" }}>
            {<Star />}
          </IconButton>
          <Typography fontSize={22} fontWeight={700}>
            {category}
          </Typography>
        </Stack>

        <Stack direction={"row"}>
          <Typography fontSize={14} color={"#18BA51"} onClick={handleSeeAll}>
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
            .filter((item) => item.foodName.includes(searchValue))
            .filter((name) => name.foodCategory.includes(category))
            .filter((_name, index) => index < all)
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
