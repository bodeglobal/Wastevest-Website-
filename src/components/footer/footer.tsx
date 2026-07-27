import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  SimpleGrid,
  Text,
  Theme,
} from "@chakra-ui/react";
import Link from "next/link";
import { PartnerWithUs } from "../btns";
import { NavItem } from "../navbar/NavItem";
import { navItems } from "../navbar/navItems";
import WVLogo from "../wv-logo";
import { FinalCTA } from "./final-cta";

export default function Footer() {
  return (
    <>
      <Theme appearance="dark">        
        <Box
          as="footer"
          bg="linear-gradient(356.64deg, #0A0A0A 75.22%, #0F0E0E 107.94%)"
          color="white"
        >
          <Container py={20}>
            <HStack flexWrap={"wrap"} gap={20}>
              <Box maxW={"md"}>
                <WVLogo w={40} filter={"auto"} brightness={1} saturate={1} />
                <Text mt={7} fontSize={"sm"} color="fg.muted">
                  Get one considered email a month, field notes, new episodes
                  and what we're building next.
                </Text>

                <HStack
                  my={10}
                  borderWidth={"thin"}
                  borderColor="white"
                  _focusWithin={{
                    focusRing: "outside",
                    focusRingWidth: "thin",
                  }}
                  gap={0}
                  rounded={"full"}
                  p={1}
                >
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@company.com"
                    outline={"none"}
                    focusRing={"none"}

                    border={"none"}
                  />
                  <Button py={2} colorPalette="primary">
                    Subscribe
                  </Button>
                </HStack>
                <PartnerWithUs
                  showArrow
                  variant={"outline"}
                  borderColor={"white/50"}
                />
              </Box>

              <SimpleGrid columns={[1, 2, 3]} gap={5} flex={1}>
                <NavSection label="Explore" items={navItems} />
                <NavSection label="Others" items={navItems} />
                <NavSection label="Others" items={navItems} />
              </SimpleGrid>
            </HStack>
          </Container>
        </Box>
      </Theme>
    </>
  );
}

function NavSection({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <Box>
      <Text mb={5} textTransform={"capitalize"}>
        {label}
      </Text>

      <Box as="ul" spaceY={4}>
        {items.map((item) => {
          if (!item.href) return null;
          return (
            <Text key={item.href + item.label} as="li" color="fg.muted">
              <Link href={item.href}>{item.label}</Link>
            </Text>
          );
        })}
      </Box>
    </Box>
  );
}
