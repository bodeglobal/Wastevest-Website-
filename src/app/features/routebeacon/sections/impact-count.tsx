import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ImpactData } from "../../about/sections/ImpactData";
import { LuArrowRight } from "react-icons/lu";
import { AnimateNumberCount } from "@/components/animate-number-count";
import { useRef } from "react";

export default function ImpactCount() {
  const ref = useRef(null);
  return (
    <Box as="section">
      <Container py={100}>
        <SectionTitleTag color="primary">Impact so far</SectionTitleTag>

        <Heading size={["2xl", null, "5xl"]} maxW={"xl"} my={6}>
          Smarter waste collection. Sustainable cities.
        </Heading>

        <ButtonGroup>
          <Button colorPalette={"primary"}>
            Request Pickup <LuArrowRight />
          </Button>
          <Button variant={"outline"}>Apply as a Service Partner</Button>
        </ButtonGroup>

        <SimpleGrid ref={ref} columns={[2, null, 5]} mt={10} flexWrap={"wrap"}>
          {ImpactData.map((item, i) => {
            return (
              <Box key={i} py={[4, 14]} textAlign={"center"}>
                <Text fontSize={"4xl"} fontFamily={"heading"}>
                  <AnimateNumberCount ref={ref} targetCount={item.value} />
                  {item.plus && "+"} {item.unit && ` ${item.unit}`}
                </Text>
                <Text color={"fg.muted"} fontSize={"xs"}>
                  {item.label}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
