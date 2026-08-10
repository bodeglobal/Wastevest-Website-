import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Group,
  HStack,
  IconButton,
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
import WVLink from "../wv-link";
import { WhatWeDoData } from "@/app/features-ui/about/sections/what-we-do";
import { WVIcons } from "../wv-icons";
import SocialIcons from "../social-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear(); //Temporal.PlainDate.prototype.year
  return (
    <>
      <Theme appearance="dark">
        <Box
          as="footer"
          bg="linear-gradient(356.64deg, #0A0A0A 75.22%, #0F0E0E 107.94%)"
          color="white"
        >
          <Container py={20}>
            <Flex
              flexDir={["column", null, null, "row"]}
              // gapX={5}
              gap={20}
              // justifyContent={"space-between"}
              alignItems={"top"}
            >
              <GridItem maxW={"sm"} w="full" colSpan={[1, 2]}>
                <WVLogo w={40} filter={"brightness(0) invert(100%)"} />
                <Text mt={7} fontSize={"sm"} color="fg.muted" maxW={"sm"}>
                  Get one considered email a month, field notes, new episodes
                  and what we're building next.
                </Text>

                <HStack
                  mt={[8]}

                  borderWidth={"thin"}
                  borderColor="white"
                  maxW={"sm"}
                  // w="full"
                  _focusWithin={{
                    focusRing: "outside",
                    focusRingWidth: "thin",
                  }}
                  gap={0}
                  rounded={"full"}
                  // hidden
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
                  mt={[4 /* null, 8 */]}
                  showArrow
                  variant={"outline"}
                  borderColor={"white"}
                />
              </GridItem>
              <SimpleGrid flex={1} columns={[1, 2, 4]} gap={5} gapY={16}>
                {/* LINKS */}
                <NavSection label="Explore" items={navItems} />
                <NavSection
                  label="Solutions"
                  items={WhatWeDoData.map((item) => ({
                    label: item.title,
                    href: item.learnMoreUrl,
                  }))}
                />
                <NavSection
                  label="Learn"
                  items={[
                    { label: "Newsletter", href: "/newsletters" },
                    {
                      label: "Podcast",
                      href: "https://open.spotify.com/episode/39VXwD8ei2cQSq7TTFJHJA?si=LX49PLeXQuGFe0z1uKYvVA&utm_source=copy-link",
                    },
                    { label: "Legal", href: "/legal" },
                  ]}
                />
                <NavSection
                  label="Contact"
                  items={[
                    {
                      label: "hello@wastevest.com",
                      href: "mailto:hello@wastevest.com",
                    },
                    { label: "+234 806 071 0484", href: "tel:+2348060710484" },
                    { label: "Abuja · Nigeria" },
                  ]}
                />

                <Box>
                  <Text mb={5} textTransform={"capitalize"}>
                    Follow
                  </Text>
                  <SocialIcons />
                </Box>
              </SimpleGrid>
            </Flex>

            <HStack
              mt={20}
              borderTopWidth={"thin"}
              pt={8}
              justifyContent={"space-between"}
              fontSize={"sm"}
              flexDir={["column", null, "row"]}
              gap={10}
            >
              <Text>© {currentYear} WasteVest. All rights reserved.</Text>

              <HStack gap={6}>
                <WVLink href="/legal/privacy" hideArrow border={"none"} p={0}>
                  Privacy
                </WVLink>
                <WVLink href="/legal/terms" hideArrow border={"none"} p={0}>
                  Terms
                </WVLink>
                <WVLink href="/legal" hideArrow border={"none"} p={0}>
                  Legal
                </WVLink>
                <Text>Made with intention · Abuja</Text>
              </HStack>
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
          if (item.subMenuName) return null;
          return (
            <Text
              key={item.href + item.label}
              as="li"
              color="fg.muted"
              _hover={{ color: "fg" }}
            >
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                item.label
              )}
            </Text>
          );
        })}
      </Box>
    </Box>
  );
}
