import { Box, Container, Heading, ButtonGroup, Theme } from "@chakra-ui/react";
import { BookConsult, PartnerWithUs } from "../btns";

export function FinalCTA() {
  return (
    <Theme appearance="dark">
      <Box
        as="section"
        bg="linear-gradient(180deg, rgba(10, 10, 10, 0.5) 0%, rgba(10, 10, 10, 0.85) 100%),   url('/assets/images/final-cta.png')"
        bgPos={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        pos={"relative"}
      >
        <Container md={{ px: [20, null, null, 100] }} py={150}>
          <Heading size={["4xl", null, "6xl", "7xl"]} maxW={"3xl"}>
            Let's build Africa's circular future together.
          </Heading>
          <ButtonGroup mt={10} fontFamily={"body"}>
            <BookConsult showArrow colorPalette={"secondary"} />
            <PartnerWithUs
              borderColor={"white"}
              _hover={{ bg: "white/10" }}
              variant={"outline"}
            />
          </ButtonGroup>
        </Container>
      </Box>
    </Theme>
  );
}
