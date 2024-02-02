import { Box, Stack, Typography } from "@mui/material";
import { CustomRadio } from "../CustomRadio";

export const StepOne = () => {
  return (
    <Stack>
      <Stack p={2} direction={"row"} alignItems={"center"}>
        <CustomRadio />
        <Stack>
          <Typography color={"#8B8E95"}>Алхам 1</Typography>
          <Typography fontSize={20} fontWeight={400}>
            Хаягийн мэдээлэл оруулах
          </Typography>
          <Typography fontSize={16} color={"secondary"}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Stack>

      <Box p={2} border={1} width={432}>
        <Stack>
          <Typography fontSize={14} fontWeight={400}>
            Хаяг аа оруулна уу
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import { Search } from "@mui/icons-material";
// import { Stack } from "@mui/material";

// const currencies = [
//   {
//     value: "Баянзүрх дүүрэг",
//     label: <Search />,
//   },
//   {
//     value: "Хан-Уул дүүрэг",
//     label: <Search />,
//   },
//   {
//     value: "Баянгол дүүрэг",
//     label: <Search />,
//   },
//   {
//     value: "Сонгинохайрхан дүүрэг",
//     label: <Search />,
//   },
//   {
//     value: "Чингэлтэй дүүрэг",
//     label: <Search />,
//   },
// ];

// export const StepOne = () => {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Stack>
//         <TextField
//           id="outlined-select-currency"
//           select
//           defaultValue="EUR"
//           placeholder="Дүүрэг сонгоно уу"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-currency-native"
//           select
//           defaultValue="EUR"
//           SelectProps={{
//             native: true,
//           }}
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//         <TextField
//           id="filled-select-currency"
//           select
//           defaultValue="EUR"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </Stack>
//     </Box>
//   );
// };
