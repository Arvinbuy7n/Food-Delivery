// import { FormControl, InputLabel } from "@mui/material";
// import SelectInput from "@mui/material/Select/SelectInput";

// export const Select = () => {
//   return <FormControl>
//     <Select
//   </FormControl>;
// };

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputAdornment } from "@mui/material";

type CustomSelectProps = {
  label: string;
  startIcon: React.ReactNode;
};

export const Address = (props: CustomSelectProps) => {
  const { label, startIcon } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: 384 }}>
      <InputLabel sx={{ ml: 2 }}>{label}</InputLabel>
      <Select value={age} label="Age" onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* <InputAdornment position="start">{startIcon}</InputAdornment> */}
    </FormControl>
  );
};
