import { Box, Button, Card, IconButton, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import { MoreVertEdit } from "../auto/MoreVert";

type MenuProps = {
  label?: String;
  endIcon?: ReactNode;
};

export const MenuItem = (props: MenuProps) => {
  const { label, endIcon } = props;
  const [openEdit, closeEdit] = React.useState(false);

  const handleOpen = () => closeEdit(true);
  const handleClose = () => closeEdit(false);

  return (
    <Card
      sx={{
        justifyContent: "center",
        display: "flex",
        borderRadius: "16px",
        "&:hover": {
          backgroundColor: "#18BA51",
        },
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
        onClick={handleClose}
      >
        {label}
      </Button>
      <IconButton onClick={handleOpen}>{endIcon}</IconButton>

      {openEdit ? <MoreVertEdit /> : null}
    </Card>
  );
};
