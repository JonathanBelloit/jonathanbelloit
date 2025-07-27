"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { DeviceProvider } from '../context/DeviceContext';

const theme = createTheme({
  // You can customize your theme here
  palette: {
    mode: 'light',
  },
});

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DeviceProvider>
        {children}
      </DeviceProvider>
    </ThemeProvider>
  );
}
