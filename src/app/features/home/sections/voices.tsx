import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Separator,
  Text,
} from "@chakra-ui/react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

export default function Voices() {
  return (
    <Box as="section">
      <Container py={100}>
        <HStack gap={20} mdDown={{flexDir: "column"}}>
          <Box w="full" maxW={"md"}>
            <SectionTitleTag color="primary">Voices</SectionTitleTag>

            <Box w={"xs"} height={60} bg="bg.muted" mt={10} />
          </Box>

          <Box flex={1}>
            <Text fontSize={"3xl"} color="#0A0A0A">
              “WasteVest didn't just talk about recycling, they built the system
              that finally made it work on our street. Our estate now diverts
              half its waste.”
            </Text>

            <Separator my={5} />

            <HStack justifyContent={"space-between"}>
              <Box fontSize={"xs"}>
                <Text fontWeight={600}>Mrs. Adaeze Okoro</Text>
                <Text color="#5A5A58">Estate Chair · Ikoyi, Lagos</Text>
              </Box>

              <HStack color="#5A5A58">
                <Text fontSize={"xs"}>01 / 03</Text>
                <ButtonGroup size="xs">
                  <IconButton variant={"outline"}>
                    <LuArrowLeft />
                  </IconButton>
                  <IconButton>
                    <LuArrowRight />
                  </IconButton>
                </ButtonGroup>
              </HStack>
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
