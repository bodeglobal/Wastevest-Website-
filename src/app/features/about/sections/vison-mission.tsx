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
        <HStack gap={20} mdDown={{ flexDir: "column" }}>
          <DecorCard
            bg="primary"
            title={"Vision"}
            description={
              "An Africa where waste becomes opportunity through circular innovation."
            }
          />
          <DecorCard
            bg="black"
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
  bg,
}: {
  bg: string;
  title: string;
  description: string;
}) {
  return (
    <Card.Root bg={bg} maxW={"md"} rounded={"2xl"} overflow={"hidden"}>
      <Card.Body
        p={20}
        bg={`url('assets/illustrations/wave-lines.svg')`}
        bgRepeat={"repeat"}
        fill={"purple"}
      >
        <Card.Title fontSize={"3xl"} color="white">
          {title}
        </Card.Title>
        <Card.Description mt={4} color="white">
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
