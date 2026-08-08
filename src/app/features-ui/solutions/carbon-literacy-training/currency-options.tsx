"use client";

import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { motion } from "motion/react";

export default function CurrencyOptions({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <ButtonGroup bg="primary.700" borderWidth={"thin"} p={0.5} rounded="full" w="fit">
      {options.map((item) => {
        const isActive = selected == item;
        return (
          <Button
            key={item}
            bg="transparent"
            gap={0}
            position={"relative"}
            textTransform={"uppercase"}
            color={isActive ? "primary" : "white"}
            transition={"color .6s ease-in-out"}
            onClick={() => onSelect(item)}
          >
            {isActive && (
              <Box
                asChild
                pos="absolute"
                w="full"
                h="full"
                bg="bg"
                rounded="full"
                zIndex={-1}
              >
                <motion.div layout layoutId="indicator" />
              </Box>
            )}
            {item}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
