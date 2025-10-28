"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState, createContext, ReactNode } from "react";

interface DeviceContextType {
  device: string;
}

interface DeviceProviderProps {
  children: ReactNode;
}

export const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [device, setDevice] = useState<string>("");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  
  // use effect that determines what device the user is on and puts it into a single string
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
