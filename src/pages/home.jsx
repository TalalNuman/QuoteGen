import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Select,
  NativeSelect,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setUsername,
  setDescription,
  setImgUrl,
  setNameColor,
  setContentColor,
  setInnerColor,
  setOuterColor,
  setSocial,
} from "../redux/features/generatorSlice";
import { InputField } from "../components/InputField";
import Card from "../components/Card";
import { data } from "../config/contants";

const Home = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [logo, setLogo] = useState(0);

  return (
    <Grid container spacing={2} style={{ alignItems: "center" }}>
      <Grid item xs={12} md={6}>
        <Grid xs={12} md={6}>
          <InputField
            label="Name"
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Username"
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <InputField
            label="Description"
            multiline
            rows={3}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">Choose the Image</Typography>
          <Box margin={3}>
            <input
              type="file"
              onChange={(event) => {
                let file = event.target.files[0];
                dispatch(setImgUrl(URL.createObjectURL(file)));
              }}
            />
          </Box>
        </Grid>
        <Typography variant="h6">Text Colors</Typography>
        <Grid container margin={1}>
          <Box padding={2}>
            <Typography variant="subtitle2">Name</Typography>
            <input
              type="color"
              onChange={(e) => dispatch(setNameColor(e.target.value))}
            />
          </Box>
          <Box padding={2}>
            <Typography variant="subtitle2">Content</Typography>

            <input
              type="color"
              onChange={(e) => dispatch(setContentColor(e.target.value))}
            />
          </Box>
          <Box padding={2}>
            <Typography variant="subtitle2">Inner Background</Typography>
            <input
              type="color"
              onChange={(e) => dispatch(setInnerColor(e.target.value))}
            />
          </Box>
          <Box padding={2}>
            <Typography variant="subtitle2">Outer Background</Typography>
            <input
              type="color"
              onChange={(e) => dispatch(setOuterColor(e.target.value))}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={5}>
          <Typography variant="h6">Social</Typography>
          <Box margin={2}>
            <Select
              fullWidth
              native
              value={useSelector((state) => state.generator.social)}
              onChange={(e) => {
                dispatch(setSocial(e.target.value));
              }}
            >
              {data.map((item) => (
                <option value={item.value}>{item.title}</option>
              ))}
            </Select>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} alignItems={"center"}>
        <Card />
        {/* <Box backgroundColor="red"> */}
          <Button
            disabled={useSelector((state) => state.generator.name) === ""}
            style={{ display: "block", margin: "auto" }}
            variant="contained"
            color="primary"
            onClick={() => {
              console.log("downloaded");
            }}
          >
            Download
          </Button>
        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

export default Home;
