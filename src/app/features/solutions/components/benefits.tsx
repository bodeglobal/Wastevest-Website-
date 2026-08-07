import SectionTitleTag from "@/components/section-tag";
import {
  Box,
  Button,
  Container,
  HStack,
  IconProps,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { SectionTitle } from "./HeadingText";
import ArrowRight from "@/components/arrow-right";
import { WVIcons } from "@/components/icons";
import { JSX } from "react/jsx-runtime";

type Props = {
  title: string;
  data?: {
    icon?: (props: IconProps) => JSX.Element;
    title: string;
    description: string;
  }[];
};

export default function Benefits({ title, data }: Props) {
  return (
    <Box as="section" bg="#031124">
      <Container py={[10, null, 100]} color="white">
        <SectionTitleTag color="primary">Benefits</SectionTitleTag>
        <SectionTitle mt={5}>{title}</SectionTitle>

        <SimpleGrid columns={[2, 2, 4]} mt={[8, null, 16]}>
          {(data ?? Array.from({ length: 8 })).map((item, idx) => {
            return (
              <Box key={idx} rounded={"xl"} p={4} py={6}>
                {item.icon ? (
                  <item.icon size={"xl"} color="primary" />
                ) : (
                  <WVIcons.Asterisk color="primary" size="xl" />
                )}
                <Text my={3} textTransform={"capitalize"} fontSize={"xl"}>
                  {item.title ?? "Annual Report"}
                </Text>
                <Text color={"white/80"}>
                  {item.description ??
                    "Establish a consistent and effective sustainability reporting process."}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>

        <HStack
          bg="primary/10"
          rounded="3xl"
          p={[8]}
          mt={[10, null, 20]}
          justifyContent={"space-between"}
        >
          <Text maxW={"44"} fontFamily={"heading"} fontSize={"xl"}>
            Lets get Started Join the Training.
          </Text>

          <Button colorPalette={"secondary"}>
            Get Started <ArrowRight />
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
