import { Box, Button, Container, Text } from "@chakra-ui/react";
import { SectionTitle } from "./HeadingText";
import WVLink from "@/components/wv-link";

export default function WhatToExpect({
  benefits,
  getStartedUrl = "/s/carbon-litracy-training/join-training",
}: {
  benefits: string[];
  getStartedUrl?: string;
}) {
  return (
    <Box as="section" py={[10, null, 100]}>
      <Container>
        <Box
          p={8}
          rounded={"4xl"}
          bg={`url('/assets/illustrations/wave-lines-dark.svg') {colors.primary}`}
          color={"white"}
        >
          <SectionTitle>Outcomes you can expect</SectionTitle>
          <Box
            as="ul"
            columnCount={[1, null, 2]}
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

          <Button colorPalette={"secondary"} mt={10} asChild>
            <WVLink href={getStartedUrl}>Get Started</WVLink>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
