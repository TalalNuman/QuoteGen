import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/card.css";

import { data } from "../config/contants";

export default function Card() {
  const name = useSelector((state) => state.generator.name);
  const username = useSelector((state) => state.generator.username);
  const description = useSelector((state) => state.generator.description);
  const image = useSelector((state) => state.generator.imgUrl);
  const nameColor = useSelector((state) => state.generator.nameColor);
  const contentColor = useSelector((state) => state.generator.contentColor);
  const social = useSelector((state) => state.generator.social);
  const innerColor = useSelector((state) => state.generator.innerColor);
  const outerColor = useSelector((state) => state.generator.outerColor);
  console.log(name);

  return (
    <Box
      className="outer-card"
      style={{
        backgroundColor: outerColor,
      }}
    >
      <Box
        className="inner-card"
        style={{
          backgroundColor: innerColor,
        }}
      >
        <Box className="personal">
          <Avatar variant="plain" src={image} />
          <Box marginLeft={"0.5rem"}>
            <Typography color={nameColor} variant="body1" fontWeight={700}>
              {name?.length > 0 ? name : "Superman"}
            </Typography>
            <Typography color={"gray"} variant="caption" fontWeight={700} >
              @{username?.length > 0 ? username : "superman69"}
            </Typography>
          </Box>
          <Box marginLeft={"auto"}>
            <img className="logo" src={data[social].img} />
          </Box>
        </Box>
        <Box display={"flex"}>
          <Typography
            color={contentColor}
            variant="h6"
            fontWeight={700}
            width={"90%"}
          >
            ＂
            {description?.length > 0
              ? description
              : "Fire up the world with your words"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
