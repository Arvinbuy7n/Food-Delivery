import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type CustomSelectProps = {
  label: string;
  startIcon: React.ReactNode;
};

export const Address = (props: CustomSelectProps) => {
  const { label } = props;

  return (
    <FormControl sx={{ width: 384 }}>
      <InputLabel sx={{ ml: 2 }}>{label}</InputLabel>
      <Select>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Баянзүрх дүүрэг</MenuItem>
        <MenuItem value={20}>Хан-Уул дүүрэг</MenuItem>
        <MenuItem value={30}>Баянгол дүүрэг</MenuItem>
        <MenuItem value={40}>Сонгинохайрхан дүүрэг</MenuItem>
        <MenuItem value={50}>Чингэлтэй дүүрэг</MenuItem>
      </Select>
    </FormControl>
  );
};
