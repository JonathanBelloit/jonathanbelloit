"use client";

import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { apps } from "./portfolioItems";
import AppSection from "./AppSection";
import AppSectionMobile from "./AppSectionMobile";
import WebsiteSection from "./WebsiteSection";
import WebsiteSectionMobile from "./WebsiteSectionMobile";

const PortfolioSection = ({ view }) => {
  return (
    <Box sx={{ mt: 10 }}>
      {view !== "mobile" && <AppSection />}
      {view === "mobile" && <AppSectionMobile />}
      {view !== "mobile" && <WebsiteSection />}
      {view === "mobile" && <WebsiteSectionMobile />}
    </Box>
  );
};

export default PortfolioSection;
