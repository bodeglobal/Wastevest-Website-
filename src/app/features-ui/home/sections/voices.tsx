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
  VStack,
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
      <Box mt={5}>
        <VoicesSlide />
      </Box>
    </Box>
  );
}

function VoicesSlide() {
  return (
    <Carousel.Root
      slideCount={voices.length}
      autoplay
      autoSize
      w="full"
      slidesPerMove={1}
      loop
    >
      <Carousel.ItemGroup
        w={{ base: "full", md: "fit" }}
        mx={"auto"}
        p={[4, 8]}
        scrollSnapAlign={"center"}
      >
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
                // bg="red"
                h="full"
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
                    <Text fontWeight={600}>{item.user.name} {item.user.countryFlag}</Text>
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
  user: { name: string; org: string; state: string; profileUrl?: string,countryFlag: string };
}[] = [
  {
    comment:
      "Through my interactions with WasteVest across leading climate and sustainability spaces, I’ve seen their strong commitment to advancing climate action, sustainability, and the circular economy. I highly recommend WasteVest to organizations and communities looking to strengthen their sustainability initiatives",
    user: {
      name: "Grace Chukwufumanya Ndobu",
      state: "Founder",
      org: "Acerecycles Enterprise",
      profileUrl: "/assets/avatars/grace-chukwufumanya-ndobu.jpeg",
      countryFlag: "🇳🇬"
    },
  },
  {
    comment:
      "WasteVest has been a game changer for me in the climate space. It turned waste from a problem into real climate action and livelihood opportunities. Through WasteVest, I’ve seen firsthand how recycling and circular solutions can cut emissions while creating impact in our communities.",
    user: {
      name: "Temi Okunola",
      state: "Environmental Quality Control Officer",
      org: "NESREA",
      profileUrl: "/assets/avatars/temi-okunola.jpeg",
      countryFlag: "🇳🇬"
    },
  },
  {
    comment:
      "Wastevest is credible. Determination stood out. Yes highly recommend, because it has a sustainable vision",
    user: {
      name: "Anthony Abayomi Bankole. Ph.D",
      state: "President/CEO.",
      org: "Green Pastures Integrated Resources Ltd Abuja",
      profileUrl: "/assets/avatars/anthony-abayomi-bankole.jpeg",
      countryFlag: "🇳🇬"
    },
  },
  {
    comment:
      "My experience with WasteVest has been phenomenal from smart bins that communicate with collectors to a marketplace that rewards recycling with cash, airtime, or electricity, everything just works. The founder's accommodating nature made it even better. I'd recommend WasteVest without hesitation it's the future of waste management in Africa.",
    user: {
      name: "Trinity Makhari",
      state: "Founder and CEO",
      org: "FirstJobly ",
      profileUrl: "/assets/avatars/trinity-makhari.JPG",
      countryFlag: "🇿🇦"
    },
  },

  {
    comment:
      "My experience with WasteVest was educational and inspiring. Their commitment to educating people about waste management stood out to me. Through their training programs and innovative solutions, WasteVest provides practical starting points for anyone interested in waste management and building a more sustainable future.",
    user: {
      name: "Noellie Nganmoue",
      state: "Manager & Cloud System Administrator",
      org: "ALI GLOBAL",
      profileUrl: "/assets/avatars/noellie-nganmoue.jpeg",
      countryFlag: "🇿🇦"
    },
  }
];
