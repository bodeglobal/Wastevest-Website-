import { SchedulePickup } from "@/components/btns";
import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Box,
  Button,
  ButtonGroup,
  Circle,
  Container,
  Flex,
  FormatNumber,
  Heading,
  Highlight,
  HStack,
  SimpleGrid,
  Span,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedPlatform() {
  return (
    <Box as={"section"} bg="#0A0A0A" pos={"relative"} overflow={"hidden"}>
      <Container px={0} color={"white"}>
        <HStack flexDir={["column", null, "row"]} alignItems={"stretch"}>
          <Box flex={1} px={8} pb={[0, null, 100]} pt={[100]}>
            <SectionTitleTag color="primary">Featured Platform</SectionTitleTag>
            <Heading my="6" size={["5xl"]} overflow={"break-word"} maxW={"sm"}>
              RouteBeacon. <Span color="primary">Recycling in a message.</Span>
            </Heading>
            <Text>
              The WhatsApp-first pickup and rewards platform for African cities.
              Households request. Collectors get paid. Businesses onboard.
              Nothing to install.
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

            <ButtonGroup mt={5}>
              <SchedulePickup colorPalette={"primary"} showArrow />

              <Button
                asChild
                variant={"outline"}
                border={"thin solid {colors.secondary}"}
                color={"secondary"}
                _hover={{ bg: "secondary/5" }}
              >
                <WVLink hideArrow border="none" href="/routebeacon">
                  Learn More
                </WVLink>
              </Button>
            </ButtonGroup>
          </Box>

          <Flex
            flex={1}
            pos="relative"
            // bg="red"
            alignItems={"end"}
            justifyContent={"center"}
          >
            {/* 
            border: 1px solid;



*/}
            <Box
              px={6}
              py={2}
              pos="absolute"
              border="1px solid transparent"
              borderRadius="xl"
              backgroundColor="transparent"
              bgImage="linear-gradient(#0A0A0A, #0A0A0A), linear-gradient(131.57deg, rgba(255, 255, 255, 0.5) -0.31%, rgba(153, 153, 153, 0.15) 43.94%, rgba(255, 255, 255, 0.5) 95.04%)"
              // bgOrigin="border-box"
              bgClip="padding-box, border-box"
              top={100}
              left={[2, 5, -7]}
              rotate={"-11.66deg"}
            >
              <Text textTransform={"uppercase"} fontSize={["xs", "auto"]}>
                Wallet
              </Text>
              <Text fontSize={["2xl", "3xl"]} fontWeight={"semibold"}>
                <FormatNumber
                  value={4820}
                  trailingZeroDisplay="stripIfInteger"
                  style="currency"
                  currency="NGN"
                  currencyDisplay="narrowSymbol"
                />
              </Text>
            </Box>

            <Box
              px={6}
              py={2}
              pos="absolute"
              border="1px solid transparent"
              borderRadius="xl"
              backgroundColor="transparent"
              color={"#0A0A0A"}
              bgImage="linear-gradient(#66A1FF, #66A1FF), linear-gradient(131.57deg, rgba(255, 255, 255, 0.5) -0.31%, rgba(153, 153, 153, 0.15) 43.94%, rgba(255, 255, 255, 0.5) 95.04%)"
              // bgOrigin="border-box"
              bgClip="padding-box, border-box"
              bottom={[100, null, 300]}
              right={7}
              rotate={"11.66deg"}
            >
              <Text textTransform={"uppercase"} fontSize={["xs", "auto"]}>
                This Week
              </Text>
              <Text fontSize={["2xl", "3xl"]} fontWeight={"semibold"}>
                18.4 kg
              </Text>
            </Box>
            <Box
              asChild
              objectFit={"cover"}
              h="full"
              w={
                "full"
              } /*  pos="absolute" right={[0, -100,, -120]} bottom={0} */
            >
              <Image
                width={1080}
                height={1080}
                src={"/assets/images/routebeacon-wa-demo.webp"}
                alt="Routebeacon WhatsApp Demo"
              />
            </Box>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}
