import { Box, Button, Card, IconButton, Stack } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { MoreVertEdit } from "../auto/MoreVert";

type MenuProps = {
  label?: string;
  endIcon?: ReactNode;
};

export const MenuItem = (props: MenuProps) => {
  const { label, endIcon } = props;
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <Stack
      sx={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        borderRadius: "12px",
        "&:hover": {
          backgroundColor: "#18BA51",
        },
        border: 1,
      }}
    >
      <Button
        sx={{
          fontSize: 18,
          fontFamily: "sans-serif",
          color: "#000",
          "&:hover": {
            color: "#FFF",
          },
          width: 282,
        }}
      >
        {label}
      </Button>
      <IconButton
        onClick={() => {
          setOpenEdit((prev) => !prev);
        }}
        sx={{ position: "relative" }}
      >
        {endIcon}
        <Stack position={"absolute"} left={0} top={0}>
          {openEdit && <MoreVertEdit />}
        </Stack>
      </IconButton>
    </Stack>
  );
};
