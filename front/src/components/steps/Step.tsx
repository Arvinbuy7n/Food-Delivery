import { Container, Stack } from "@mui/material";
import { AlhamNeg } from "./AlhamNeg";
import { AlhamTwo } from "./AlhamTwo";

export const Step = () => {
  return (
    <Container>
      <Stack direction={"row"} justifyContent={"center"} gap={16}>
        <AlhamNeg />
        <AlhamTwo />
      </Stack>
    </Container>
  );
};
