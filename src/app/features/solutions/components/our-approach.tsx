"use client";
import { Box, Center, Container, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SectionTitle } from "./HeadingText";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  data: {
    title: string;
    body: string;
    illustrationUrl: string;
    color?: string;
  }[];
};
export default function OurApproach({ data }: Props) {
  const section = useRef<HTMLDivElement | null>(null);
  const pinnedContent = useRef<HTMLDivElement | null>(null);
  const cardStage = useRef<HTMLDivElement | null>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const stackedCardCount = Math.max(data.length - 1, 0);
  const stackRoomBase = `${stackedCardCount * 88}px`;
  const stackRoomMd = `${stackedCardCount * 132}px`;

  useGSAP(
    () => {
      const sectionEl = section.current;
      const pinnedEl = pinnedContent.current;
      const stageEl = cardStage.current;
      const cardEls = cards.current.filter(Boolean) as HTMLDivElement[];

      if (!sectionEl || !pinnedEl || !stageEl || cardEls.length <= 1) {
        return;
      }

      const getStackOffset = () =>
        window.matchMedia("(min-width: 768px)").matches ? 132 : 88;
      const getStartY = (index: number) =>
        cardEls[0].offsetHeight + index * getStackOffset();
      const getScrollDistance = () =>
        window.innerHeight * Math.max(cardEls.length - 1, 1) * 0.85;

      gsap.set(cardEls, {
        transformOrigin: "top center",
        zIndex: (index) => index + 1,
        y: (index) => (index === 0 ? 0 : getStartY(index)),
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 0.5,
          pin: pinnedEl,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cardEls.slice(1).forEach((card, index) => {
        const cardIndex = index + 1;
        const stackOffset = () => cardIndex * getStackOffset();

        timeline.to(
          card,
          {
            y: stackOffset,
            duration: 0.7,
            ease: "none",
          },
          index,
        );

        timeline.to(
          cardEls[cardIndex - 1],
          {
            scale: 1 - cardIndex * 0.025,
            duration: 0.7,
            ease: "none",
          },
          index,
        );
      });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    },
    { scope: section, dependencies: [data.length] },
  );

  return (
    <Box as="section" ref={section}>
      <Container ref={pinnedContent} py={{ base: 20, md: 100 }}>
        <SectionTitle className="title">Our Approach</SectionTitle>

        <Box
          ref={cardStage}
          mt={{ base: 10, md: 16 }}
          h={{
            base: `calc(72svh + ${stackRoomBase})`,
            md: `calc(68svh + ${stackRoomMd})`,
          }}
          minH={{
            base: `calc(560px + ${stackRoomBase})`,
            md: `calc(620px + ${stackRoomMd})`,
          }}
          maxH={{ md: `calc(760px + ${stackRoomMd})` }}
          pos="relative"
          overflow="hidden"
        >
          {data.map((item, idx) => {
            return (
              <HStack
                ref={(node) => {
                  cards.current[idx] = node;
                }}
                key={idx}
                pos="absolute"
                top={0}
                insetX={0}
                h={{
                  base: `calc(100% - ${stackRoomBase})`,
                  md: `calc(100% - ${stackRoomMd})`,
                }}
                zIndex={idx + 1}
                flexDir={["column", null, "row"]}
                align="stretch"
                gap={{ base: 6, md: 12 }}
                transform={
                  idx === 0
                    ? undefined
                    : `translateY(calc(100% + ${idx * 88}px))`
                }
                rounded={{ base: "3xl", md: "56px" }}
                bg={item.color ?? "white"}
                px={{ base: 6, md: 12, lg: 16 }}
                py={{ base: 8, md: 14, lg: 20 }}
                // boxShadow="0 24px 80px rgba(0, 0, 0, 0.06)"
                overflow="hidden"
              >
                <Box
                  flex={1}
                  display="flex"
                  flexDir="column"
                  h={{ base: "auto", md: "85%" }}
                  justifyContent="space-between"
                  minW={0}
                >
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    lineHeight="1"
                    fontFamily={"heading"}
                  >
                    {item.title}
                  </Text>
                  <Text
                    mt={{ base: 10, md: 16 }}
                    maxW="3xl"
                    color="black/70"
                    fontSize={{ base: "md", md: "xl" }}
                    lineHeight="tall"
                    whiteSpace={"pre-line"}
                  >
                    {item.body}
                  </Text>
                </Box>
                <Center flex={1} minH={0}>
                  <Box
                    asChild
                    w={{ base: "72%", md: "sm", lg: "md" }}
                    maxW="full"
                    objectFit="contain"
                  >
                    <Image
                      src={item.illustrationUrl}
                      alt=""
                      width={720}
                      height={720}
                    />
                  </Box>
                </Center>
              </HStack>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
