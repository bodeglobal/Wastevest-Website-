import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";

export default function Services() {
  return (
    <Box as="section">
      <Container centerContent py={200}>
        <SectionTitleTag
          showBars={false}
          color={"primary"}
          textAlign={"center"}
          fontWeight={"normal"}
        >
          Services
        </SectionTitleTag>
        <Heading
          textTransform={"uppercase"}
          size={["4xl"]}
          my={4}
          maxW={"2xl"}
          textAlign={"center"}
        >
          Built for waste collection and recycling
        </Heading>

        <HStack mt={10} gap={10} mdDown={{ flexDir: "column" }} alignItems={'stretch'}>
          <CardOne
            title="Recyclables Pickup"
            description="Request pickup of sorted recyclables and connect to trusted recovery
        paths"
            actions={
              <Button colorPalette={"blue"} mt={5}>
                Schedule Recycling <LuArrowRight />
              </Button>
            }
          />

          <CardOne
            title="Waste & Pickup Recycling"
            description="We provide structured collection services for general waste and
recyclable materials across homes, offices, estates, and businesses."
            actions={
              <Button colorPalette={"primary"} variant={"outline"} mt={5}>
                Schedule a Pickup
              </Button>
            }
          />
        </HStack>
      </Container>
    </Box>
  );
}

function CardOne({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions?: ReactElement;
}) {
  return (
    <Flex
      p={[5, null, 6]}
      rounded={"4xl"}
      borderWidth={"thin"}
      maxW={"xl"}
    //   spaceY={8}
      flexDir={"column"}
    //   justifyContent={"space-between"}
    >
      <Text
        fontSize={"lg"}
        // fontWeight={"medium"}
        color="primary"
        textTransform={"uppercase"}
        
      >
        {title}
      </Text>
      <Text color="fg.muted" fontSize={"sm"} maxW={["9/12"]} h={"full"} py={5}>
        {description}
      </Text>
      <Box>
        {actions}
      </Box>
    </Flex>
  );
}
