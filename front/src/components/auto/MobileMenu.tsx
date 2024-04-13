import { Close } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Mobile = {
  onClose: () => void;
};

export const MobileMenu = (props: Mobile) => {
  const { onClose } = props;
  const router = useRouter();

  return (
    <Stack
      width={"250px"}
      border={1}
      borderRadius={2}
      textAlign={"center"}
      py={1}
      gap={1}
      position={"fixed"}
      right={0}
      top={63}
      bgcolor={"#FFF"}
      onClick={() => {
        onClose();
      }}
      zIndex={10}
    >
      <Stack alignItems={"end"} borderBottom={1} px={2} py={1}>
        <Close />
      </Stack>
      <Typography
        fontSize={18}
        fontWeight={500}
        borderBottom={1}
        onClick={() => {
          router.push("/");
        }}
      >
        Нүүр
      </Typography>

      <Typography
        fontSize={18}
        fontWeight={500}
        borderBottom={1}
        onClick={() => {
          router.push("/foodmenu");
        }}
      >
        Хоолны цэс
      </Typography>

      <Typography fontSize={18} fontWeight={500}>
        Хүргэлтийн бүс
      </Typography>
    </Stack>
  );
};
