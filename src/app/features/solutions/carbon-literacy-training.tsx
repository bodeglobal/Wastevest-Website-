import { BookConsult, PartnerWithUs } from "@/components/btns";
import NavigationBar from "@/components/navbar/navbar";
import { ButtonGroup } from "@chakra-ui/react";
import Hero from "./hero";

export default async function CarbonLiteracyTrainingPageEntry() {
  return (
    <>
      <NavigationBar pos="relative" />
      <Hero
        label="Service 03"
        title="Carbon Literacy Training"
        description="Understand climate change and learn how to reduce your carbon footprint through this Carbon Literacy Project accredited training. Join WasteVest Technologies Limited to become a Certified Carbon Literate."
        actions={
          <ButtonGroup>
            <BookConsult showArrow>Get Started</BookConsult>
            <PartnerWithUs borderColor={"tertiary"} variant="outline">Become a Partner </PartnerWithUs>
          </ButtonGroup>
        }
        banner={<></>}
      />
    </>
  );
}
