import { Delete, ModeEditOutlineOutlined } from "@mui/icons-material";
import { Card, Stack, Typography } from "@mui/material";

export const MoreVertEdit = () => {
  return (
    <Stack py={20} zIndex={10}>
      <Card sx={{ width: 200, p: 1 }}>
        <Stack direction={"row"} p={1} gap={1}>
          <ModeEditOutlineOutlined sx={{ width: 24, height: 24 }} />
          <Typography fontSize={18} fontWeight={500}>
            Edit name
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          p={1}
          gap={1}
          sx={{
            "&:hover": {
              color: "#DF1F29",
            },
          }}
        >
          <Delete />
          <Typography fontSize={18} fontWeight={500}>
            Delete Category
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
};
