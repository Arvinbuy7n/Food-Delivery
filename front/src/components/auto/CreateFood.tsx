import {
  Button,
  Card,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Upload } from "../upload/page";
import { useFormik } from "formik";
import * as yup from "yup";
import { useFood } from "../providers/FoodProvider";
import { useState } from "react";
import { CustomInput } from "..";

type CreateFoodProps = {
  onClose: () => void;
};

const validationSchema = yup.object({
  foodName: yup.string(),
  foodCategory: yup.string(),
  price: yup.number(),
  discount: yup.number(),
});

export const CreateFood = (props: CreateFoodProps) => {
  const { onClose } = props;
  const { addFood, categoryList } = useFood();
  const [imageUrl, setImageUrl] = useState("");

  const formik = useFormik({
    initialValues: {
      foodName: "",
      foodCategory: "",
      ingredient: "",
      price: 0,
      discount: "",
      foodImage: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await addFood(
        values.foodName,
        values.foodCategory,
        values.ingredient,
        values.price,
        values.discount,
        imageUrl
      );
      onClose();
    },
  });

  return (
    <Stack
      py={8}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card sx={{ width: 560, borderRadius: 4 }}>
        <Stack>
          <Stack direction={"row"} gap={18} px={4} py={3}>
            <Image
              src={"/close.png"}
              alt=""
              width={32}
              height={32}
              onClick={onClose}
            ></Image>
            <Typography fontSize={24} fontWeight={700}>
              Create food
            </Typography>
          </Stack>

          <Stack
            gap={3}
            borderTop={1}
            borderBottom={1}
            borderColor={"#E0E0E0"}
            px={4}
            py={3}
          >
            <Stack>
              <Typography fontWeight={500}>Хоолны нэр</Typography>

              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
                type="text"
                name="foodName"
                value={formik.values.foodName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.foodName && Boolean(formik.errors.foodName)
                }
                helperText={formik.touched.foodName && formik.errors.foodName}
              ></TextField>
            </Stack>

            <Stack>
              <Typography>Хоолны ангилал</Typography>

              <CustomInput
                select
                SelectProps={{ native: true }}
                name="foodCategory"
                value={formik.values.foodCategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option disabled selected value={""}>
                  Choose category
                </option>
                {categoryList.map((item, index) => {
                  return (
                    <option key={index} value={item.category}>
                      {item.category}
                    </option>
                  );
                })}
              </CustomInput>
            </Stack>

            <Stack>
              <Typography fontWeight={500}>Хоолны орц</Typography>

              <TextField
                placeholder="placeholder"
                type="text"
                sx={{ bgcolor: "#F4F4F4" }}
                name="ingredient"
                value={formik.values.ingredient}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.ingredient && Boolean(formik.errors.ingredient)
                }
                helperText={
                  formik.touched.ingredient && formik.errors.ingredient
                }
              ></TextField>
            </Stack>

            <Stack>
              <Typography fontWeight={500}>Хоолны үнэ</Typography>

              <TextField
                placeholder="placeholder"
                type="text"
                sx={{ bgcolor: "#F4F4F4" }}
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              ></TextField>
            </Stack>

            <Stack>
              <Stack direction={"row"}>
                <Switch defaultChecked />
                <Typography mt={1}>Хямдралтай эсэх</Typography>
              </Stack>
              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
                type="text"
                name="discount"
                value={formik.values.discount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.discount && Boolean(formik.errors.discount)
                }
                helperText={formik.touched.discount && formik.errors.discount}
              ></TextField>
            </Stack>

            <Stack>
              <Typography fontWeight={500}>Хоолны зураг</Typography>

              <Upload imageUrl={imageUrl} setImageUrl={setImageUrl} />
            </Stack>
          </Stack>

          <Stack direction={"row"} gap={2} justifyContent={"end"} px={4} py={3}>
            <Typography fontSize={16} fontWeight={700} mt={0.7}>
              Clear
            </Typography>

            <Button
              sx={{ bgcolor: "#393939", color: "#FFF" }}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
