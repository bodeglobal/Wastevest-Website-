import { Container, HStack, Text } from "@chakra-ui/react";
import { WVIcons } from "../icons";
import WVLink from "../wv-link";
import SocialIcons from "../social-icons";

const socialLinks = [
  {
    label: "Instagram",
    shortLabel: "IG",
    href: "/follow/ig",
    icon: WVIcons.IG,
  },
  {
    label: "LinkedIn",
    shortLabel: "IN",
    href: "/follow/linkedin",
    icon: WVIcons.LinkedIn,
  },
  { label: "X", shortLabel: "X", href: "/follow/x", icon: WVIcons.X },
];

export default function TopNavbarBar() {
  return (
    <HStack
      display={{ base: "none", lg: "flex" }}
      bg="black"
      color="white"
      minH="10"
      fontSize="xs"
    >
      <Container>
        <HStack justify="space-between" gap={8}>
          <HStack gap={5} color="whiteAlpha.800" fontSize={"xs"}>
            <WVLink
              fontSize={"xs"}
              hideArrow
              border={"none"}
              href="mailto:hello@wastevest.com"
            >
              hello@wastevest.com
            </WVLink>
            <Text color="whiteAlpha.400">|</Text>
            <WVLink
              fontSize={"xs"}
              hideArrow
              border={"none"}
              href="tel:+2348060710484"
            >
              +234 806 071 0484
            </WVLink>
            <Text color="whiteAlpha.400">|</Text>
            <Text>Abuja · Nigeria</Text>
          </HStack>

          <HStack gap={4}>
            <Text
              color="whiteAlpha.700"
              fontSize="2xs"
              fontWeight="bold"
              letterSpacing="widest"
            >
              FOLLOW
            </Text>
            <SocialIcons size="xs" _hover={{bg: "bg.muted/10"}} />
          </HStack>
        </HStack>
      </Container>
    </HStack>
  );
}
