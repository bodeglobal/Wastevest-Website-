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
    <Box as="section" bg={"primary"} color={"white"} py={100}>
      <Container>
        <SimpleGrid columns={[1, null, 2]} gap={20} alignItems={"center"}>
          <Box flex={1} h="fit">
            <SectionTitleTag color={"white"}>About Wastevest</SectionTitleTag>
            <Heading size="4xl" mt={10}>
              Turning Waste Into Africa's Greatest Opportunity
            </Heading>
            <Text my={10} lineHeight={"taller"}>
              WasteVest is a Pan-African climate and sustainability organization
              driving Africa's just transition through innovative waste
              management, carbon reduction, and climate action solutions. We
              work at the intersection of environmental stewardship, circular
              economy innovation, and community empowerment to accelerate
              sustainable development and climate resilience across the
              continent. Industry: Environmental Services.
            </Text>

            <WVLink href="#about">Meet the team</WVLink>
          </Box>
          <Center>
            <Box
              bg={"white"}
              w="sm"
              rounded={"xl"}
              h={"xl"}
              boxShadow={`11px 12px 0px 0px {colors.white/40}`}
              pos={"relative"}
              overflow={"hidden"}
            >
              <Box asChild w="full" h="full" objectFit={"cover"}>
                <Image
                  src={"/assets/images/founder.png"}
                  alt=""
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
                Olabode Frank · Founder
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
