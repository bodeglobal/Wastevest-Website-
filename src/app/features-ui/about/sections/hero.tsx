import AnimatedTrash from "@/components/animted-trash";
import { BookConsult, PartnerWithUs } from "@/components/btns";
import WVLink from "@/components/wv-link";
import {
  Box,
  ButtonGroup,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box as="section" bg="primary">
      <Container
        asChild
        color="white"
        textAlign={"center"}
        py={[100, 300]}
        smDown={{ minH: "svh" }}
        h="full"
        // minH={"svh"}
      >
        <Center flexDir={["column"]} maxW={"3xl"}>
          <Heading size={["4xl", null, "7xl"]} fontSize={["4xl", null, "7xl"]}>
            A Pan-African climate organization.
          </Heading>
          <Text mt={5} fontSize={"lg"}>
            WasteVest builds technology, partnerships, and climate literacy
            programs that transform waste into value helping communities
            participate in a more circular, resilient future.
          </Text>

          <ButtonGroup mt={16}>
            <BookConsult showArrow colorPalette="secondary" />
            <PartnerWithUs
              colorPalette="secondary"
              variant={"outline"}
              color={"secondary.500"}
              _hover={{bg: "secondary/10"}}
            />
          </ButtonGroup>
        </Center>
      </Container>
    </Box>
  );
}
