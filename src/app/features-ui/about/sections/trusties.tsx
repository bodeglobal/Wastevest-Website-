import { Box, Center, HStack, Marquee, Text } from "@chakra-ui/react";
import Image from "next/image";

const list = [
  {
    title: "Nesrea",
    logoUrl: "/assets/logo/trusted/nesrea.png",
  },
  {
    title: "Naseni",
    logoUrl: "/assets/logo/trusted/naseni.png",
  },
  {
    title: "195 in 365",
    logoUrl: "/assets/logo/trusted/195-in-365.png",
  },
  {
    title: "Lighthouse",
    logoUrl: "/assets/logo/trusted/lighthouse.png",
  },
  {
    title: "Agro Science",
    logoUrl: "/assets/logo/trusted/agro-science.png",
  },
  {
    title: "Ecobarter",
    logoUrl: "/assets/logo/trusted/ecobarter.png",
  },
  {
    title: "DO",
    logoUrl: "/assets/logo/trusted/d-o.png",
  },
  {
    title: "Federal Ministry of Environment",
    logoUrl: "/assets/logo/trusted/fme.png",
  },
];

export default function Trusties() {
  return (
    <Box as="section" py={[10, null, 20]}>
      <Text textAlign={"center"}>Trusted by partners across the continent</Text>

      <Marquee.Root
        css={{ "--marquee-edge-color": "colors.bg" }}
        autoFill
        spacing="5rem"
        mt={16}
      >
        <Marquee.Edge side="start" />
        <Marquee.Edge side="end" />
        <Marquee.Viewport>
          <Marquee.Content
            gap={0}
            overflowX={"auto"}
            px={0}
            mx={0}
            py={4}
            // bg="red"
          >
            {list.map((item, i) => {
              return (
                <Marquee.Item
                  key={i}
                  alignItems={"center"}
                  asChild
                  // bg="red"
                  // px={0}
                >
                  <Center key={i + item.title} minW={20} w={[20, null, 28]}>
                    <Box asChild objectFit="contain">
                      <Image
                        width={1080}
                        height={1080}
                        src={item.logoUrl}

                        alt={`${item.title} Logo`}
                      />
                    </Box>
                  </Center>
                </Marquee.Item>
              );
              return (
                <Center key={i + item.title} minW={20} w={28}>
                  <Box asChild objectFit="contain">
                    <Image
                      width={1080}
                      height={1080}
                      src={item.logoUrl}

                      alt={`${item.title} Logo`}
                    />
                  </Box>
                </Center>
              );
            })}
          </Marquee.Content>
        </Marquee.Viewport>
        {/* <Marquee.Edge side="end" /> */}
      </Marquee.Root>
    </Box>
  );
}
