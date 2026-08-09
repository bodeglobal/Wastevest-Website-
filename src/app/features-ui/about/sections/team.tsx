import SectionTitleTag from "@/components/section-tag";
import WVLogo from "@/components/wv-logo";
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { TeamProfile } from "./TeamProfile";

export default function TheTeam() {
  return (
    <Box as="section" id="team">
      <Container py={[10, null, 20]} centerContent>
          <HStack gap={{lg: 20}}  py={{lg: 20}}>
            <TeamProfile
            
            imgSize={"40"}
            hideBelow={"lg"}
            member={{
              profileUrl: "/assets/images/teams/bode.png",
              name: "Olabode Afurewaju",
              role: "Founder",
            }}
          />
        <Center pos="relative" flexDir={"column"} textAlign={"center"}>
          <SectionTitleTag color="primary">The Team</SectionTitleTag>
          <Heading maxW={"lg"} size={["4xl"]} mt={5}>
            A small, senior team with roots across the continent.
          </Heading>
          <Text maxW={"xs"} mt={5} lineHeight={"short"}>
            Operators, educators, engineers and storytellers. We hire slowly and
            stay close to the work.
          </Text>

        </Center>
          <TeamProfile
            hideBelow={"lg"}
            imgSize={"40"}
            member={{
              profileUrl: "/assets/images/teams/five.webp",
              name: "Timileyin Okunlola",
              role: "Programmes Lead",
            }}
          />
          </HStack>
        <VStack hideFrom={"lg"} mt={10} spaceY={4}>
          <TeamProfile
            w={["3xs", null, "3xs"]}
            // h="48"
            aspectRatio={1}
            rounded={"full"}
            objectFit={"cover"}
            objectPosition={"top"}
            member={{
              profileUrl: "/assets/images/teams/bode.png",
              name: "Olabode Afurewaju",
              role: "Founder",
            }}
          />
          <TeamProfile
            member={{
              profileUrl: "/assets/images/teams/five.webp",
              name: "Timileyin Okunlola",
              role: "Programmes Lead",
            }}
          />
        </VStack>

        <Center
          mt={[10]}
          rounded={"4xl"}
          w="full"
          p={[20, null, 36]}
          bg={`url('/assets/illustrations/wave-lines-dark.svg'), {colors.primary}`}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <WVLogo filter={"brightness(0) invert(100%)"} w={[60]} />
        </Center>
      </Container>
    </Box>
  );
}
