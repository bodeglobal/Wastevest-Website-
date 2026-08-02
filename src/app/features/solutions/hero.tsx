import SectionTitleTag from "@/components/section-tag";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Hero({
  label,
  title,
  description,
  actions,
  banner,
}: {
  label: string;
  title: string;
  description: string;
  actions: ReactNode;
  banner: ReactNode;
}) {
  return (
    <Box as="section">
      <Container centerContent textAlign={"center"} py={100}>
        <SectionTitleTag color="primary">{label}</SectionTitleTag>
        <Heading
          my={6}
          size={{ mdDown: { _portrait: "5xl", _landscape: "7xl" }, md: "7xl" }}
          fontSize={{
            mdDown: { _portrait: "5xl", _landscape: "7xl" },
            md: "7xl",
          }}
          maxW={"4xl"}
        >
          {title}
        </Heading>
        <Text maxW={"3xl"} fontSize={["md", "xl"]}>
          {description}
        </Text>

        <Box mt={10}>{actions}</Box>
        <Box mt={28} bg="bg.muted" h="md" w="full">
          {banner}
        </Box>
      </Container>
    </Box>
  );
}
