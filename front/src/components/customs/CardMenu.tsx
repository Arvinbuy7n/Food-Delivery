import { Card, InputAdornment, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

type CardMenuProps = {
  title: string;
  label: String;
  startIcon?: ReactNode;
};

export const CardMenu = (props: CardMenuProps) => {
  const { title, label, startIcon } = props;

  return (
    <Card
      sx={{
        border: 1,
        width: 265,
        borderColor: "#D6D8DB",
        borderRadius: "16px",
      }}
    >
      <Stack gap={4} bgcolor={"#FFF"} px={2} py={3}>
        <InputAdornment position="start" sx={{ p: 1, color: "#18BA51" }}>
          {startIcon}
        </InputAdornment>

        <Stack>
          <Typography fontSize={18} fontWeight={700}>
            {title}
          </Typography>

          <Typography fontSize={14} fontWeight={400}>
            {label}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
