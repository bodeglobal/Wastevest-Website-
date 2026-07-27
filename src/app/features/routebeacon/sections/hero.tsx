import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box as="section">
      <Container
        textAlign={"center"}
        centerContent
        justifyContent={"center"}
        pb={0}
        pt={[110, null, 180]}
        // minH={"svh"}
        pos="relative"
      >
        <Badge
          px={4}
          py={2}
          bg="primary"
          color="white"
          rounded={"full"}
          textTransform={"uppercase"}
        >
          Powered by RouteBeacon™
        </Badge>
        <Heading
          size={["4xl", "6xl"]}
          maxW="2xl"
          textTransform={"capitalize"}
          my={4}
        >
          Request waste & recycling in minutes
        </Heading>
        <Text color={"fg.muted"} maxW={"sm"} mt={5} fontFamily={"heading"}>
          Schedule pickups, manage recyclables, and connect with trusted
          collection partners.
        </Text>

        <ButtonGroup mt={9}>
          <Button colorPalette={"blue"}>Schedule Pickup</Button>
          <Button variant={"outline"}>Become a Partner</Button>
        </ButtonGroup>

        <Box asChild w={"xl"}>
          <Image
            src="/assets/images/routebeacon-wa-demo.png"
            alt=""
            width={1080}
            height={1080}
          />
        </Box>
      </Container>
    </Box>
  );
}
