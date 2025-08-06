import { ReactNode } from 'react';

export interface VantaNetProps {
  options?: Partial<{
    backgroundAlpha: number;
    backgroundColor: number;
    color: number;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    points: number;
    spacing: number;
    scale: number;
    scaleMobile: number;
    maxDistance: number;
    minHeight: number;
    minWidth: number;
    showDots: boolean;
  }>;
  children?: ReactNode;
}
