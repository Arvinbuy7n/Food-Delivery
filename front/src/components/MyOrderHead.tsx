import { ArrowBackIos } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, Typography } from "@mui/material";

export const MyOrderHead = () => {
  return (
    <Stack
      sx={{
        bgcolor: "#FFF",
        padding: 3,
        gap: 4,
      }}
    >
      <Stack direction={"row"} gap={22}>
        <InputAdornment position="start" sx={{ mt: 2 }}>
          <IconButton>
            <ArrowBackIos />
          </IconButton>
        </InputAdornment>
        <Typography fontSize={20} fontWeight={900}>
          Таны сагс
        </Typography>
      </Stack>
    </Stack>
  );
};
