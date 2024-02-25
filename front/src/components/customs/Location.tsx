import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type CustomSelectProps = {
  label: string;
  startIcon: React.ReactNode;
};

export const Location = (props: CustomSelectProps) => {
  const { label, startIcon } = props;
  // const [age, setAge] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  return (
    <FormControl sx={{ width: 384 }}>
      <InputLabel sx={{ ml: 2 }}>{label}</InputLabel>
      <Select>
        <MenuItem value="">
          <em></em>
        </MenuItem>
        <MenuItem value={10}>Нархан хотхон</MenuItem>
        <MenuItem value={20}>26-р байр</MenuItem>
        <MenuItem value={30}>Хоймор хотхон</MenuItem>
        <MenuItem value={40}>45-р байр</MenuItem>
        <MenuItem value={50}>Зайсан хотхон</MenuItem>
      </Select>
      {/* <InputAdornment position="start">{startIcon}</InputAdornment> */}
    </FormControl>
  );
};
