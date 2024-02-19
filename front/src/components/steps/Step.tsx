import { Stack } from "@mui/material";
import { AlhamNeg } from "./AlhamNeg";
import { AlhamTwo } from "./AlhamTwo";

export const Step = () => {
  return (
    <Stack direction={"row"} px={48} justifyContent={"space-between"}>
      <AlhamNeg />
      <AlhamTwo />
    </Stack>
  );
};
