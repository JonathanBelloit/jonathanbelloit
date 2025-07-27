"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState, createContext} from "react";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState("");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.between("md"));
  // use effect that deterines what device the user is on and puts it into a single string
  useEffect(() => {
    if (mobile) {
      setDevice("mobile");
    } else if (desktop) {
      setDevice("desktop");
    } else if (tablet) {
      setDevice("tablet");
    }
  }, [mobile, desktop, tablet]);

  return (
    <DeviceContext.Provider value={{ device }}>
      {children}
    </DeviceContext.Provider>
  )
}

