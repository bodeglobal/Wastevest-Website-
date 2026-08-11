import SectionTitleTag from "@/components/section-tag";
import WVLink from "@/components/wv-link";
import { getPartnershipMailto } from "@/lib/partnership-email";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function JoinMovement() {
  return (
    <Box as="section" id="join-the-movement">
      <Container py={[10, null, 100]}>
        <SectionTitleTag color="primary">Join the Movement</SectionTitleTag>
        <Heading
          mt={4}
          size={["2xl", "4xl"]}
          maxW={"lg"}
          wordBreak={"break-word"}
        >
          Africa's just transition is a team sport. Pick your position.
        </Heading>

        <SimpleGrid
          columns={[2, null, null, 4]}
          mt={20}
          borderWidth={"thin"}
          rounded={"2xl"}
          bg="border"
          gap={"1px"}
          overflow={"hidden"}
        >
          {items.map((item, i) => {
            return (
              <Flex
                key={i}
                p={6}
                // bg="bg"
                transition=".3s ease-out"
                flexDir={"column"}
                justifyContent={"space-between"}
                bg={`url('/assets/illustrations/wave-lines.svg') {colors.bg}`}
              >
                <Text fontSize={"xl"}>{item.label}</Text>
                <Text my={10} color="fg.muted" fontSize={"sm"}>
                  {item.description}
                </Text>
                <WVLink
                  href={item.action.href}
                  fontWeight={"600"}
                  wordBreak={"keep-all"}
                  border={"none"}
                  fontSize={{base: "sm", sm: "inherit"}}
                  targetBlank
                >
                  {item.action.label}
                </WVLink>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

/** DATA */

const items = [
  {
    label: "Volunteer",
    description:
      "Join local cleanups, school visits and community sorting days.",
    action: {
      label: "Sign Up",
      href: "/volunteer",
    },
  },
  {
    label: "School",
    description:
      "Bring climate literacy into your classroom with our free teacher toolkit.",
    action: {
      label: "Register your School",
      href: getPartnershipMailto("school"),
    },
  },
  {
    label: "Business",
    description: "Onboard your team onto RouteBeacon and offset from source.",
    action: {
      label: "Start onboarding",
      href: getPartnershipMailto("business"),
    },
  },
  {
    label: "Partners",
    description:
      "Governments, NGOs and funders let's build something at scale.",
    action: {
      label: "Email the team",
      href: getPartnershipMailto(),
    },
  },
];
