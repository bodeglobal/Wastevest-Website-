import { Box, Container, Highlight, Text } from "@chakra-ui/react";

export default function Quote() {
  return (
    <Box as="section">
      <Container py={16}>
        <Text fontSize={"3xl"} maxW={"3xl"}>
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
