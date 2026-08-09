"use client";
import { WVIcons } from "@/components/icons";
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  IconProps,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useInView } from "motion/react";
import Image from "next/image";
import {
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export default function AboutCLT() {
  const [active, setActive] = useState<number>();
  const scrollRef = useRef(null);
  return (
    <Box as="section" py={[10, null, 100]}>
      <Container>
        <HStack gap={20} alignItems={"s0art"} lgDown={{ flexDir: "column", gap: 40 }}>
          <Box overflowX={"hidden"} maxW={{ base: "full", lg: "4/12" }} spaceY={{base: 20, lg:4}}>
            {data.map((item, idx) => {
              const isActive = idx == active;
              return (
                <Box key={idx}>
                  <Heading
                    size={["2xl","4xl"]}
                    // p={4}
                    color={isActive ? "primary" : "#B1B0AD"}
                    transition={"color .4s ease-in-out"}
                  >
                    {item.title}
                  </Heading>

                  <Box hideFrom={"lg"} w="full">
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
            h="xl"
            spaceY={40}
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
  body: ReactNode;
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
    <Box
      ref={ref}
      h="max-content"
      overflowY={"hidden"}
      scrollbar={"hidden"}
      w="full"
      p={4}
      justifyContent={"start"}
      fontSize={{base: "md", md:"xl"}}
      lineHeight={"taller"}
      color="#5A5A58"
      asChild

    >
      <Box whiteSpace="pre-line" w="full">
        {body}
      </Box>
    </Box>
  );
}

function CourseCard({
  illustrationUrl,
  title,
  description,
}: (typeof courseContent)[number]) {
  return (
    <Box spaceY={4} flex="1" minW={"200px"} maxW={{ base: "3xs" }}>
      <Box>
        <Box w="fit" h={{ base: "24" ,md: "32"  }} position="relative" asChild>
          <Image
            src={illustrationUrl}
            alt=""
            width={480}
            height={480}
            // fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
      <Text fontWeight="bold" lineHeight="shorter" color="fg">
        {title}
      </Text>
      <Text fontSize="lg" lineHeight="shorter">
        {description}
      </Text>
    </Box>
  );
}

function DottedArrow() {
  return (
    <HStack
      // gap={4}
      // flexShrink={0}
      w="20"
      aria-hidden="true"
      // bg="red"
      // hideBelow={"sm"}
    >
      <Box w="2" h="2" borderRadius="full" bg="fg" />
      <Box
        w={{ base: "10" /* md: "14" */ }}
        borderTop="2px dashed"
        borderColor="fg"
        position="relative"
      >
        <Box
          position="absolute"
          right="0"
          top="-7.2px"
          w="3"
          h="3"
          borderTop="2px solid"
          borderRight="2px solid"
          borderColor="fg"
          transform="rotate(45deg)"
        />
      </Box>
    </HStack>
  );
}

/* DATA */

const valueOfCLT: {
  label: string;
  icon: (props: IconProps) => ReactElement;
}[] = [
  { label: "Engage & Empower your Team", icon: WVIcons.UsersThree },
  { label: "Advocate for Change", icon: WVIcons.Handshake },
  { label: "Shift Mindsets & Transform Culture", icon: WVIcons.Asterisk },
  { label: "Build Commercial Resilience", icon: WVIcons.Handshake },
  { label: "Embrace Brand Reputation", icon: WVIcons.Ranking },
  { label: "Accelerate action towards Net Zero", icon: WVIcons.ChartLineUp },
];

const courseContent = [
  {
    illustrationUrl: "/assets/illustrations/hugging-planet-earth.png",
    title: "History Sciences, Geography",
    description: "Key terms, impacts & knowledge",
  },
  {
    illustrationUrl: "/assets/illustrations/footsprint.png",
    title: "Carbon Footprints",
    description: "Personal and business footprints",
  },
  {
    illustrationUrl:
      "/assets/illustrations/female-employee-giving-business-presentation.png",
    title: "Your Business",
    description: "How will you plan for the future?",
  },
  {
    illustrationUrl:
      "/assets/illustrations/marketing-team-collaboration-and-project-management.png",
    title: "Engaging Others",
    description: "Taking others with you on the journey.",
  },
  {
    illustrationUrl:
      "/assets/illustrations/carrying-cardboard-and-bottles-recycling-and-sustainability-action.png",
    title: "Your Actions",
    description: "Personal & organization actions.",
  },
];

const data = [
  {
    title: "What is Carbon Literacy?",
    body: "Carbon Literacy is an understanding of the carbon costs and impacts of our everyday activities, together with the knowledge, motivation and confidence to reduce carbon emissions at home, in the workplace and across our communities.\n\nDeveloped by The Carbon Literacy Project, Carbon Literacy equips people with the knowledge and confidence to make informed climate decisions and inspire positive change. Today, thousands of individuals and organisations worldwide have become Carbon Literate.",
  },
  {
    title: "Course Details",
    body: (
      <>
        <Text>Live Online via Microsoft Teams</Text>

        <Text color="fg" fontWeight={"semibold"}>
          Course Format
        </Text>

        <Box as="ul" listStyle={"inside"}>
          {[
            "Interactive workshops",
            "Facilitated discussions",
            "Practical exercises",
            "Group activities",
            "Self-study",
            "In-person, hybrid or remote",
            "Climate action planning",
            "Evidence Form submission",
            "One or multiple days",
            "Tailored experience",
          ].map((value) => (
            <Text as="li" key={value}>
              {value}
            </Text>
          ))}
        </Box>
      </>
    ),
  },
  {
    title: "Course Content",
    body: (
      <HStack
        // align="end"
        justify="start"
        gap={{ base: 6, xl: 8 }}
        // flexWrap={{ base: "wrap", xl: "nowrap" }}
        flexDir={{base: "column", md: "row"}}
        w="full"
      >
        <VStack align="stretch" gap={6} flex="1" mdDown={{ w: "full" }}>
          <Heading size="xl" color="fg">
            Module 1
          </Heading>
          <HStack
            gap={{ base: 3, md: 6 }}
            overflowX={"auto"}
            overflowY={"clip"}
            h="fit-content"
            scrollbar={"hidden"}
          >
            <CourseCard {...courseContent[0]} />
            <DottedArrow />
            <CourseCard {...courseContent[1]} />
          </HStack>
        </VStack>

        <Box hideBelow={"lg"}>
          <DottedArrow />
        </Box>

        <VStack align="stretch" mdDown={{ w: "full" }} gap={6} flex="1.5">
          <Heading size="xl" color="fg">
            Module 2
          </Heading>
          <HStack
            // align="stretch"
            gap={{ base: 3, md: 6 }}
            overflowX={"auto"}
            overflowY={"clip"}
            h="fit-content"
            scrollbar={"hidden"}
          >
            <CourseCard {...courseContent[2]} />
            <DottedArrow />
            <CourseCard {...courseContent[3]} />
            <DottedArrow />
            <CourseCard {...courseContent[4]} />
          </HStack>
        </VStack>
      </HStack>
    ),
  },
  {
    title: "Value of Carbon Literacy",
    body: (
      <SimpleGrid
        as="ul"
        textAlign={"center"}
        gap={[4, 8]}
        columns={[2, 3]}
      >
        {valueOfCLT.map(({ label, icon: Icon }) => (
          <VStack as="li" key={label} gap={4} mt={5}>
            <Icon size="2xl" color="primary" />
            <Text maxW={"40"} lineHeight={"shorter"}>
              {label}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    ),
  },
  {
    title: "Why WasteVest?",
    body: `WasteVest is an accredited Carbon Literacy training provider committed to building climate literacy across Africa.

Our approach combines internationally recognised Carbon Literacy standards with practical African case studies, interactive learning and circular economy solutions that participants can immediately apply within their organisations and communities.

Every session is designed to move participants beyond awareness into practical climate action.`,
  },
];
