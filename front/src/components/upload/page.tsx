"use client";

import { Button, Container, Stack, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type ImageUrlProps = {
  imageUrl?: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
};

export const Upload = (props: ImageUrlProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { imageUrl, setImageUrl } = props;

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/df9skkucm/upload?upload_preset=pmvvak8o",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };
  return (
    <Stack>
      <Container sx={{ border: 1, borderColor: "#D6D7DC" }}>
        <Stack py={2} alignItems="center">
          <Stack gap={3} width={400}>
            <TextField
              type="file"
              onChange={handleImageChange}
              variant="outlined"
            />
            <Button onClick={handleImageUpload} variant="contained">
              Upload
            </Button>
            {imageUrl && (
              <Stack position="relative" width={"100px"}>
                <img src={imageUrl} alt="Uploaded" />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
