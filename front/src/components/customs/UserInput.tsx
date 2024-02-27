"use client";

import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";

type UserInputProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label?: string;
  title?: string;
} & TextFieldProps;

export const UserInput = (props: UserInputProps) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleClick = () => {
    setIsEditing(false);
  };

  const { type = "text", startIcon, endIcon, label, title, ...rest } = props;

  return (
    <Stack>
      <TextField
        type="text"
        sx={{
          width: 392,
          height: 56,
          bgcolor: "#F6F6F6",
          position: "relative",
        }}
        InputProps={{
          endAdornment: type === "text" && (
            <InputAdornment position="end">
              <IconButton
                sx={{ bgcolor: "#FFF", color: "#18BA51" }}
                onClick={handleClick}
              >
                {endIcon}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: startIcon && (
            <InputAdornment position="start">
              <IconButton sx={{ bgcolor: "#FFFFFF", color: "#000" }}>
                {startIcon}
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        disabled={isEditing}
        value={label}
        {...rest}
      >
        {label}
      </TextField>

      <Typography
        position={"absolute"}
        ml={8}
        mt={0.8}
        fontSize={12}
        fontWeight={400}
        color={"#888A99"}
      >
        {title}
      </Typography>
    </Stack>
  );
};
