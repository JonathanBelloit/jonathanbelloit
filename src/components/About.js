"use client";

import React from "react";
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const About = ({ view }) => {
  const iconStyle = {
    width: view === "mobile" ? "40px" : "65px",
    height: view === "mobile" ? "40px" : "65px",
    margin: view === "mobile" ? "3px" : "5px",
  };

  const icons = [
    { src: "/Nodejs_logo.svg", style: iconStyle, duration: 1 },
    { src: "/js_icon.svg", style: iconStyle, duration: 1.2 },
    { src: "/html_icon.svg", style: iconStyle, duration: 1.4 },
    { src: "/css_icon.svg", style: iconStyle, duration: 1.6 },
    { src: "/react_icon.svg", style: iconStyle, duration: 1.8 },
    { src: "/redux_icon.svg", style: iconStyle, duration: 2 },
    { src: "/material-ui_icon.svg", style: iconStyle, duration: 2.2 },
    { src: "/python_logo.svg", style: iconStyle, duration: 2.4 },
    { src: "/git_icon.svg", style: iconStyle, duration: 2.6 },
    { src: "/mongodb_icon.svg", style: iconStyle, duration: 2.8 },
    { src: "/firebase_icon.svg", style: iconStyle, duration: 3 },
    {
      src: "/framer-motion.svg",
      style: { ...iconStyle, height: "45px" },
      duration: 3.2,
    },
    { src: "/sas_icon.svg", style: iconStyle, duration: 3.4 },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center', backgroundColor: 'black', px: 2 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
        sx={{
          backgroundColor: "rgba(250,250,250)",
          borderRadius: 15,
          width: "100%",
          mt: 5,
          py: 1,
          px: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {icons.map((icon, index) => (
          <motion.img
            key={index}
            src={icon.src}
            style={icon.style}
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: icon.duration,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        ))}
      </Box>
      <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5, duration: 1 }} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ExpandMoreRoundedIcon sx={{ color: 'white', textAlign: 'center', fontSize: '7rem' }}/>
      </Box>
    </Box>
  );
};

export default About;
