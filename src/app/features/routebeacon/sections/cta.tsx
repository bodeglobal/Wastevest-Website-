import { BookBode } from "@/components/btns";
import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

export default function CTA() {
  return (
    <Box as="section">
      <Container py={100}>
        <HStack
          rounded={"4xl"}
          bg={`url('/assets/illustrations/wave-lines-dark.svg') {colors.primary}`}
          p={[8, null, 20]}
          gap={20}
          color={"white"}
          alignItems={[null, "end"]}
          justifyContent={["space-between"]}
          mdDown={{ flexDir: "column" }}
        >
          <Box>
            <SectionTitleTag fontSize={"xs"} color="white">
              Start today
            </SectionTitleTag>

            <Heading maxW={"lg"} size={["4xl", null, "6xl"]} my={[5, null, 10]}>
              Ready to Clear the Clutter
            </Heading>

            <Text maxW={"sm"}>
              Book a verified pickup, track your recyclables, and turn waste
              into value all from WhatsApp.
            </Text>
          </Box>

          <ButtonGroup>
            <Button bg="white" color="primary">
              Schedule a Pickup
            </Button>
            <BookBode
              showArrow
              color={"white"}
              _hover={{ bg: "white/10" }}
              variant={"ghost"}
            />
          </ButtonGroup>
        </HStack>
      </Container>
    </Box>
  );
}
