"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography
} from "@mui/material";
import AppCard from "./AppCard";
import { apps } from "./portfolioItems";
import calculateTargetPosition from "../../utils/calculateTargetPosition";

const AppSection = () => {
  const [selected, setSelected] = useState(null);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const topCardRef = useRef(null);
  const containerRef = useRef(null);
  const appDescriptionRef = useRef(null);
  useEffect(() => {
    if (selected !== null && containerRef.current && topCardRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const topCardRect = topCardRef.current.getBoundingClientRect();

      const calculatedPosition = calculateTargetPosition(
        containerRect,
        topCardRect,
        selected
        );
        setTargetPosition(calculatedPosition);
    }
  }, [selected]);

  const handleDetailClick = (i) => {
    setSelected(i);
    appDescriptionRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };


  return (
    <Grid container spacing={2} sx={{ mb: 5 }} ref={containerRef}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          textAlign={"center"}
          fontFamily={"Antihero"}
          sx={{ letterSpacing: "1.5rem", color: "black", mb: 5 }}
          >
          Featured Projects
        </Typography>
      </Grid>
      <Grid
        item
        lg={4}
        sx={{
          p: 2,
          ml: 5,
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          borderRadius: 10,
        }}
      >
        {apps.map((app, index) => {
          return (
            <AppCard
              key={app.title}
              app={app}
              index={index}
              selected={selected}
              handleDetailClick={handleDetailClick}
              // containerRef={containerRef}
              targetPosition={targetPosition}
              ref={index === 0 ? topCardRef : undefined}
            />
          );
        })}
      </Grid>
      <Grid item lg={7} sx={{ mx: 6, my: 5, p: 15 }} ref={appDescriptionRef}>
        <Paper sx={{ height: "100%" }} elevation={5}>
          {selected!== null ? (
            <Box sx={{ maxWidth: "70%", p: 5 }}>
              <Typography variant="h4" fontFamily={"Designer"}>
                {apps[selected].title}
              </Typography>
              <Typography variant="h5" fontWeight={"bold"} fontFamily={"Designer"} sx={{ mt: 2 }}>
                {">"} Problem:
              </Typography>
              <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"}>
                {apps[selected].details.problem}
              </Typography>
              <Typography variant="h5" fontWeight={"bold"} fontFamily={"Designer"} sx={{ mt: 2 }}>
                {">"} Solution:
              </Typography>
              <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"}>
                {apps[selected].details.solution}
              </Typography>
              <Typography variant="h5" fontWeight={"bold"} fontFamily={"Designer"} sx={{ mt: 2 }}>
                {">"} Technical Details:
              </Typography>
              <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"}>
                {apps[selected].details.technicalDetails}
              </Typography>
            </Box>
          ) : (
            <Typography variant="h4" fontFamily={"Designer"} textAlign={"center"}>
              Select an app to view details
            </Typography>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AppSection;
