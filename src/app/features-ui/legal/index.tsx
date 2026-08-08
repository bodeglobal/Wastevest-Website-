import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Hero from "./components/hero";
import WVLink from "@/components/wv-link";

export default function LegalPage() {
  return (
    <>
      <Hero label="Our Legal" title="Legal" />
      <Box as="section" bg="#031124" color="white">
        <Container py={[10, null, 100]}>
          <VStack align="stretch" gap={12}>
            <Box maxW="3xl" lineHeight="tall">
              <Heading size="md" mb={5} fontWeight="normal">
                Using WasteVest
              </Heading>
              <Text>
                WasteVest is committed to building a cleaner, more accountable
                waste ecosystem through technology.
              </Text>
              <Text mt={5}>
                Our platform connects individuals, businesses, and waste
                recovery partners to make recycling and responsible waste
                management easier, more transparent, and more rewarding.
              </Text>
              <Text mt={5}>
                WasteVest operates in accordance with applicable Nigerian laws
                and environmental regulations and works with authorised partners
                where required. Information provided through WasteVest is
                intended to support responsible waste management and does not
                replace official regulatory guidance or professional advice.
              </Text>
              <Text mt={5}>
                By accessing or using WasteVest, you agree to use the platform
                lawfully, provide accurate information, and participate
                responsibly in our recycling and collection ecosystem.
              </Text>
            </Box>

            <Box bg="#061b38" borderRadius="2xl" p={{ base: 6, md: 8 }}>
              <HStack
                justify="space-between"
                align="end"
                gap={8}
                flexWrap="wrap"
              >
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "xl", md: "2xl" }}
                  maxW="sm"
                >
                  For legal enquiries, contact:
                </Text>
                <Text asChild color="primary" border="none">
                  <WVLink hideArrow href="mailto:hello@wastevest.com">
                    hello@wastevest.com
                  </WVLink>
                </Text>
              </HStack>
            </Box>

            <Text color="primary">Last updated: August 2026</Text>

            <Box>
              <Heading size="md" mb={5} fontWeight="normal">
                Related documents
              </Heading>
              <HStack align="stretch" gap={6} flexWrap="wrap">
                <LegalLink href="/legal/terms" title="Terms And Conditions">
                  The terms that govern your use of WasteVest and its services.
                </LegalLink>
                <LegalLink href="/legal/privacy" title="Privacy Policy">
                  How we collect, use and protect your personal information.
                </LegalLink>
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

function LegalLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: string;
}) {
  return (
    <Box
      asChild
      display="block"
      flex="1"
      minW={{ base: "full", md: "sm" }}
      p={{ base: 6, md: 8 }}
      bg="#061b38"
      borderRadius="2xl"
      border={"none"}
      _hover={{ bg: "#08244a", textDecoration: "none" }}
    >
      <WVLink href={href} hideArrow>
        <VStack align="start" gap={4}>
          <Heading size="lg" color={"white"}>
            {title}
          </Heading>
          <Text color="whiteAlpha.800" lineHeight="tall">
            {children}
          </Text>
          <Text color="primary">Read document →</Text>
        </VStack>
      </WVLink>
    </Box>
  );
}
