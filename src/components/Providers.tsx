"use client";

import { DeviceProvider } from '../context/DeviceContext';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  // Temporarily simplify providers to avoid SSR issues during build.
  return <DeviceProvider>{children}</DeviceProvider>;
}
