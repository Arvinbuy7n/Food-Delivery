"use client";

import { Grid, Menu, Stack } from "@mui/material";
import { MenuItem } from "../customs/Menu";
import { CardFood } from "..";

export const FoodMenu = () => {
  return (
    <Stack sx={{ px: { md: 60, sm: 60 } }} gap={6}>
      <Stack direction={"row"} justifyContent={"space-between"} py={4}>
        <MenuItem label={"Main course"} />
        <MenuItem label={"Appetizers"} />
        <MenuItem label={"Beverage"} />
        <MenuItem label={"On sale"} />
      </Stack>

      <Stack>
        <Grid container sx={{ justifyContent: "space-between" }}>
          {new Array(12).fill(0).map((_, index) => (
            <Grid key={index} item>
              <CardFood
                foodname="Өглөөний хоол"
                price="14,800"
                discount="-20"
                discountPrice="6,800"
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
