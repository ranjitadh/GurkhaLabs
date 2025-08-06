declare module "vanta/dist/vanta.net.min" {
  import * as THREE from "three";
  interface NetOptions {
    el: HTMLElement | string;
    THREE?: typeof THREE;
    backgroundAlpha?: number;
    backgroundColor?: number;
    color?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    points?: number;
    spacing?: number;
    scale?: number;
    scaleMobile?: number;
    maxDistance?: number;
    minHeight?: number;
    minWidth?: number;
    showDots?: boolean;
    [key: string]: unknown;
  }
  interface VantaEffect {
    setOptions(options: Partial<NetOptions>): void;
    resize(): void;
    destroy(): void;
  }
  export default function NET(options: NetOptions): VantaEffect;
}
