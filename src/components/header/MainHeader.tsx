"use client";

import React from "react";
import { headerInfo } from "./headerInfo";
import "@fontsource/fira-sans/200.css";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { headerVariants } from "../../constants/headerVariants";
import HeaderDivider from "./headerComponents/HeaderDivider";

interface MainHeaderProps {
  view?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ view }) => {
  return (
    <Grid>
      <Box sx={{ width: "100%", height: "650px" }}>
        <div className="overlay"></div>
        <video
          src="/hd1017.mp4"
          autoPlay
          loop
          muted
          title="wave ripple in background"
        />
        <img
          src="/hero_img.png"
          alt="barely visible person sitting at desk with 3 screens"
          className="hero_img"
        />
        <div className="header-content">
          <Typography
            component={motion.div}
            variant={"h2"}
            fontFamily={"Antihero"}
            variants={headerVariants}
            initial={"hidden"}
            animate={"visible1"}
            sx={{ mr: 5}}
          >
            {headerInfo.name}
          </Typography>
          <HeaderDivider animate={"visible2"} width={"30%"}/>
          <Typography
            component={motion.div}
            variant="h4"
            variants={headerVariants}
            initial={"hidden"}
            animate={"visible3"}
            sx={{ mr: 2}}
          >
            {headerInfo.title}
          </Typography>
          <HeaderDivider animate={"visible4"} width={"60%"}/>
          <motion.div
            className="headerParagraph"
            variants={headerVariants}
            initial={"hidden"}
            animate={"visible5"}
          >
            <p>
              {headerInfo.description}
            </p>
          </motion.div>
          <Box
            component={motion.div}
            sx={{ mt: 2 }}
            className="headerParagraph"
            variants={headerVariants}
            initial={"hidden"}
            animate={"visible6"}
          >
            <p>{headerInfo.tagline}</p>
          </Box>
        </div>
      </Box>
    </Grid>
  );
};

export default MainHeader;
