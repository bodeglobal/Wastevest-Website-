import AnimatedTrash from "@/components/animted-trash";
import WVLink from "@/components/wv-link";
import {
  Box,
  Center,
  Container,
  Heading,
  Text
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      as="section"
      bg="radial-gradient(53.97% 76.54% at 73.09% 41.85%, #74D4FF 9.06%, #62C3FF 17.54%, #2789FF 36.07%, #0C6EFF 47.21%, #0062FF 59.57%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
"
    >
      <Container asChild color="white" py={100} h="full" minH={"svh"}>
        <Center flexDir={["column",   "row"]} justifyContent={["center", null, "start"]} gap={10}>
          <Box w="full" pe={[0, null, 20]}>
            <Heading size={["4xl", null, "5xl", "6xl"]}>
              A Pan-African climate organization.
            </Heading>
            <Text my={10}>
              WasteVest began with a question asked during the We Create Change
              program: "What change would you like to see in your community?"
              Our answer was simple: cleaner motor parks in Abuja.
              <br />
              <br />
              That answer became a public petition to the Abuja Environmental
              Protection Board (AEPB). But in trying to solve one problem, we
              discovered another: one of Africa's biggest environmental
              challenges was also one of its greatest untapped economic
              opportunities.
              <br />
              <br />
              Today, WasteVest builds technology, partnerships, and climate
              literacy programs that transform waste into value helping
              communities participate in a more circular, resilient future.
            </Text>

            <WVLink href="#" color="white">
              Read the Petition that started it all
            </WVLink>
          </Box>
          <Center w={["xs", null, "2xs", "full"]} h="fit" pos="relative" hideBelow={"sm"}>
            <Box pos="relative">
              <AnimatedTrash />
            </Box>
          </Center>
        </Center>
      </Container>
    </Box>
  );
}



