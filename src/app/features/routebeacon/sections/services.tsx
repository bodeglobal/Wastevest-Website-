import { SchedulePickup, ScheduleRecyling } from "@/components/btns";
import SectionTitleTag from "@/components/section-tag";
import { Box, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function Services() {
  return (
    <Box as="section">
      <Container centerContent py={[10, null, 200]}>
        <SectionTitleTag
          showBars={false}
          color={"primary"}
          textAlign={"center"}
          fontWeight={"normal"}
        >
          Services
        </SectionTitleTag>
        <Heading
          textTransform={"capitalize"}
          size={["4xl"]}
          my={4}
          maxW={"2xl"}
          textAlign={"center"}
        >
          Built for waste collection and recycling
        </Heading>

        <HStack
          mt={10}
          gap={10}
          mdDown={{ flexDir: "column" }}
          alignItems={"stretch"}
        >
          <CardOne
            title="Recyclables Pickup"
            description="Request pickup of sorted recyclables and connect to trusted recovery
        paths"
            actions={
              <ScheduleRecyling showArrow colorPalette={"blue"} mt={5} />
            }
          />

          <CardOne
            title="Waste & Pickup Recycling"
            description="We provide structured collection services for general waste and
recyclable materials across homes, offices, estates, and businesses."
            actions={
              <SchedulePickup
                colorPalette={"primary"}
                color="primary"
                variant={"outline"}
                mt={5}
                borderColor={"primary"}
              />
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
      flex={1}
      maxW={"xl"}
      //   spaceY={8}
      flexDir={"column"}
      _hover={{ borderColor: "primary", bg: "primary/10" }}
      transition={"all .4s ease-in-out"}
      //   justifyContent={"space-between"}
    >
      <Text
        fontSize={"xl"}
        // fontWeight={"medium"}
        color="primary"
        textTransform={"uppercase"}
      >
        {title}
      </Text>
      <Text color="fg.muted" fontSize={"sm"} maxW={["9/12"]} h={"full"} py={5}>
        {description}
      </Text>
      <Box>{actions}</Box>
    </Flex>
  );
}
