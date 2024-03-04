import { Button, IconButton, Stack } from "@mui/material";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { MoreVertEdit } from "../auto/MoreVert";

type MenuProps = {
  label: string;
  endIcon?: ReactNode;

  setCategoryName: Dispatch<SetStateAction<string>>;
};

export const MenuItem = (props: MenuProps) => {
  const { label, endIcon, setCategoryName } = props;
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
        onClick={() => {
          setCategoryName(label);
        }}
        sx={{
          fontSize: 18,
          fontWeight: 500,
          fontFamily: "sans-serif",
          color: "#000",
          "&:hover": {
            color: "#FFF",
          },
          width: 258,
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
