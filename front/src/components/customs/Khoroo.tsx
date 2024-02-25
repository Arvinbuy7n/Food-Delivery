import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type CustomSelectProps = {
  label: string;
  startIcon: React.ReactNode;
};

export const Khoroo = (props: CustomSelectProps) => {
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
        <MenuItem value={10}>1-р хороо</MenuItem>
        <MenuItem value={20}>2-р хороо</MenuItem>
        <MenuItem value={30}>3-р хороо</MenuItem>
        <MenuItem value={40}>4-р хороо</MenuItem>
        <MenuItem value={50}>5-р хороо</MenuItem>
      </Select>
      {/* <InputAdornment position="start">{startIcon}</InputAdornment> */}
    </FormControl>
  );
};
