import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  Card,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Separator,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function VisionMission() {
  return (
    <Box as="section" py={100}>
      <Container centerContent>
        <HStack gap={[10]} mdDown={{ flexDir: "column" }} alignItems={"stretch"}>
          <DecorCard
            bgUrl={`/assets/illustrations/wave-lines-dark.svg`}
            bgColor="{colors.primary}"
            title={"Vision"}
            description={
              "An Africa where waste becomes opportunity through circular innovation."
            }
          />
          <DecorCard
            bgUrl={`/assets/illustrations/wave-lines.svg`}
            bgColor="black"
            title={"Mission"}
            description={
              "Build practical climate solutions that reduce waste, lower emissions and empower communities."
            }
          />
        </HStack>
      </Container>
    </Box>
  );
}

function DecorCard({
  title,
  description,
  bgUrl,
  bgColor,
}: {
  bgUrl: string;
  bgColor: string;
  title: string;
  description: string;
}) {
  return (
    <Card.Root
      bg={`url("${bgUrl}"), ${bgColor}`}
      maxW={[null, null, null, "md"]}
      flex={1}
      rounded={"2xl"}
      overflow={"hidden"}
      
    >
      <Card.Body
        p={10}
        // bgRepeat={"repeat"}
        fill={"purple"}
        // justifyContent={"space-between"}
      >
        <Card.Title fontSize={["3xl", null, "5xl"]} color="white">
          {title}
        </Card.Title>
        <Card.Description mt={10} fontSize={"md"} color="white">
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
