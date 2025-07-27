import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const AppCard = React.memo(React.forwardRef(({ app, index, selected, handleDetailClick, targetPosition }, ref) => {
  const variantCard = {
    initial: {
      zIndex: 1,
    },
    hover: {
      scale: 1.25,
      zIndex: 10000,
      z: 10000,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      sx={{  width: "400px" }}
      initial={{ x: 0, y: 0, z: 1 }}
      animate={{
        x: selected === index ? targetPosition.x : 0,
        y: selected === index ? targetPosition.y : 0,
      }}
      ref={ref} // Attach the forwarded ref
      onClick={() => handleDetailClick(index)}
    >
      <Card
        component={motion.div}
        variants={variantCard}
        initial="initial"
        whileHover="hover"
        sx={{ width: "400px" }}
        key={index}
      >
        <CardHeader title={app.title} textAlign="center" />
        <CardMedia
          component="img"
          height="140"
          image={app.image}
          alt={app.title}
          sx={{
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {app.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {app.tech}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button href={app.url} target="_blank" rel="noreferrer">
              View Site
            </Button>
            <Button onClick={() => handleDetailClick(index)}>
              <Typography variant="body2">Details</Typography>
            </Button>
            <Button href={app.codeLink} disabled={app.public === false ? true : false } target="_blank" rel="noreferrer">
              {app.public ? "View Code" : "View Demo"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}));

export default AppCard;
