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
import { SearchResult } from "../auto/SearchResult";

type Props = {
  handle: () => void;
  see: number;
};

export const Discount = (props: Props) => {
  const { recordList, searchValue } = useFood();
  const { handle, see } = props;

  const searchFood = recordList
    .filter((name) => name.discount)
    .filter((item) =>
      item.foodName.toLowerCase().includes(searchValue.toLowerCase())
    );

  if (!searchFood.length) {
    return <SearchResult />;
  }

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
            Хямдралтай
          </Typography>
        </Stack>

        <Stack direction={"row"} pt={{ xs: 1, sm: 0 }}>
          <Typography
            fontSize={14}
            fontWeight={400}
            color={"#18BA51"}
            sx={{ cursor: "pointer" }}
          >
            {see == 4 ? "Бүгдийг харах" : "Багасгаж харах"}
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
            .filter((item) =>
              item.foodName.toLowerCase().includes(searchValue.toLowerCase())
            )
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
