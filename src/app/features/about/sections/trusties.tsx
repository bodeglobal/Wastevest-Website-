import { Box, Center, HStack, Text } from "@chakra-ui/react";
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
    <Box as="section" py={20}>
      <Text textAlign={"center"}>Trusted by partners across the continent</Text>
      <HStack
        // bg="red"
        justifyContent={[null, null, "center"]}
        w="full"
        mt={16}
        gap={10}
        overflowX={"auto"}
        px={10}
        py={4}
      >
        {list.map((item, i) => {
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
      </HStack>
    </Box>
  );
}
