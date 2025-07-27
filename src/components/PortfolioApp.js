"use client";

import MainHeader from './header/MainHeader';
import MobileMainHeader from './header/MobileMainHeader';
import PortfolioSection from '../features/portfolio/PortfolioSection';
import About from './About';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import TestimonialsSection from './TestimonialsSection';
import { useContext, useEffect } from 'react';
import { DeviceContext } from '../context/DeviceContext';
import { Box } from '@mui/material';
import Footer from './Footer';

export default function PortfolioApp() {
  const device = useContext(DeviceContext);
  const deviceType = device.device;

  useEffect(() => {
    document.title = "Jonathan Belloit - Full-Stack Developer | React, Node.js, Data Analytics";
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex', backgroundColor: 'black', overflow: 'hidden'}}>
        {deviceType !== "mobile" && <MainHeader view={deviceType} /> }
        {deviceType === "mobile" && <MobileMainHeader view={deviceType} /> }
      </Box>
      <About view={deviceType}/>
      <SkillsSection />
      <Box>
        <PortfolioSection view={deviceType} />
      </Box>
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
