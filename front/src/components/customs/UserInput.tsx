import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { ReactNode } from "react";

type UserInputProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & TextFieldProps;

export const UserInput = (props: UserInputProps) => {
  const { type = "text", startIcon, endIcon, ...rest } = props;

  return (
    <Stack>
      <TextField
        type="text"
        {...rest}
        sx={{
          width: 392,
          height: 56,
          bgcolor: "#F6F6F6",
        }}
        InputProps={{
          endAdornment: type === "text" && (
            <InputAdornment position="end">
              <IconButton sx={{ bgcolor: "#FFFFFF" }}>{endIcon}</IconButton>
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
      />
    </Stack>
  );
};
