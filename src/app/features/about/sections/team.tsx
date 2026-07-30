import SectionTitleTag from "@/components/section-tag";
import WVLogo from "@/components/wv-logo";
import { Box, Center, Container, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function TheTeam() {
  return (
    <Box as="section" id="team">
      <Container py={20} >
       
        <Center pos="relative"  py={[10, null, 20]} flexDir={"column"} textAlign={"center"}>

          <SectionTitleTag color="primary">The Team</SectionTitleTag>
          <Heading maxW={"lg"} size={["4xl"]} mt={5}>
            A small, senior team with roots across the continent.
          </Heading>
          <Text maxW={"xs"} mt={5} lineHeight={"short"}>
            Operators, educators, engineers and storytellers. We hire slowly and
            stay close to the work.
          </Text>


           <Box asChild hideBelow={"sm"} pos="absolute" w={[40, 48, null, "3xs"]} left={0} bottom={0} aspectRatio={"golden"} rounded={"md"} objectFit={"cover"} objectPosition={"top"}>
          <Image src="/assets/images/teams/five.webp" alt="" width={1080} height={1080} />
        </Box>
        <Box asChild hideBelow={"sm"} pos="absolute" w={[40, 48, null, "3xs"]} top={0} right={0} aspectRatio={"golden"} rounded={"md"} objectFit={"cover"} objectPosition={"top"}>
          <Image src="/assets/images/teams/two.webp" alt="" width={1080} height={1080} />
        </Box>

        <HStack hideFrom={"sm"} mt={10}>
          <Box asChild  w={[40, 48, null, "3xs"]} aspectRatio={"golden"} rounded={"md"} objectFit={"cover"} objectPosition={"top"}>
          <Image src="/assets/images/teams/five.webp" alt="" width={1080} height={1080} />
        </Box>
        <Box asChild  w={[40, 48, null, "3xs"]} aspectRatio={"golden"} rounded={"md"} objectFit={"cover"} objectPosition={"top"}>
          <Image src="/assets/images/teams/two.webp" alt="" width={1080} height={1080} />
        </Box>
        </HStack>
        </Center>

        <Center mt={[10]} rounded={"4xl"} p={[20, null, 40]} bg={`url('/assets/illustrations/wave-lines-dark.svg'), {colors.primary}`}>
          <WVLogo filter={"brightness(0) invert(100%)"} w={[36, null, 52]} />
        </Center>
      </Container>
    </Box>
  );
}
