import SectionTitleTag from "@/components/section-tag";
import WVLogo from "@/components/wv-logo";
import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";

export default function TheTeam() {
  return (
    <Box as="section" id="team">
      <Container py={20}>
        <Center py={20} flexDir={"column"} textAlign={"center"}>
          <SectionTitleTag color="primary">The Team</SectionTitleTag>
          <Heading maxW={"lg"} size={["4xl"]} mt={5}>
            A small, senior team with roots across the continent.
          </Heading>
          <Text maxW={"xs"} mt={5} lineHeight={"short"}>
            Operators, educators, engineers and storytellers. We hire slowly and
            stay close to the work.
          </Text>
        </Center>

        <Center rounded={"4xl"} bg="primary" p={32}>
          <WVLogo useWhite w={52} />
        </Center>
      </Container>
    </Box>
  );
}
