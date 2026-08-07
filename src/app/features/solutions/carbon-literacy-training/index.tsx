import { BookConsult, PartnerWithUs } from "@/components/btns";
import { ButtonGroup } from "@chakra-ui/react";
import Hero from "../components/hero";
import NavigationBar from "@/components/navbar/navbar";
import Benefits from "../components/benefits";
import { WVIcons } from "@/components/icons";
import Pricing from "./pricing";
import Certification from "./certification";
import Faqs from "./faqs";
import AboutCLT from "./about";

export default async function CarbonLiteracyTrainingPageEntry() {
  const resp = await fetch("https://api.frankfurter.dev/v2/rate/USD/NGN ", {
    method: "GET",
  });

  console.log("CurrencyRate Response: ", resp);
  console.log("CurrencyRate Body: ", await resp.json());
  return (
    <>
      <NavigationBar bg="white" pos="fixed" />
      <Hero
        label="Service 03"
        title="Carbon Literacy Training"
        description="Understand climate change and learn how to reduce your carbon footprint through this Carbon Literacy Project accredited training. Join WasteVest Technologies Limited to become a Certified Carbon Literate."
        actions={
          <ButtonGroup>
            <BookConsult showArrow>Get Started</BookConsult>
            <PartnerWithUs borderColor={"tertiary"} variant="outline">
              Become a Partner
            </PartnerWithUs>
          </ButtonGroup>
        }
        banner={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IaDM4Kn-gtc?si=oBBSu9Mv0uzdwDm8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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
      <Pricing />
      <Certification />
      <Faqs />
    </>
  );
}
