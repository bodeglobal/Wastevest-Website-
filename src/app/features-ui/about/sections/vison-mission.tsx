import { WVIcons } from "@/components/wv-icons";
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
    <Box as="section" py={[10, null, 20]} bg="black">
      <Container centerContent>
        <HStack
          w="full"
          gap={{base: 10, md: 5}}
          mdDown={{ flexDir: "column" }}
          alignItems={"stretch"}
        >
          <DecorCard
            icon={WVIcons.Binoculars}
            bgUrl={`/assets/illustrations/wave-lines-dark.svg`}
            bgColor="{colors.primary}"
            title={"Vision"}
            description={
              "An Africa where climate-conscious individuals, businesses and circular innovation create thriving communities."
            }
          />
          <DecorCard
            icon={WVIcons.Crosshair}
            bgUrl={`/assets/illustrations/wave-lines.svg`}
            bgColor="black"
            title={"Mission"}
            description={
              "To equip 1,000,000 businesses, workforce professionals and communities with Carbon Literacy, enable the recovery of 1,000,000 tonnes of recyclable materials, and create sustainable waste collection systems that deliver environmental and economic value by 2030"
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
      flexDir={{base: "column", lg:"row"}}
      alignItems={{base: "start",lg:"center"}}

      border={"none"}
      p={4}
      gap={5}
    >
      <Center color={"white"} fontSize={"xl"}>
        <Icon w={{base: "20", md:"28"}} />
      </Center>
      <Card.Body
        p={0}
        // bgRepeat={"repeat"}
        fill={"purple"}
        // justifyContent={"space-between"}
        h="full"
      >
        <Card.Title
          fontFamily="heading"
          fontSize={["3xl", null, "5xl"]}
          color="white"
        >
          {title}
        </Card.Title>
        <Card.Description
          maxW="sm"
          mt={6}
          fontSize={"md"}
          fontWeight={500}
          color="white/80"
        >
          {description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}
