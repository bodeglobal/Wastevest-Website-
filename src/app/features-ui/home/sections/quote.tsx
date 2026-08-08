import { Box, Container, Highlight, Text } from "@chakra-ui/react";

export default function Quote() {
  return (
    <Box as="section">
      <Container py={28} centerContent textAlign={"center"}>
        <Text fontSize={["3xl", null, "5xl"]} maxW={"5xl"}>
          <Highlight
            query={["education", "circular economy"]}
            styles={{ color: "primary" }}
          >
            WasteVest is Africa's climate action ecosystem where education,
            technology, the circular economy and community meet.
          </Highlight>
        </Text>
      </Container>
    </Box>
  );
}
