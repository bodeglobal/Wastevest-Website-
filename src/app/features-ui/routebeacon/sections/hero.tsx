import { PartnerWithUs, SchedulePickup } from "@/components/btns";
import { WVIcons } from "@/components/icons";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Circle,
  Container,
  Heading,
  HStack,
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
        minH={["svh", null, "auto"]}
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
            scale={[0.8, null, 1]}
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
            <SchedulePickup colorPalette={"blue"}>
              Schedule Pickup
            </SchedulePickup>
            <PartnerWithUs variant={"outline"} href="/routebeacon/partner">
              Become a Partner
            </PartnerWithUs>
          </ButtonGroup>

          <Box pos="relative">
            <Box asChild w={"2xl"}>
              <Image
                src="/assets/images/routebeacon-wa-demo.webp"
                alt="RouteBeacon WhatsApp Demo"
                width={1080}
                height={1080}
              />
            </Box>

            <HStack
              p={2}
              pos="absolute"
              border="thin solid {colors.primary}"
              borderRadius="xl"
              backgroundColor="bg/90"

              top={[8, 100]}
              left={[4, 20]}
              rotate={"-11.66deg"}
              // maxW={"36"}
              textAlign={"left"}
              scale={[0.5, null, 1]}
            >
              <Circle p={1} bg="primary" w="fit" color="white">
                <WVIcons.Trash size={"sm"} />
              </Circle>
              <Text
                fontWeight={"semibold"}
                wordBreak={"break-all"}
                textTransform={"capitalize"}
                color="primary"
                fontSize={"10px"}
              >
                Smart Route Optimization
              </Text>
            </HStack>

            <HStack
              p={2}
              pos="absolute"
              border="thin solid {colors.tertiary.100}"
              borderRadius="xl"
              backgroundColor="primary"
              color="white"
              bottom={[50, 200]}
              right={[4, 28]}
              rotate={"11.66deg"}
              // maxW={"36"}
              textAlign={"left"}
              scale={[0.5, null, 1]}
            >
              <Circle p={1} bg="white" w="fit" color="primary">
                <WVIcons.Vector size={"sm"} />
              </Circle>
              <Text
                fontWeight={"semibold"}
                wordBreak={"break-all"}
                textTransform={"capitalize"}
                fontSize={"10px"}
              >
                Reliable Waste Pickup
              </Text>
            </HStack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
