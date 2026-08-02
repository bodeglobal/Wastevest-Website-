import { WVIcons } from "@/components/icons";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Circle,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { motion } from "motion/react";
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
        asChild
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
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

          <Box pos="relative">
            <Box asChild w={"xl"}>
              <Image
                src="/assets/images/routebeacon-wa-demo.webp"
                alt="RouteBeacon WhatsApp Demo"
                width={1080}
                height={1080}
              />
            </Box>

            <Box
              p={2}
              pos="absolute"
              border="thin solid {colors.primary}"
              borderRadius="xl"
              backgroundColor="bg/90"

              top={[8, 100]}
              left={[4, 10]}
              rotate={"-11.66deg"}
              maxW={"36"}
              textAlign={"left"}
            >
              <Circle p={1} bg="primary" w="fit" color="white">
                <WVIcons.Trash size={"xs"} />
              </Circle>
              <Text
                mt={2}
                wordBreak={"break-all"}
                textTransform={"capitalize"}
                color="primary"
                fontSize={"10px"}
                fontFamily={"heading"}
              >
                Smart Route Optimization
              </Text>
              <Text mt={0.5} fontSize={"xx-small"}>
                Routes are optimised to cut delays, reduce missed pickups, and
                save fuel for our operatives.
              </Text>
            </Box>

            <Box
              p={2}
              pos="absolute"
              border="thin solid {colors.tertiary.100}"
              borderRadius="xl"
              backgroundColor="primary"
              color="white"
              bottom={[50, 150]}
              right={[4, 14]}
              rotate={"11.66deg"}
              maxW={"36"}
              textAlign={"left"}
            >
              <Circle p={1} bg="white" w="fit" color="primary">
                <WVIcons.Vector size={"xs"} />
              </Circle>
              <Text
                mt={2}
                wordBreak={"break-all"}
                textTransform={"capitalize"}
                fontSize={"10px"}
                fontFamily={"heading"}
              >
                Reliable Waste Pickup
              </Text>
              <Text mt={0.5} fontSize={"xx-small"}>
                Request waste collection in minutes. Pickups can be scheduled or
                on demand.
              </Text>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
