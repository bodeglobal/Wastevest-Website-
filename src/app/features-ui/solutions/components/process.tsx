import {
  Box,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { SectionTitle } from "./HeadingText";

export default function OurProcess({
  process,
}: {
  process: { title: string; description: string }[];
}) {
  return (
    <Box as="section">
      <Container py={[10, null, 100]}>
        <SectionTitle>Our Process</SectionTitle>

        <SimpleGrid
          mt={10}
          columns={{ base: 2, xl: 4 }}
          borderRightWidth="thin"
          borderBottomWidth="thin"
          rounded="2xl"
          overflow={"hidden"}
        >
          {process.map((item, idx, items) => {
            const isOddLast =
              items.length % 2 == 0 ? false : items.length - 1 == idx;
            return (
              <GridItem
                asChild
                key={idx}
                colSpan={isOddLast ? { base: 2, xl: 4 } : undefined}
              >
                <Flex
                  key={idx}
                  p={6}
                  bg={`url('/assets/illustrations/wave-lines.svg') {colors.bg}`}
                  bgPos={"bottom"}
                  borderLeftWidth="thin"
                  borderTopWidth="thin"
                  flexDir={"column"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={"lg"}>
                    {item.title}
                  </Text>
                  <Text mt={16}>{item.description}</Text>
                </Flex>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
