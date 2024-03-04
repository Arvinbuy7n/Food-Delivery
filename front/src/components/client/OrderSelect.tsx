"use client";
import { PlaceOutlined } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";

type CustomSelectProps = {
  type: HTMLInputTypeAttribute;
  value?: string;
  required?: string;
  placeholder?: string;
  variant?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  startIcon: ReactNode;
};

export const OrderSelect = (props: TextFieldProps) => {
  const { type, ...rest } = props;

  return (
    <Stack gap={0.5} justifyContent={"center"}>
      <TextField
        {...rest}
        select
        type={type}
        inputProps={{
          style: {
            padding: "8px",
          },
        }}
        InputProps={{
          style: {
            backgroundColor: "#F7F7F8",
          },

          startAdornment: type === "select" && (
            <InputAdornment position="start">
              <IconButton>
                <PlaceOutlined />
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {props.children}
      </TextField>
    </Stack>
  );
};
