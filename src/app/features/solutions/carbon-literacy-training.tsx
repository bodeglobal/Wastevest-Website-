import { BookConsult, PartnerWithUs } from "@/components/btns";
import NavigationBar from "@/components/navbar/navbar";
import { ButtonGroup } from "@chakra-ui/react";
import Hero from "./hero";
import Image from "next/image";

export default async function CarbonLiteracyTrainingPageEntry() {
  return (
    <>
      {/* <NavigationBar pos="relative" /> */}
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IaDM4Kn-gtc?si=oBBSu9Mv0uzdwDm8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        }
      />
    </>
  );
}
