import WVLink from "@/components/wv-link";
import { Box, Container, Heading, Text, VStack, Wrap } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export default function LegalDocument({
  label,
  title,
  intro,
  sections,
  contactText,
}: {
  label: string;
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  contactText: string;
}) {
  return (
    <>
      <Box>
        <Container pt={{ base: 32, md: 40 }} pb={{ base: 12, md: 16 }}>
          <Text
            color="primary"
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="widest"
          >
            — {label.toUpperCase()} —
          </Text>
          <Heading mt={2} size={{ base: "3xl", md: "5xl" }} color="black">
            {title}
          </Heading>
        </Container>
      </Box>
      <Box as="section" bg="#031124" color="white">
        <Container py={{ base: 12, md: 20 }}>
          <VStack align="stretch" gap={10}>
            <Box lineHeight="tall" maxW="4xl">
              {intro}
            </Box>
            {sections.map((section) => (
              <Box key={section.title} maxW="4xl">
                <Heading size={["lg", "2xl"]} mb={4} fontWeight="normal">
                  {section.title}
                </Heading>
                <Box color="whiteAlpha.900" lineHeight="tall">
                  {section.content}
                </Box>
              </Box>
            ))}
            <Wrap
              gap={6}
              bg="#061b38"
              borderRadius="2xl"
              justifyContent={"space-between"}
              alignItems={"center"}
              p={{ base: 6, md: 8 }}
            >
              <Text
                fontFamily="heading"
                fontSize={{ base: "xl", md: "2xl" }}
                maxW="sm"
              >
                {contactText}
              </Text>
              <Text asChild color="primary" border={"none"}>
                <WVLink hideArrow href="mailto:hello@wastevest.com">
                  hello@wastevest.com
                </WVLink>
              </Text>
            </Wrap>
            <Text color="primary">Last updated: August 2026</Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
