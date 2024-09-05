"use client";
import { ReactLenis, useLenis } from "lenis/react";

export default function providers({ children }: any) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
