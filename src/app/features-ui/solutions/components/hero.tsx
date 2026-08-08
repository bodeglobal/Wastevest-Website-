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
      <Container centerContent textAlign={"center"} pt={[ 200]} pb={[10, null, null, 200]}>
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
        <Box
          viewTransitionName={"s-hero-banner"}
          mt={28}
          bg="bg.muted"
          h={{ base: "md", lg: "2xl" }}
          w="full"
          asChild
          objectFit={"cover"}
        >
          {banner}
        </Box>
      </Container>
    </Box>
  );
}
