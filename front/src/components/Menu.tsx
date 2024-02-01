import { Button, Card } from "@mui/material";

type MenuProps = {
  label?: String;
};

export const MenuItem = (props: MenuProps) => {
  const { label } = props;

  return (
    <Card
      sx={{
        justifyContent: "center",
        display: "flex",
        borderRadius: "16px",
      }}
    >
      <Button
        sx={{
          fontSize: 18,
          fontFamily: "sans-serif",
          color: "#000",
          "&:hover": {
            backgroundColor: "#18BA51",
            color: "#FFF",
          },
          width: 282,
        }}
      >
        {label}
      </Button>
    </Card>
  );
};
