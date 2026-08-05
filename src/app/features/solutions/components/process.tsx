import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { SectionTitle } from "./HeadingText";

export default function OurProcess({
  process,
}: {
  process: { title: string; description: string }[];
}) {
  return (
    <Box as="section">
      <Container py={100}>
        <SectionTitle>Our Process</SectionTitle>

        <SimpleGrid
          mt={10}
          columns={[2, null, 4]}
          bg="border"
          gap={"1px"}
          borderWidth={"thin"}
          rounded="2xl"
          overflow={"hidden"}
        >
          {process.map((item, idx) => {
            return (
              <Box
                key={idx}
                p={6}
                bg={`url('/assets/illustrations/wave-lines.svg') {colors.bg}`}
                bgPos={"bottom"}
              >
                <Text fontSize={"lg"}>{item.title}</Text>
                <Text mt={16}>{item.description}</Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
