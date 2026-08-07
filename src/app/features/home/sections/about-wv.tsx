import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Box,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function AboutWV() {
  return (
    <Box as="section" bg={"primary"} color={"white"} py={[10, null, 100]}>
      <Container>
        <SimpleGrid columns={[1, 2]} gap={[10]} alignItems={"center"}>
          <Box h="fit">
            <SectionTitleTag color={"white"}>About Wastevest</SectionTitleTag>
            <Heading size="5xl" mt={10}>
              Turning Waste Into Africa's Greatest Opportunity
            </Heading>
            <Text my={10} lineHeight={"taller"} maxW={"xl"}>
              WasteVest is a Pan-African climate and sustainability organization
              driving Africa's just transition through innovative waste
              management, carbon reduction, and climate action solutions. We
              work at the intersection of environmental stewardship, circular
              economy innovation, and community empowerment to accelerate
              sustainable development and climate resilience across the
              continent. Industry: Environmental Services.
            </Text>

            <WVLink href="/about#team">Meet the team</WVLink>
          </Box>
          <Center>
            <Box
              bg={"white"}
              w={["full", null, "10/12"]}
              rounded={"xl"}
              h={["sm", null, "xl"]}
              boxShadow={`11px 12px 0px 0px {colors.white/40}`}
              pos={"relative"}
              overflow={"hidden"}
            >
              <Box asChild w="full" h="full" objectFit={"cover"}>
                <Image
                  src={"/assets/images/gallery/founder.webp"}
                  alt="Wastevest Founder"
                  width={1080}
                  height={1080}
                />
              </Box>

              <Text
                pos="absolute"
                bottom={4}
                left={4}
                rounded={"full"}
                bg="black/50"
                w="fit"
                px={4}
                py={2}
                fontSize={"xs"}
                backdropFilter={"auto"}
                backdropBlur={"sm"}
              >
                Olabode Afurewaju · Founder
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
