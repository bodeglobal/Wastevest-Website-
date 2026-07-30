import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Box,
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

type Props = {
  variant?: "solid" | "subtle";
};

export default function AboutWV(props: Props) {
  const { variant = "solid" } = props;
  const isSolid = variant == "solid";
  return (
    <Box
      as="section"
      bg={isSolid ? "primary" : undefined}
      color={isSolid ? "white" : undefined}
      py={100}
    >
      <Container>
        <SimpleGrid columns={[1, null, 2]} gap={20} alignItems={"center"}>
          <Box flex={1} h="fit">
            <SectionTitleTag color={isSolid ? "white" : "primary"}>
              About Wastevest
            </SectionTitleTag>
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
          </Box>
          <Center>
            <Box
              bg={isSolid ? "white" : "primary"}
              w="md"
              rounded={"xl"}
              h={"xl"}
              boxShadow={`11px 12px 0px 0px ${isSolid ? "{colors.white/40}" : "{colors.primary/40}"}`}
              overflow={"hidden"}
              pos={"relative"}
            >
              <Box asChild w="full" h="full" objectFit={"cover"}>
                <Image
                  src={"/assets/images/gallery/founder2.webp"}
                  alt="Wastvest Founder"
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
                color={"white"}
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
