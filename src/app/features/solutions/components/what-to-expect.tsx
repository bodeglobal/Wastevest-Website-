import { Box, Button, Container, Text } from "@chakra-ui/react";
import { SectionTitle } from "./HeadingText";

export default function WhatToExpect({ benefits }: { benefits: string[] }) {
  return (
    <Box as="section" py={100}>
      <Container
        p={8}
        rounded={"4xl"}
        bg={`url('/assets/illustrations/wave-lines-dark.svg') {colors.primary}`}
        color={"white"}
      >
        <SectionTitle>Outcomes you can expect</SectionTitle>

        <Box
          as="ul"
          columnCount={2}
          spaceY={3}
          mt={10}
          listStyle={"inside"}
          fontWeight={500}
        >
          {benefits.map((item, idx) => {
            return (
              <Text key={idx} as="li">
                {item}
              </Text>
            );
          })}
        </Box>

        <Button colorPalette={"secondary"} mt={10}>
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
