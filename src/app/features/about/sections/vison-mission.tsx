import { WVIcons } from "@/components/icons";
import {
  Box,
  Card,
  Center,
  Container,
  HStack,
  IconProps,
} from "@chakra-ui/react";
import { JSX, ReactElement } from "react";

export default function VisionMission() {
  return (
    <Box as="section" py={150} bg="black">
      <Container centerContent>
        <HStack
          w="full"
          gap={[10]}
          mdDown={{ flexDir: "column" }}
          alignItems={"stretch"}
        >
          <DecorCard
            icon={WVIcons.Binoculars}
            bgUrl={`/assets/illustrations/wave-lines-dark.svg`}
            bgColor="{colors.primary}"
            title={"Vision"}
            description={
              "An Africa where waste becomes opportunity through circular innovation."
            }
          />
          <DecorCard
            icon={WVIcons.Crosshair}
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
  icon,
  title,
  description,
  bgUrl,
  bgColor,
}: {
  bgUrl: string;
  bgColor: string;
  title: string;
  description: string;
  icon: (props: IconProps) => JSX.Element;
}) {
  const Icon = icon;

  return (
    <Card.Root
      // bg={`url("${bgUrl}"), ${bgColor}`}
      // maxW={[null, null, null, "md"]}
      flex={1}
      rounded={"2xl"}
      overflow={"hidden"}
      flexDir={"row"}
      alignItems={"center"}
      
      border={"none"}
      p={4}
      gap={5}
    >
      <Center boxSize={[28, null, null, 40]} color={"white"} fontSize={"xl"}>
        <Icon  />
      </Center>
      <Card.Body
        p={0}
        // bgRepeat={"repeat"}
        fill={"purple"}
        // justifyContent={"space-between"}
      >
        <Card.Title  fontFamily="heading" fontSize={["3xl", null, "5xl"]} color="white">
          {title}
        </Card.Title>
        <Card.Description maxW="sm" mt={6} fontSize={"md"} fontWeight={500} color="white">
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
