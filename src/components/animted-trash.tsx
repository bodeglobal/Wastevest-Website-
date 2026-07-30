"use client";

import { Box, Center } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const trashs = [
  {
    srcUrl: "/assets/images/trash/t1.png",
    alt: "",
  },
  {
    srcUrl: "/assets/images/trash/t2.png",
    alt: "",
  },
  {
    srcUrl: "/assets/images/trash/t3.png",
    alt: "",
  },
  {
    srcUrl: "/assets/images/trash/t4.png",
    alt: "",
  },
  {
    srcUrl: "/assets/images/trash/t5.png",
    alt: "",
  },
  {
    srcUrl: "/assets/images/trash/t6.png",
    alt: "",
  },
];

export default function AnimatedTrash() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let count = 1;
    const timeout = setInterval(() => {
      if (count == 6) count = 0;
      setActive(count);
      count++;
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Center pos={"relative"} bg="blue" asChild>
      <AnimatePresence mode="sync">
        {trashs.map((trash, i) => {
          const current = active != i;
          if (current) return null;
          return (
            <motion.div
              key={i}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                asChild
                w={96}
                pos="absolute"
                top={"50%"}
                left={"50%"}
                transform={"translate(-50%, -50%)"}
              >
                {active}
                <Image
                  src={trash.srcUrl}
                  alt={`${trash.alt ?? "Trash Bin"}`}
                  width={1080}
                  height={1080}
                />
              </Box>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Center>
  );
}
