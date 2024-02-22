"use client";

import { Grid, Stack } from "@mui/material";
import { MenuItem } from "../customs/Menu";
import { CardFood } from "..";
import { useFood } from "../FoodProvider";

export const FoodMenu = () => {
  const { categoryList, recordList } = useFood();
  return (
    <Stack sx={{ px: { md: 60, sm: 60 } }} gap={6}>
      <Stack direction={"row"} py={4} gap={2}>
        {categoryList.map((item, _index) => {
          return <MenuItem label={item.category} />;
        })}
      </Stack>

      <Stack>
        <Grid container gap={2}>
          {recordList.map((item, index) => (
            <Grid key={index}>
              <CardFood
                foodname={item.foodName}
                price={item.price}
                ingredient={item.ingredient}
                discount={item.discount}
                foodImage={item.foodImage}
              ></CardFood>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
