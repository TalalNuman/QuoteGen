import React, { useState } from "react";
import { Typography } from "@mui/material";
import Home from "../pages/home";
import {appName} from '../config/contants'

const UserLayout = () => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        paddingTop={1}
        style={{ textAlign: "center" }}
      >
        {appName}
      </Typography>
      <Home />
    </>
  );
};

export default UserLayout;
