"use client";

import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { AddressForm } from "./AddressForm";
import { Check } from "@mui/icons-material";
import { useCard } from "../providers/CartProvider";
import { MyOrderItem } from "../customs/MyOrderItem";
import { useRouter } from "next/navigation";

export const Step = () => {
  const [district, setDistrict] = useState("");
  const [khoroo, setKhoroo] = useState("");
  const [apart, setApart] = useState("");
  const [addition, setAddition] = useState("");
  const [phone, setPhone] = useState("");

  const { postOrder, addBasket } = useCard();

  const isValid =
    Boolean(district) &&
    Boolean(khoroo) &&
    Boolean(apart) &&
    Boolean(addition) &&
    Boolean(phone);

  const sumBasket = addBasket.reduce((sum, currentValue) => {
    return sum + currentValue.food.price * currentValue.quantity;
  }, 0);

  return (
    <Container sx={{ pt: 7 }}>
      <Stack direction={"row"} py={8} justifyContent={"center"} gap={10}>
        <Stack direction={"row"} justifyContent={"center"} gap={16}>
          <Stack gap={6}>
            <Stack direction={"row"} gap={2} ml={3}>
              <Stack
                width={48}
                height={48}
                border={1}
                borderRadius={"50%"}
                borderColor={isValid ? "primary.main" : "#0468C8"}
                alignItems={"center"}
                justifyContent={"center"}
                bgcolor={isValid ? "primary.main" : "common.white"}
                mt={2}
              >
                <Stack
                  width={24}
                  height={24}
                  bgcolor={isValid ? "primary.main" : "#0468C8"}
                  borderRadius={"50%"}
                  color={"common.white"}
                >
                  {isValid && <Check color="inherit" />}
                </Stack>
              </Stack>

              <Stack>
                <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
                  Алхам 1
                </Typography>
                <Typography fontSize={20} fontWeight={400}>
                  Хаягийн мэдээлэл оруулах
                </Typography>
                <Typography fontSize={16} fontWeight={400} color={"#0468C8"}>
                  Хүлээгдэж байна
                </Typography>
              </Stack>
            </Stack>

            <AddressForm
              districts={district}
              setDistricts={setDistrict}
              khoroos={khoroo}
              setKhoroos={setKhoroo}
              aparts={apart}
              setAparts={setApart}
              addition={addition}
              setAddition={setAddition}
              phone={phone}
              setPhone={setPhone}
            />
          </Stack>
        </Stack>

        <Stack gap={6}>
          <Stack direction={"row"} gap={2}>
            <Stack
              width={48}
              height={48}
              border={1}
              borderRadius={"50%"}
              borderColor={isValid ? "primary.main" : "#0468C8"}
              alignItems={"center"}
              justifyContent={"center"}
              bgcolor={isValid ? "primary.main" : "common.white"}
              mt={2}
            >
              <Stack
                width={24}
                height={24}
                bgcolor={isValid ? "primary.main" : "#0468C8"}
                borderRadius={"50%"}
                color={"common.white"}
              >
                {isValid && <Check color="inherit" />}
              </Stack>
            </Stack>

            <Stack>
              <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
                Алхам 2
              </Typography>
              <Typography fontSize={20} fontWeight={400}>
                Захиалга баталгаажуулах
              </Typography>
              <Typography fontSize={16} fontWeight={400} color={"#0468C8"}>
                Хүлээгдэж байна
              </Typography>
            </Stack>
          </Stack>

          <Card
            sx={{
              width: 520,
              borderRadius: 4,
            }}
          >
            <Stack py={2} px={1} height={580}>
              <Stack overflow={"scroll"}>
                {addBasket.map((item, _index) => {
                  return (
                    <MyOrderItem
                      key={_index}
                      image={item.food.foodImage}
                      name={item.food.foodName}
                      ingredient={item.food.ingredient}
                      quantity={item.quantity}
                      price={item.food.price}
                    />
                  );
                })}
              </Stack>
            </Stack>

            <Card>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                px={2}
                py={4}
              >
                <Stack width={"50%"}>
                  <Typography fontSize={18} fontWeight={400}>
                    Нийт төлөх дүн
                  </Typography>
                  <Typography fontSize={18} fontWeight={700}>
                    {sumBasket}
                  </Typography>
                </Stack>

                <Button
                  sx={{
                    width: "50%",
                    textAlign: "center",
                    bgcolor: "#18BA51",
                    color: "#FFF",
                  }}
                  onClick={() => {
                    postOrder(
                      {
                        district,
                        khoroo,
                        apart,
                        addition,
                        phone,
                      },
                      addBasket
                    );
                  }}
                  variant="contained"
                  disabled={!Boolean(sumBasket) || !isValid}
                >
                  Захиалах
                </Button>
              </Stack>
            </Card>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};
