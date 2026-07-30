import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  Circle,
  Container,
  Heading,
  Highlight,
  SimpleGrid,
  Span,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function FeaturedPlatform() {
  return (
    <Box as={"section"} bg="#0A0A0A" pos={"relative"} overflow={"hidden"}>
      <Container py={100} color={"white"}>
        <Box maxW={"2xl"}>
          <SectionTitleTag color="primary">Featured Platform</SectionTitleTag>
          <Heading
            my="6"
            size={["3xl", "5xl"]}
            overflow={"break-word"}
            maxW={"sm"}
          >
            <Highlight
              query={"Recycling in a message."}
              styles={{ color: "primary" }}
            >
              RouteBeacon. Recycling in a message.
            </Highlight>
          </Heading>
          <Text>
            The WhatsApp-first pickup and rewards platform for African cities.
            Households request. Collectors get paid. Businesses onboard. Nothing
            to install.
          </Text>

          <Box
            as="ul"
            mt={16}
            color={"white/80"}
            divideY={"1px"}
            divideColor={"white/80"}
            mb={[16, null, 0]}
          >
            <Text
              borderTopWidth={"thin"}
              borderColor={"white/80"}
              display={"flex"}
              alignItems={"center"}
              gap={4}
              py={4}
              as="li"
            >
              <Circle as={"span"} size={2} rounded={"full"} bg="primary" />
              WhatsApp-first — no app to download, no login to remember.
            </Text>

            <Text
              //   borderTopWidth={"thin"}
              display={"flex"}
              alignItems={"center"}
              gap={4}
              py={4}
              as="li"
            >
              <Circle as={"span"} size={2} rounded={"full"} bg="primary" />
              Verified collectors, optimised routes, transparent payouts.
            </Text>

            <Text
              //   borderTopWidth={"thin"}
              display={"flex"}
              alignItems={"center"}
              gap={4}
              py={4}
              as="li"
            >
              <Circle as={"span"} size={2} rounded={"full"} bg="primary" />
              Every kilogram becomes wallet credit for electricity or airtime.
            </Text>
          </Box>
        </Box>

        <Box asChild pos="absolute" w={"7/12"} right={[0, -100,, -120]} bottom={0}>
          <Image
            width={1080}
            height={1080}
            src={"/assets/images/routebeacon-wa-demo.webp"}
            alt="Routebeacon WhatsApp Demo"
          />
        </Box>
      </Container>
    </Box>
  );
}
