"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { useFood } from "../providers/FoodProvider";

type CustomInputProps = {
  startIcon?: ReactNode;
} & TextFieldProps;

export const CustomInput = (props: CustomInputProps) => {
  const { label, type = "text", size, startIcon, ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);
  const { recordList } = useFood();

  let searchValue = "";

  const setSearchValue = (value: string) => {
    searchValue = value;
  };

  const handleShowPassword = () => {
    setShowPassword((p) => !p);
  };

  return (
    <Stack bgcolor={"white"}>
      <Stack gap={0.5}>
        <Typography fontSize={16} fontWeight={400} fontFamily={"sans-serif"}>
          {label}
        </Typography>

        <TextField
          type={type === "password" && showPassword ? "text" : type}
          {...rest}
          sx={{
            width: size === "small" ? "300px" : "384px",
            background: "#F7F7F8",
          }}
          inputProps={{
            style: {
              padding: size === "small" ? "10px 6px" : "14px 16px",
            },
          }}
          InputProps={{
            endAdornment: type === "password" && (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
            startAdornment: startIcon && (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
