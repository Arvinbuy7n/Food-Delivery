import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Card,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import Image from "next/image";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const data = [
  "Order name",
  "Buyer info",
  "Payment",
  "Address",
  "Delivery state",
];
export default function BasicTable() {
  return (
    <Stack bgcolor={"#f2f2f2"}>
      <Container sx={{ py: 10, width: "100%" }}>
        <Card sx={{ borderRadius: 2 }}>
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            px={3}
            py={2.3}
          >
            <Typography fontWeight={"bold"} fontSize={20} color={"#121316"}>
              Admin Dashboard
            </Typography>
            <Stack position={"relative"}>
              <TextField
                sx={{ width: 370, bgcolor: "#F7F7F8" }}
                placeholder="Search"
                size="small"
              />

              <IconButton sx={{ position: "absolute", right: 5, top: 1 }}>
                <Search />
              </IconButton>
            </Stack>
          </Stack>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ bgcolor: "#F7F7F8" }}>
                <TableRow
                  sx={{
                    border: 1,
                    borderColor: "#D6D8DB",
                  }}
                >
                  {data.map((item, index) => {
                    return (
                      <TableCell
                        key={index}
                        sx={{ fontSize: 14, color: "#3F4145", fontWeight: 600 }}
                      >
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Stack direction={"row"} gap={1}>
                      <Image src={"/code.webp"} alt="" width={40} height={40} />
                      <Stack>
                        <Typography
                          fontSize={14}
                          fontWeight={600}
                          color={"#121316"}
                        >
                          #12345
                        </Typography>
                        <Typography
                          fontSize={14}
                          fontWeight={400}
                          color={"#3F4145"}
                        >
                          Name
                        </Typography>
                      </Stack>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack>
                      <Typography
                        fontSize={14}
                        fontWeight={600}
                        color={"#121316"}
                      >
                        88705548
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={"#3F4145"}
                      >
                        Chekist
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack>
                      <Typography
                        fontSize={14}
                        fontWeight={700}
                        color={"#121316"}
                      >
                        24700
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={400}
                        color={"#3F4145"}
                      >
                        2024/09/17 17:40
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography
                      fontWeight={400}
                      fontSize={14}
                      color={"#121316"}
                    >
                      BZD, 25r khoroo, 97/3, 2floor, 3
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>Progress</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </Stack>
  );
}
