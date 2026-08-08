"use client";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";

export default function usePinNavbar({
  baseHeight,
}: {
  baseHeight?: number;
}) {
  
  const { scrollY } = useScroll();
  const [pin, setPin] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(baseHeight ?? 0);

  useEffect(() => {
    if(typeof window != "object") return
    if (baseHeight !== undefined) return;
    setViewportHeight(window.innerHeight);
  }, [baseHeight]);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const show = current > previous && current > viewportHeight;

    setPin(show);
  });

  return { pinNav: pin };
}
