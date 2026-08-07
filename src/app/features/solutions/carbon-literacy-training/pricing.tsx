"use client";
import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  Container,
  FormatNumber,
  HStack,
  SimpleGrid,
  Span,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { SectionTitle } from "../components/HeadingText";
import CurrencyOptions from "./currency-options";
import Link from "next/link";
import WVLink from "@/components/wv-link";

const currencyOpts = ["USD", "NGN"];

const pricings = [
  { label: "Students, NGOs, Charities...", value: 150 },
  { label: "SME & Private Companies", value: 150 },
  { label: "Large Businesses", value: 150 },
  { label: "Enterprise Organizations", value: 150, customizable: true },
];

export default function Pricing() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOpts.at(0));
  return (
    <Box as="section">
      <Container py={[10, null, 100]}>
        <SectionTitleTag color="primary">Pricing</SectionTitleTag>
        <SectionTitle mt={5}>Course Costs</SectionTitle>

        <Box mt={[8, null, 16]}>
          <Text fontWeight={"semibold"}>Course Fee Includes:</Text>
          <HStack
            justifyContent={"space-between"}
            flexDir={["column", null, "row"]}
            alignItems={{ md: "end" }}
            gap={10}
          >
            <Box
              as="ul"
              listStyle={"inside"}
              _marker={{ color: "red" }}
              spaceY={2}
              mt={4}
            >
              <Text as="li">Training materials</Text>
              <Text as="li">Assessment support</Text>
              <Text as="li">Evidence Form review</Text>
              <Text as="li">Carbon Literacy certification processing.</Text>
            </Box>
            <HStack justifyContent={"end"}>
              <CurrencyOptions
              options={currencyOpts.reverse()}
              selected={selectedCurrency!}
              onSelect={setSelectedCurrency}
            />
            </HStack>
          </HStack>
        </Box>

        <SimpleGrid columns={[2, null, 4]} gap={4} mt={[10, null, 20]}>
          {pricings.map((item, idx) => {
            return (
              <Box
                key={idx}
                p={3}
                borderStartWidth={"thin"}
                borderColor={"primary"}
              >
                <Text>{item.label}</Text>
                <Text fontWeight={"semibold"} fontSize={["2xl"]} mt={7} display={"flex"} alignItems={"center"} flexWrap={"wrap"}>
                  <FormatNumber
                    value={item.value}
                    style="currency"
                    currency={selectedCurrency}
                    currencyDisplay="narrowSymbol"
                    trailingZeroDisplay="stripIfInteger"
                  />

                  {item.customizable && (
                    <Span asChild ms={2} fontWeight={"normal"}>
                      <WVLink hideArrow href="" borderColor={"#EF7809"}>
                        Request a custom quote.
                      </WVLink>
                    </Span>
                  )}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
