"use client";

import React from "react";
import { headerInfo } from "./headerInfo";
import { Box, Stack, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import About from "../About";

const MobileMainHeader = () => {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible1: { opacity: 1, transition: { delay: 0.3, duration: 1.5 } },
    visible2: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
    visible3: { opacity: 1, transition: { delay: 0.7, duration: 1.5 } },
    visible4: { opacity: 1, transition: { delay: 0.9, duration: 1.5 } },
    visible5: { opacity: 1, transition: { delay: 1.1, duration: 1.5 } },
    visible6: { opacity: 1, transition: { delay: 1.3, duration: 2.5 } },
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        height: '60vh',
        width: "100%",
        // height: "50%",
        overflow: "hidden",
      }}
    >
      {/* Separate Box for the background image */}
      <Box
        sx={{
          position: "absolute",
          
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(/hero_img.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: 2,
        }}
      />
      <Stack
        direction="column"
        sx={{
          position: "absolute",
          display: "flex",
          width: "100vw",
          alignItems: "flex-end",
          pr: 2,
          pt: 1,
        }}
      >
        <Typography
          component={motion.div}
          variant="h6"
          textAlign="end"
          fontFamily="Antihero"
          variants={headerVariants}
          initial={"hidden"}
          animate={"visible1"}
          sx={{
            letterSpacing: ".5rem",
            color: "white",
            position: "relative",
            zIndex: 2,
          }}
        >
          {headerInfo.firstName}
        </Typography>
        <Typography
          component={motion.div}
          variant="h5"
          textAlign="end"
          fontFamily="Antihero"
          variants={headerVariants}
          initial={"hidden"}
          animate={"visible2"}
          sx={{
            letterSpacing: ".8rem",
            color: "white",
            position: "relative",
            zIndex: 2,
          }}
        >
          {headerInfo.lastName}
        </Typography>
        <motion.div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end", zIndex: 2 }}
          variants={headerVariants}
          initial={"hidden"}
          animate={"visible3"}
        >
          <Divider
            color="white"
            sx={{
              mt: 0.5,
              height: "3px",
              width: "35%",
              alignSelf: "flex-end",
              zIndex: 2,
            }}
          />
        </motion.div>
        <Typography  component={motion.div} variants={headerVariants} initial={"hidden"} animate={"visible4"} color="white" sx={{ mt: 1, zIndex: 2 }}>
          {headerInfo.title}
        </Typography>
        <motion.div
          style={{ display: "flex", width: "100%", justifyContent: "flex-end", zIndex: 2 }}
          variants={headerVariants}
          initial={"hidden"}
          animate={"visible5"}
        >
          <Divider
            color="white"
            sx={{
              mt: 0.5,
              height: "3px",
              width: "55%",
              alignSelf: "flex-end",
              zIndex: 2,
            }}
          />
        </motion.div>
        <Box component={motion.div} initial={"hidden"} variants={headerVariants} animate={"visible6"}sx={{ color: "white", zIndex: 2, textAlign: "end", mt: 1 }}>
          <p>{headerInfo.description_mobile}</p>
        </Box>
        <Box sx={{ color: "white", zIndex: 2, textAlign: "end", mt: 1 }}>
          <p>{headerInfo.tagline}</p>
        </Box>
      </Stack>
    </Box>
  );
};

export default MobileMainHeader;
