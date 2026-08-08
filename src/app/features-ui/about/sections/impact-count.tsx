import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import {
  Box,
  Circle,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ImpactData } from "./ImpactData";
import { useRef } from "react";
import { AnimateNumberCount } from "@/components/animate-number-count";

export default function ImpactCount() {
  const ref = useRef(null);
  return (
    <Box as="section">
      <Container py={[10, null, 100]}>
        <SectionTitleTag color="primary">Impact so far</SectionTitleTag>

        <Heading size={["4xl", null, "5xl"]} my={4}>
          Our Numbers and stories behind every one.
        </Heading>

        <WVLink href="/about/annual-report" targetBlank fontWeight={600} color={"primary"}>
          Read the Annual Report
        </WVLink>

        <SimpleGrid
          ref={ref}
          gap={[5, null, 10]}
          mt={10}
          columns={[3, 4, 5]}
          // justifyContent={["start", null, "space-between"]}
          // flexWrap={"wrap"}
        >
          {ImpactData.map((item, i) => {
            return (
              <Box
                key={i}
                py={[4, 14]}
                minW={["3/12", null, 28]}
                textAlign={"center"}
                // bg="red"
              >
                <Circle size={[16, 20]} bg="white" p={2} mx={"auto"}>
                  {<item.icon size={["md", "2xl"]} />}
                </Circle>
                <Text fontSize={["3xl", "4xl"]} fontFamily={"heading"} mt={3}>
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
