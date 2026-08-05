"use client";
import { Box, Container, Heading, HStack, Text } from "@chakra-ui/react";
import { useInView } from "motion/react";
import { RefObject, useEffect, useRef, useState } from "react";

export default function AboutCLT() {
  const [active, setActive] = useState<number>();
  const scrollRef = useRef(null);
  return (
    <Box as="section" py={100}>
      <Container>
        <HStack gap={20} alignItems={"start"}>
          <Box maxW={{ base: "auto", lg: "4/12" }}>
            {data.map((item, idx) => {
              const isActive = idx == active;
              return (
                <Box key={idx}>
                  <Heading
                    size={["4xl"]}
                    p={4}
                    color={isActive ? "primary" : "#B1B0AD"}
                    transition={"color .4s ease-in-out"}
                  >
                    {item.title}
                  </Heading>

                  <Box hideFrom={"lg"}>
                    <Content
                      body={item.body}
                      inView={(value) => value && setActive(idx)}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            hideBelow={"lg"}
            flex={1}
            h="lg"
            spaceY={20}
            overflow={"auto"}
            scrollbar={"hidden"}
            ref={scrollRef}
          >
            {data.map((item, idx) => (
              <Content
                key={idx}
                body={item.body}
                inView={(value) => value && setActive(idx)}
                parentRef={scrollRef}
              />
            ))}
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}

function Content({
  body,
  inView,
  parentRef,
}: {
  body: string;
  inView?: (value: boolean) => void;
  parentRef?: RefObject<Element | null> | undefined;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.7,
    // margin: "10%",
    root: parentRef,
  });

  useEffect(() => {
    if (!inView) return;
    inView(isInView);
  }, [isInView, ref.current]);

  return (
    <Text
      ref={ref}
      whiteSpace={"pre-line"}
      h="full"
      w="full"
      p={4}
      fontSize={"xl"}
      lineHeight={"taller"}
      color="#5A5A58"
    >
      {body}
    </Text>
  );
}

/* DATA */

const data = [
  {
    title: "What is Carbon Literacy?",
    body: "Carbon Literacy is an understanding of the carbon costs and impacts of our everyday activities, together with the knowledge, motivation and confidence to reduce carbon emissions at home, in the workplace and across our communities.\n\nDeveloped by The Carbon Literacy Project, Carbon Literacy equips people with the knowledge and confidence to make informed climate decisions and inspire positive change. Today, thousands of individuals and organisations worldwide have become Carbon Literate.",
  },
  {
    title: "Course Details",
    body: "Carbon Literacy is an understanding of the carbon costs and impacts of our everyday activities, together with the knowledge, motivation and confidence to reduce carbon emissions at home, in the workplace and across our communities.\n\nDeveloped by The Carbon Literacy Project, Carbon Literacy equips people with the knowledge and confidence to make informed climate decisions and inspire positive change. Today, thousands of individuals and organisations worldwide have become Carbon Literate.",
  },
  {
    title: "Course Content",
    body: "Carbon Literacy is an understanding of the carbon costs and impacts of our everyday activities, together with the knowledge, motivation and confidence to reduce carbon emissions at home, in the workplace and across our communities.\n\nDeveloped by The Carbon Literacy Project, Carbon Literacy equips people with the knowledge and confidence to make informed climate decisions and inspire positive change. Today, thousands of individuals and organisations worldwide have become Carbon Literate.",
  },
  {
    title: "Value of Carbon Literacy",
    body: "Carbon Literacy is an understanding of the carbon costs and impacts of our everyday activities, together with the knowledge, motivation and confidence to reduce carbon emissions at home, in the workplace and across our communities.\n\nDeveloped by The Carbon Literacy Project, Carbon Literacy equips people with the knowledge and confidence to make informed climate decisions and inspire positive change. Today, thousands of individuals and organisations worldwide have become Carbon Literate.",
  },
  {
    title: "Why WasteVest?",
    body: "Carbon Literacy is an understanding of the carbon costs and impacts of our everyday activities, together with the knowledge, motivation and confidence to reduce carbon emissions at home, in the workplace and across our communities.\n\nDeveloped by The Carbon Literacy Project, Carbon Literacy equips people with the knowledge and confidence to make informed climate decisions and inspire positive change. Today, thousands of individuals and organisations worldwide have become Carbon Literate.",
  },
];
