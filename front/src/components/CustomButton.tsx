"use client";

import { Button, IconButton, InputAdornment, Stack } from "@mui/material";
import { ReactNode } from "react";

type CustomButtonProps = {
  icon?: ReactNode;
  text: string;
};

export const CustomButton = (props: CustomButtonProps) => {
  const { icon, text } = props;

  return (
    <Stack height="50vh">
      <InputAdornment position="end">
        <IconButton>{icon}</IconButton>
      </InputAdornment>

      <Button>{text}</Button>
    </Stack>
  );
};
