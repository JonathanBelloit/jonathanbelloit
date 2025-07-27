"use client";

import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  Box,
  Button,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import { apps } from "./portfolioItems";
import MobileCard from './MobileCard'

const AppSectionMobile = () => {
  const [selected, setSelected] = useState(apps[0]);
  const [expandedSection, setExpandedSection] = useState('problem');
  const handleAfterChange = ( previousSlide, { currentSlide }) => {
    setSelected(apps[currentSlide]);
    setExpandedSection('problem');
  };
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
    <Box sx={{ }}>
      <Typography textAlign={"center"} variant="h3" fontFamily={"Antihero"} sx={{ letterSpacing: ".6rem", color: "black", mb: 5 }}>
        Featured Projects
      </Typography>
      <Paper elevation={7} sx={{ mx: 2, p: 2, pb: 9, minHeight: '60vh', backgroundColor: selected.color.theme2, color: selected.color.theme1 }}>
        <Typography variant="h5" textAlign={"center"} sx={{ mb: 1 }}>{selected.title}</Typography>
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" sx={{ lineHeight: 1, mb: 1}}>Problem: </Typography>
          { expandedSection !== 'problem' && <Button onClick={() => setExpandedSection('problem')}>Click to Read</Button>}
        </Stack>
        { expandedSection === 'problem' && <Typography variant="h6" sx={{ lineHeight: 1, mb: 1}}>{selected.details.problem}</Typography> }
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" sx={{ lineHeight: 1, mb: 1}}>Solution: </Typography>
          { expandedSection !== 'solution' && <Button onClick={() => setExpandedSection('solution')}>Click to Read</Button>}
        </Stack>
        { expandedSection === 'solution' && <Typography variant="h6" sx={{ lineHeight: 1, mb: 1}}>{selected.details.solution}</Typography> }
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" sx={{ lineHeight: 1, mb: 1}}>Technical Details: </Typography>
          { expandedSection !== 'technicalDetails' && <Button onClick={() => setExpandedSection('technicalDetails')}>Click to Read</Button>}
        </Stack>
        { expandedSection === 'technicalDetails' && <Typography variant="h6" sx={{ lineHeight: 1}}>Technical Details: {selected.details.technicalDetails}</Typography> }
      </Paper>
      <Box sx={{ mt: -2}}>
        <Carousel
          responsive={responsive}
          swipeable={true}  
          afterChange={handleAfterChange}
        >
          {apps.map((app, index) => (
            <MobileCard
              app={app}
              key={index}
              handleDetailClick={() => setSelected(app)}
            />
          ))}
        </Carousel>
      </Box>

    </Box>
  )
}

export default AppSectionMobile