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
};

export const FoodSection = (props: Props) => {
  const { recordList } = useFood();
  const { category } = props;

  return (
    <Stack gap={4}>
      <Stack sx={{ justifyContent: "space-between" }} direction={"row"}>
        <Stack direction={"row"} gap={0.5}>
          <IconButton sx={{ width: 22, height: 22, mt: 0.5, color: "#18BA51" }}>
            {<Star />}
          </IconButton>
          <Typography fontSize={22} fontWeight={700}>
            {category}
          </Typography>
        </Stack>

        <Stack direction={"row"}>
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
            .filter((name) => name.foodCategory.includes(category))
            // .filter((list) => list.discount?.includes(discount))
            .map((item, index) => (
              <Grid key={index} item>
                <CardFood
                  foodname={item.foodName}
                  price={item.price}
                  ingredient={item.ingredient}
                  discount={item.discount}
                  foodImage={item.foodImage}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
