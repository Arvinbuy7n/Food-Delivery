import { Stack, Typography } from "@mui/material";

type DetailProps = {
  foodName: string;
};

export const Detail = (props: DetailProps) => {
  const { foodName } = props;

  return (
    <Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography fontSize={20} fontWeight={400} color={"yellow"}>
          {foodName}
        </Typography>
        {/* <Typography fontSize={16} fontWeight={400}>
          ({quantity})
        </Typography> */}
      </Stack>
    </Stack>
  );
};
