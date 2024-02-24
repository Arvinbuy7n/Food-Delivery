"use client";

import { Container, Grid, Stack } from "@mui/material";
import { MenuItem } from "../customs/MenuItem";
import { CardFood } from "..";
import { useFood } from "../FoodProvider";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  categoryName: string;
  setCategoryName: Dispatch<SetStateAction<string>>;
};

export const FoodMenu = (props: Props) => {
  const { categoryList, recordList } = useFood();
  const [categoryName, setCategoryName] = useState("");

  return (
    <Container>
      <Stack gap={6}>
        <Stack direction={"row"} py={4} gap={2}>
          <Grid container justifyContent={"space-between"}>
            {categoryList.map((item, _index) => {
              return (
                <MenuItem
                  label={item.category}
                  setCategoryName={setCategoryName}
                />
              );
            })}
          </Grid>
        </Stack>

        <Stack>
          <Grid container justifyContent={"space-between"}>
            {recordList
              .filter((name) => name.foodCategory.includes(categoryName))
              .map((item, index) => (
                <Grid key={index}>
                  <CardFood
                    foodname={item.foodName}
                    price={item.price}
                    ingredient={item.ingredient}
                    discount={item.discount}
                    foodImage={item.foodImage}
                    setCategoryName={setCategoryName}
                  ></CardFood>
                </Grid>
              ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
};
