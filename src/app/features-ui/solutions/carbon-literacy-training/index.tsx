import { BookConsult, PartnerWithUs } from "@/components/btns";
import { Box, ButtonGroup, Span } from "@chakra-ui/react";
import Hero from "../components/hero";
import NavigationBar from "@/components/navbar/navbar";
import Benefits from "../components/benefits";
import { WVIcons } from "@/components/wv-icons";
import Pricing from "./pricing";
import Certification from "./certification";
import Faqs from "./faqs";
import AboutCLT from "./about";
import WVLink from "@/components/wv-link";

export default async function CarbonLiteracyTrainingPageEntry() {
  const resp = await fetch("https://api.frankfurter.dev/v2/rate/USD/NGN ", {
    method: "GET",
  });
  const resData = await resp.json();

  return (
    <>
      <NavigationBar bg="white" pos="fixed" />
      <Hero
        label="Service 03"
        title="Carbon Literacy Training"
        description={
          <>
            Understand climate change and learn how to reduce your carbon
            footprint through this{" "}
            <Span asChild fontSize={"inherit"}>
              <WVLink targetBlank href="https://carbonliteracy.com/what-is-carbon-literacy/" hideArrow>
                Carbon Literacy Project
              </WVLink>
            </Span>{" "}
            accredited training. Join WasteVest Technologies Limited to become a
            Certified Carbon Literate.
          </>
        }
        actions={
          <ButtonGroup>
            <BookConsult showArrow>Get Started</BookConsult>
            <PartnerWithUs borderColor={"tertiary"} variant="outline">
              Become a Partner
            </PartnerWithUs>
          </ButtonGroup>
        }
        banner={
          <Box w="full" h="full">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              src="https://www.youtube.com/embed/IaDM4Kn-gtc?si=oBBSu9Mv0uzdwDm8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Box>
        }
      />

      <AboutCLT />

      <Benefits
        title="What you will gain"
        data={[
          {
            icon: WVIcons.CloudSun,
            title: "Climate Knowledge",
            description:
              "Understand how climate change affects people and the planet.",
          },
          {
            icon: WVIcons.Trash,
            title: "Circular Thinking",
            description: "Learn the connection between waste and climate.",
          },
          {
            icon: WVIcons.Feather,
            title: "Carbon Awareness",
            description: "Understand and measure your carbon footprint.",
          },
          {
            icon: WVIcons.NuclearPlant,
            title: "Lower Emissions",
            description: "Reduce your impact through everyday actions.",
          },
          {
            icon: WVIcons.Asterisk,
            title: "Climate Leadership",
            description: "Build confidence to influence positive change.",
          },
          {
            icon: WVIcons.Calendar,
            title: "Action Planning",
            description: "Turn knowledge into practical climate commitments.",
          },
          {
            icon: WVIcons.Database,
            title: "Professional Certification",
            description:
              "Earn a globally recognised Carbon Literacy Certificate.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Global Community",
            description:
              "Join a growing network of certified climate champions.",
          },
        ]}
      />
      <Pricing rating={resData?.rate} />
      <Certification />
      <Faqs />
    </>
  );
}
