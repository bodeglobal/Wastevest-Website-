import { Box, Container, Highlight, Text } from "@chakra-ui/react";

export default function Quote() {
  return (
    <Box as="section">
      <Container py={16}>
        <Box borderStartWidth={"2px"} borderColor={"primary"} px={4}>
          <Text fontSize={"3xl"} maxW={"3xl"}>
            “Africa's climate story is being written right now. It needs new
            authors.”
          </Text>

          <Text mt={20} fontSize={"sm"} fontWeight={500}>
            Bode Ojo, Founder
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
