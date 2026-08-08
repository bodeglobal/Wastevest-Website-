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
      py={[10, null, 100]}
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
            <Text my={10} lineHeight={"tall"} fontSize={"lg"}>
              WasteVest began with a question asked during the We Create Change
              program: "What change would you like to see in your community?"
              Our answer was simple: cleaner motor parks in Abuja.
              <br />
              <br />
              That answer became a public petition to the Abuja Environmental
              Protection Board (AEPB). But in trying to solve one problem, we
              discovered another: one of Africa's biggest environmental
              challenges was also one of its greatest untapped economic
              opportunities.
              <br />
              <br />
              Today, WasteVest builds technology, partnerships, and climate
              literacy programs that transform waste into value helping
              communities participate in a more circular, resilient future.
            </Text>

            <WVLink
              href="/starting-petition"
              targetBlank
              color={"primary"}
              fontWeight={"semibold"}
              fontSize={"lg"}
            >
              Read the Petition that started it all
            </WVLink>
          </Box>
          <Center flex={1} pos="relative" h={{base:"sm", md: "xl"}}>
            <Box
              bg={"primary"}
              // w={{ base: "11/12", md: "full" }}
              rounded={"3xl"}
              h="full"
              w="full"
              // mdDown={{ h: "xs", w: "11/12" }}
              boxShadow={`11px 12px 0px 0px {colors.primary/40}}`}
              overflow={"hidden"}
              // asChild
              pos={"relative"}
            >
              <Box asChild w="full" h="full" rounded="3xl" objectFit={"cover"}>
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
                left={{ base: 4 }}
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
                RVM Installation
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
