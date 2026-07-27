import { FormatNumber } from "@chakra-ui/react";
import { useMotionValue, useInView, animate } from "motion/react";

import { useState, useEffect, useRef } from "react";

type Props = {
  ref: React.RefObject<any>;
  targetCount: number;
};

type Returns = ReturnType<typeof useAnimateNumberCount>;

/**
 *
 * @param  props - ref: The target element that triggers animation when in view
 * - targetCount: the final count
 * @returns {Return}
 */
export function useAnimateNumberCount(props: Props): { count: number } {
  const { ref, targetCount } = props;
  const value = useMotionValue(0);
  const inView = useInView(ref);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const unsubscribe = value.on("change", (latest) => {
      setCount(Math.round(latest));
    });
    const s = animate(value, targetCount, {
      duration: 1.5,
      ease: "circOut",
      delay: 0.3,
    });

    return () => {
      unsubscribe();
      s.stop();
    };
  }, [inView]);

  return { count };
}

export function AnimateNumberCount(props: Props) {
  const { count } = useAnimateNumberCount(props);
  return <FormatNumber value={count} />;
}
