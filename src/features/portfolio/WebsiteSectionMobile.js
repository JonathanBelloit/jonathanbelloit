"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { websites } from "./portfolioItems";

const WebsiteSectionMobile = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h3"
        fontFamily={"Antihero"}
        sx={{ letterSpacing: ".6rem", color: "black", my: 5 }}
      >
        Featured Websites
      </Typography>
      <Carousel responsive={responsive} swipeable={true} infinite={true}>
        {websites.map((website, index) => (
          <Card
            sx={{
              mx: 4,
              mb: 2,
              border: "1px solid black",
              boxShadow: "10px 10px 10px #ababab",
            }}
          >
            <CardHeader title={website.title} sx={{ textAlign: "center", color: website.colors.mainTheme }} />
            <CardMedia
              component="img"
              height="140"
              image={website.image}
              alt={website.title}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="body1" color="text.secondary">
                {website.description}
              </Typography>
              <br />
              <Button variant="contained" href={website.url} target="_blank" rel="noreferrer" sx={{ px: 6, mb: 2, backgroundColor: website.colors.mainTheme }}>
                View Website
              </Button>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default WebsiteSectionMobile;
