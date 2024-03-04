import { Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type HistoryProps = {
  deliveryStatus?: string;
  createdAt?: Date;
  _id?: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const History = (props: HistoryProps) => {
  const { deliveryStatus, createdAt, _id, setSelected } = props;

  return (
    <Stack
      direction={"row"}
      gap={2}
      borderBottom={1}
      pb={2}
      borderColor={"#0468C8"}
    >
      <Stack
        width={36}
        height={36}
        border={1}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"50%"}
        borderColor={"#0468C8"}
        mt={0.8}
      >
        <Stack
          width={18}
          height={18}
          bgcolor={"#0468C8"}
          borderRadius={"50%"}
        ></Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"} width={"85%"}>
        <Stack>
          <Typography fontSize={16} fontWeight={400}>
            Захиалга #{_id?.slice(-5)}
          </Typography>

          <Typography color={"#0468C8"}>{deliveryStatus}</Typography>
        </Stack>
        <Typography mt={1.8}>{createdAt?.toString().slice(0, 10)}</Typography>
      </Stack>
    </Stack>
  );
};
