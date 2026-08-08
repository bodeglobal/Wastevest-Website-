import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Badge,
  BadgeProps,
  Box,
  Button,
  Card,
  Center,
  Container,
  Heading,
  HStack,
  Link,
  Separator,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export default function WhatWeDo({
  mode = "compact",
}: {
  mode?: "full" | "compact";
}) {
  if (mode == "compact")
    return (
      <Box as="section" py={[10, null, 100]}>
        <Container>
          <HStack
            textAlign={"center"}
            flexDir={"column"}
            w="full"

            overflow={"hidden"}
            // justifyContent={"space-between"}
            // alignItems={"baseline"}
          >
            <SectionTitleTag color="primary">What we do</SectionTitleTag>
            <Heading
              size={["3xl", "4xl"]}
              fontSize={["3xl", "4xl"]}
              maxW={"xs"}
              mt={5}
              // wordBreak={"auto-phrase"}
            >
              Three Services, one continental mission.
            </Heading>

            <Button asChild colorPalette={"primary"} mt={2}>
              <Link href="/about">
                See the full picture on About <LuArrowRight />
              </Link>
            </Button>
          </HStack>
          <HStack
            // columns={[1, 2, null, 3]}
            gap={4}
            mt={10}
            justifyContent={["start", null, null, "center"]}
            alignItems={"stretch"}
            overflowX={"scroll"}
            py={4}
            scrollbar={"hidden"}

            // flexWrap={"wrap"}
          >
            {WhatWeDoData.map((item, i) => {
              return (
                <Card.Root
                  key={i}
                  minW={"xs"}
                  maxW={"sm"}
                  bg="white"
                  border={"none"}
                  rounded={"3xl"}
                  p={5}
                  gap={4}
                  scrollSnapAlign={"center"}
                  scrollSnapType={"block"}
                  scrollSnapDestination={"center"}
                >
                  <Card.Header p={0} pos={"relative"} overflow={"clip"}>
                    {item.featured && (
                      <FeaturedBadge pos="absolute" top={8} left={8} />
                    )}
                    {/* <motion.div  whileHover={{scale: 1.10}}> */}
                    <Box
                      h={["2xs", null, null, "2xs"]}
                      rounded={"2xl"}
                      bg="bg.muted"
                      asChild
                      objectFit={"cover"}
                      objectPosition={"top"}
                    >
                      <Image
                        src={item.imgUrl}
                        alt={item.title + " Banner"}
                        width={1080}
                        height={1080}
                      />
                    </Box>
                    {/* </motion.div> */}
                  </Card.Header>
                  <Card.Body p={0}>
                    <Card.Title fontWeight={"normal"} fontSize={"xl"}>
                      {" "}
                      {item.title}
                    </Card.Title>
                    <Card.Description my={3} fontSize={"md"}>
                      {item.shortDescription}
                    </Card.Description>
                    {item.learnMoreUrl && (
                      <WVLink
                        href={item.learnMoreUrl}
                        borderColor="fg"
                        fontWeight={"semibold"}
                        _hover={{ borderColor: "primary" }}
                        w="fit"
                        mt={4}
                      >
                        Learn More
                      </WVLink>
                    )}
                  </Card.Body>
                </Card.Root>
              );
            })}
          </HStack>
        </Container>
      </Box>
    );

  return (
    <Box as="section" py={100}>
      <Container>
        <SectionTitleTag color="primary">What we do</SectionTitleTag>
        <HStack
          smDown={{ flexDir: "column", alignItems: "start" }}
          justifyContent={"space-between"}
          alignItems={"baseline"}
        >
          <Heading
            size={["3xl", "4xl"]}
            maxW={"md"}
            mt={5}
            wordBreak={"auto-phrase"}
          >
            Three practices, one continental mission.
          </Heading>

          <Text
            textAlign={["left", null, "right"]}
            maxW={"sm"}
            fontSize={"sm"}
            color="fg.muted"
          >
            Each of our solutions stands on its own. Together they form a
            circular loop from a child's first lesson to a business's recovered
            tone.
          </Text>
        </HStack>

        <VStack align="stretch" mt={[10]} gap={[20, 10]} w="full">
          {WhatWeDoData.map((item, i) => {
            const sn = ++i;
            const isEven = i % 2 == 0;
            return (
              <HStack
                key={i}
                p={{ base: 4, lg: 20 }}
                gap={[10, 20]}
                flexDir={isEven ? ["column", "row-reverse"] : ["column", "row"]}
                // justifyContent={"space-between"}
              >
                <Box flex={1}>
                  <HStack maxW={"md"} gap={4}>
                    <Text>{sn.toString().padStart(2, "0")}</Text>
                    <Separator flex={1} />
                    {item.featured && <FeaturedBadge />}
                  </HStack>

                  <Text
                    fontSize={["3xl", "4xl"]}
                    fontFamily={"heading"}
                    mt={10}
                  >
                    {item.title}
                  </Text>
                  <Text color="fg.muted" mt={3} mb={10} maxW={"xs"}>
                    {item.descripton}
                  </Text>

                  {
                    /* item.learnMoreUrl && */ <WVLink
                      href={item.learnMoreUrl ?? ""}
                      color={"primary"}
                      fontWeight={"semibold"}
                      mt={20}
                    >
                      Learn More
                    </WVLink>
                  }
                </Box>
                <Center
                  // maxW={"md"}
                  // w="full"
                  flex={1}
                  // bg="green"
                  justifyContent={/* isEven ? "start" :  */ "start"}
                >
                  <Box
                    w={["full"]}
                    // aspectRatio={1}
                    rounded={"xl"}
                    boxShadow={`${isEven ? "-" : ""}11px 12px 0px 0px {colors.primary/${isEven ? 40 : 90}}`}
                    asChild
                    bg="bg.muted"
                    objectFit={"cover"}
                    objectPosition={"center"}
                  >
                    <Image
                      src={item.imgUrl}
                      alt={item.title + " Banner"}
                      width={1080}
                      height={1080}
                    />
                  </Box>
                </Center>
              </HStack>
            );
          })}
        </VStack>
      </Container>
    </Box>
  );
}

function FeaturedBadge(props: BadgeProps) {
  return (
    <Badge
      w="fit"
      rounded={"full"}
      color={"white"}
      bg="primary"
      px={3}
      py={1}
      fontSize={"xs"}
      {...props}
    >
      Featured
    </Badge>
  );
}

/** DATA */

export const WhatWeDoData: {
  imgUrl: string;
  title: string;
  shortDescription: string;
  descripton: string;
  featured?: boolean;
  learnMoreUrl?: string;
}[] = [
  // {
  //   imgUrl: "/assets/images/routebeacon-wa-demo.webp",
  //   title: "RouteBeacon",
  //   shortDescription: "Recycling in a message.",
  //   descripton:
  //     "The WhatsApp-first pickup, rewards and recycling platform. Households request collection in a message. Collectors get paid. Businesses onboard in minutes.",
  //   featured: true,
  //   learnMoreUrl: "/routebeacon",
  // },

  {
    imgUrl: "/assets/images/gallery/clt-1.webp",
    title: "Carbon Litracy Training",
    shortDescription: "Climate decisions people can act on Monday.",
    descripton:
      "Custom engagements for founders, funders and civic institutions — from feasibility studies to program design and impact measurement.",
    learnMoreUrl: "/s/carbon-litracy-training",
  },
  {
    imgUrl: "/assets/images/gallery/com-engagement-4.webp",
    title: "Community Engagement",
    shortDescription: "Disclosure you can stand behind.",
    descripton:
      "Certified corporate training and workshops that translate climate science into decisions people can make on Monday morning.",
    learnMoreUrl: "/s/community-engagement",
  },
  {
    imgUrl: "/assets/images/gallery/circular-econ.webp",
    title: "Circular Economy",
    shortDescription: "Redesigning material flows.",
    descripton:
      "Reporting, strategy and implementation for organiszations navigating disclosure regimes and building credible sustainability commitments.",
    learnMoreUrl: "/s/circular-economy",
  },
];
