import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function BookBodeCTA() {
  return (
    <Box as="section">
      <Container py={100}>
        <HStack
          bg={`url('/assets/illustrations/wave-lines-dark.svg') {colors.primary}`}
          p={[5, null, 10]}
          gap={10}
          rounded="4xl"
          flexDir={["column", null, null, "row"]}
          color="white"
        >
          <Box w="full">
            <SectionTitleTag>Book Bode</SectionTitleTag>
            <Heading mt={5} size={["3xl", null, "5xl"]} maxW={"sm"}>
              Your Vision inspires Action.
            </Heading>
            <Text  mt={6}>
              Bode delivers sustainability training, workshops and keynote talks
              that turn climate ideas into practical action. As the founder of
              WasteVest, he helps individuals and organisations rethink waste as
              a valuable resource and build solutions that create lasting
              environmental impact.
              <br />
              <br />
              Through engaging, hands-on sessions, Bode equips audiences with
              the mindset, tools and confidence to drive measurable change.
            </Text>

            <Button mt={10} bg="white" color="primary">
              Book a Call with Bode
            </Button>
          </Box>
          <Box flex={1} bg="bg.muted/30" h={["10"]} rounded="2xl" asChild>
            <Image
              src={"/assets/images/gallery/founder3.jpg"}
              alt=""
              width={1080}
              height={1080}
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
