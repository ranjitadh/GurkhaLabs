"use client"
import React, { useRef, useState, useEffect } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { VantaNetProps } from '@/types';


const VantaNetBackground: React.FC<VantaNetProps> = ({ children, options = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);

  useEffect(() => {
    if (!vantaEffect && containerRef.current) {
      setVantaEffect(
        NET({
          el: containerRef.current,
          THREE,
          backgroundAlpha: options.backgroundAlpha ?? 1,
          backgroundColor: options.backgroundColor ?? 0,
          color: options.color ?? 0x3498db,
          mouseControls: options.mouseControls ?? false,
          touchControls: options.touchControls ?? false,
          gyroControls: options.gyroControls ?? false,
          points: options.points ?? 8,
          spacing: options.spacing ?? 18,
          scale: options.scale ?? 1,
          scaleMobile: options.scaleMobile ?? 1,
          maxDistance: options.maxDistance ?? 20,
          minHeight: options.minHeight ?? 200,
          minWidth: options.minWidth ?? 200,
          showDots: options.showDots ?? true,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, options]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
       

      {children}
     
    </div>
  );
};

export default VantaNetBackground;
