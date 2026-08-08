import { Avatar } from "@/components/avatar";
import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Box,
  Button,
  ButtonGroup,
  Carousel,
  Container,
  HStack,
  IconButton,
  Text,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Voices() {
  return (
    <Box as="section" py={[10, null, 100]}>
      <Container>
        <HStack justifyContent={"space-between"}>
          <SectionTitleTag color="primary">Voices</SectionTitleTag>

          <Button asChild colorPalette={"primary"}>
            <WVLink href="/bode-in-action" targetBlank>
              Watch Bode in Action
            </WVLink>
          </Button>
        </HStack>
        <HStack hidden gap={20} mdDown={{ flexDir: "column" }}>
          <Box w="full" maxW={"md"}>
            <SectionTitleTag color="primary">Voices</SectionTitleTag>

            <Box
              w={"xs"}
              height={52}
              bg="bg.muted"
              mt={10}
              asChild
              objectFit={"cover"}
              objectPosition={"bottom"}
            >
              <Image
                src={"/assets/images/gallery/g3.webp"}
                alt="Wastevest Group Photo"
                width={1080}
                height={1080}
              />
            </Box>
          </Box>

          <Box flex={1} overflow={"hidden"}>
            <VoicesSlide />
          </Box>
        </HStack>
      </Container>
      <Box mt={10}>
        <VoicesSlide />
      </Box>
    </Box>
  );
}

function VoicesSlide() {
  return (
    <Carousel.Root slideCount={voices.length} autoplay autoSize w="full">
      <Carousel.ItemGroup w="fit" px={[4, 8]} mx="auto">
        {voices.map((item, i) => {
          return (
            <Carousel.Item
              key={i}
              index={i}

              snapAlign="center"
              w="fit"
              bg="white"
              rounded={"2xl"}
              p={6}
              borderWidth={"thin"}
              borderColor={"#AFAEAC/30"}
            >
              <VStack
                key={i}
                maxW="sm"
                align={"stretch"}
                justifyContent={"space-between"}
              >
                <Text
                  w="full"
                  // fontSize={["xl", "3xl"]}
                  color="#0A0A0A"
                  fontFamily={"heading"}
                >
                  “{item.comment}”
                </Text>

                <HStack mt={16}>
                  <Avatar
                    src={item.user.profileUrl}
                    name={item.user.name}
                    size="xl"
                  />
                  <Box fontSize={"xs"} flex={1}>
                    <Text fontWeight={600}>{item.user.name}</Text>
                    <Text color="#5A5A58">
                      {item.user.org} · {item.user.state}
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </Carousel.Item>
          );
        })}
      </Carousel.ItemGroup>

      <Carousel.Control
        w="full"
        color="#5A5A58"
        gap={5}
        p={4}
        justifyContent={"end"}
      >
        {/* <HStack color="#5A5A58"> */}
        {/* <Text fontSize={"sm"}>01 / 03</Text> */}
        <Carousel.ProgressText fontSize={"sm"} fontFamily={"body"} />
        <ButtonGroup size="xs">
          <Carousel.PrevTrigger asChild>
            <IconButton variant={"outline"}>
              <LuArrowLeft />
            </IconButton>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            <IconButton variant={"solid"}>
              <LuArrowRight />
            </IconButton>
          </Carousel.NextTrigger>
        </ButtonGroup>
        {/* </HStack> */}
      </Carousel.Control>
    </Carousel.Root>
  );
}

/** Data */

const voices: {
  comment: string;
  user: { name: string; org: string; state: string; profileUrl?: string };
}[] = [
  {
    comment:
      "Through my interactions with WasteVest across leading climate and sustainability spaces, I’ve seen their strong commitment to advancing climate action, sustainability, and the circular economy. I highly recommend WasteVest to organizations and communities looking to strengthen their sustainability initiatives",
    user: {
      name: "Mrs. Grace Chukwufumanya Ndobu",
      state: "Founder",
      org: "Acerecycles Enterprise",
      profileUrl: "/assets/images/gallery/g3.webp",
    },
  },
  // {
  //   comment:
  //     "WasteVest didn't just talk about recycling, they built the system that finally made it work on our street. Our estate now diverts half its waste.",
  //   user: {
  //     name: "Mrs. Jane Doe",
  //     state: "Estate Chair",
  //     org: "Ikoyi, Lagos",
  //     profileUrl: "/assets/images/gallery/g3.webp",
  //   },
  // },
  // {
  //   comment:
  //     "WasteVest didn't just talk about recycling, they built the system that finally made it work on our street. Our estate now diverts half its waste.",
  //   user: {
  //     name: "Mr. John Doe",
  //     state: "Estate Chair",
  //     org: "Ikoyi, Lagos",
  //     profileUrl: "/assets/images/gallery/g3.webp",
  //   },
  // },

  // {
  //   comment:
  //     "WasteVest didn't just talk about recycling, they built the system that finally made it work on our street. Our estate now diverts half its waste.",
  //   user: {
  //     name: "Mrs. Adaeze Okoro",
  //     state: "Estate Chair",
  //     org: "Ikoyi, Lagos",
  //     profileUrl: "/assets/images/gallery/g3.webp",
  //   },
  // },
  // {
  //   comment:
  //     "WasteVest didn't just talk about recycling, they built the system that finally made it work on our street. Our estate now diverts half its waste.",
  //   user: {
  //     name: "Mrs. Jane Doe",
  //     state: "Estate Chair",
  //     org: "Ikoyi, Lagos",
  //     profileUrl: "/assets/images/gallery/g3.webp",
  //   },
  // },
  // {
  //   comment:
  //     "WasteVest didn't just talk about recycling, they built the system that finally made it work on our street. Our estate now diverts half its waste.",
  //   user: {
  //     name: "Mr. John Doe",
  //     state: "Estate Chair",
  //     org: "Ikoyi, Lagos",
  //     profileUrl: "/assets/images/gallery/g3.webp",
  //   },
  // },
];
