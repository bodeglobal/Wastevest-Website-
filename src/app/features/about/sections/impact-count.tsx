import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import { Box, Container, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { ImpactData } from "./ImpactData";

export default function ImpactCount() {
  return (
    <Box as="section">
      <Container py={100}>
        <SectionTitleTag color="primary">Impact so far</SectionTitleTag>

        <Heading size={["2xl", null, "5xl"]} my={4}>
          Our Numbers and stories behind every one.
        </Heading>

        <WVLink href="" fontWeight={600} color={"primary"}>
          Read the Annual Report
        </WVLink>

        <SimpleGrid columns={[2, null, 5]} mt={10} flexWrap={"wrap"}>
          {ImpactData.map((item, i) => {
            return (
              <Box key={i} py={[4, 14]} textAlign={"center"}>
                <Text fontSize={"4xl"} fontFamily={"heading"}>
                  {item.value}
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


