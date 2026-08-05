import SectionTitleTag from "@/components/section-tag";
import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import { SectionTitle } from "../components/HeadingText";
import Image from "next/image";

export default function Certification() {
  return (
    <Box as="section" py={100} borderYWidth={"thin"}>
      <Container bg="primary" color="white" py={10} rounded="3xl">
        <HStack gap={10} mdDown={{ alignItems: "start", flexDir: "column" }}>
          <Box flex={1}>
            <SectionTitle>Certification</SectionTitle>

            <Box mt={5} maxW={"xl"} fontWeight={500}>
              <Text>
                This course is accredited by The Carbon Literacy Project and
                delivered by WasteVest Technologies Limited, an accredited
                Carbon Literacy training provider. Certification is awarded
                following:
              </Text>

              <Box
                as="ul"
                listStyle={"inside"}
                _marker={{ color: "red" }}
                spaceY={2}
                my={4}
              >
                <Text as="li">Full participation in the course</Text>
                <Text as="li">Submission of a completed Evidence Form</Text>
                <Text as="li">Approval by The Carbon Literacy Project</Text>
              </Box>
              <Text>
                Successful participants will receive an official Carbon Literacy
                Certificate.
              </Text>
            </Box>

            <Button mt={10} colorPalette={"secondary"} color="primary">
              Book an Inquiry Call
            </Button>
          </Box>

          <Box h={"sm"} w="sm" bg="bg.muted" asChild>
            <Image
              src={"/assets/images/poster.png"}
              alt="Certificate poster"
              width={1080}
              height={1080}
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
