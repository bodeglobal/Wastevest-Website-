import { BookConsult } from "@/components/btns";
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
          bg={`url('/assets/illustrations/wave-lines-dark.svg') #031124`}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          p={[6, null, 10]}
          gap={10}
          rounded="4xl"
          flexDir={["column", null, null, "row"]}
          color="white"
        >
          <Box flex={1}>
            <SectionTitleTag>Book Bode as a Speaker</SectionTitleTag>
            <Heading mt={5} size={["3xl", null, "5xl"]} maxW={"sm"}>
              Your Vision inspires Action.
            </Heading>
            <Text mt={6}>
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

            <BookConsult mt={10} />
          </Box>
          <Box flex={1}>
            <Box
              // w={["full", null, "6/12"]}
              bg="bg.muted/30"
              h="full"
              rounded="2xl"
              asChild
            >
              <Image
                src={"/assets/images/gallery/founder3.webp"}
                alt="Wastevest Founder"
                width={1080}
                height={1080}
              />
            </Box>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
