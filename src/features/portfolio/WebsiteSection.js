"use client";

import React from 'react'
import { websites } from './portfolioItems'
import { Box, Typography, Card, CardMedia, CardContent, CardHeader, Button } from '@mui/material'
import { motion } from 'framer-motion'

const WebsiteSection = () => {
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
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5}}>
      <Typography
          variant="h4"
          textAlign={"center"}
          fontFamily={"Antihero"}
          sx={{ letterSpacing: "1.5rem", color: "black", mb: 10 }}
        >
          Featured Websites
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', width: '80%', gap: 5}}>
        {websites.map((website, index) => (
          <Card
            component={motion.div}
            variants={variantCard}
            whileHover="hover"
            sx={{ maxWidth: 345 }}
            key={index}
          >
            <CardHeader title={website.title} />
            <CardMedia
              component="img"
              height="140"
              image={website.image}
              alt={website.title}
            />
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                {website.description}
              </Typography>
            </CardContent>
            <Button href={website.url} target="_blank" rel="noreferrer">
              View Site
            </Button>
          </Card>
        ))}
        </Box>
    </Box>
  )
}

export default WebsiteSection