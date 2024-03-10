"use client";

import { Container, Grid, Stack } from "@mui/material";
import { MenuItem } from "../customs/MenuItem";
import { CardFood } from "..";
import { useFood } from "../providers/FoodProvider";
import { Dispatch, SetStateAction, useState } from "react";
import { SearchResult } from "./SearchResult";

type Props = {
  categoryName?: string;
  setCategoryName?: Dispatch<SetStateAction<string>>;
};

export const FoodMenu = (props: Props) => {
  const { categoryList, recordList, searchValue } = useFood();
  const [categoryName, setCategoryName] = useState("");

  const search = recordList
    .filter((name) => name.foodCategory.includes(categoryName))
    .filter((item) =>
      item.foodName.toLowerCase().includes(searchValue.toLowerCase())
    );

  if (!search.length) {
    return <SearchResult />;
  }

  return (
    <Container sx={{ pt: 7 }}>
      <Stack gap={6}>
        <Stack direction={"row"} py={4} gap={2} ml={{ xs: 6, lg: 0 }}>
          <Grid container justifyContent={"space-between"} gap={2}>
            {categoryList.map((item, _index) => {
              return (
                <MenuItem
                  key={_index}
                  label={item.category}
                  setCategoryName={setCategoryName}
                />
              );
            })}
          </Grid>
        </Stack>

        <Stack>
          <Grid container spacing={2}>
            {recordList
              .filter((name) => name.foodCategory.includes(categoryName))
              .filter((item) =>
                item.foodName.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => (
                <Grid item key={index} mb={6}>
                  <CardFood
                    {...item}
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
