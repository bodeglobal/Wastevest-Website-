import NavigationBar from "@/components/navbar/navbar";
import { ButtonGroup, Center, Heading, Text } from "@chakra-ui/react";
import Hero from "./hero";
import { BookConsult, PartnerWithUs } from "@/components/btns";

export default async function CommunityEngagementPageEntry() {
  return (
    <>
      <NavigationBar pos="relative" />
      <Hero
        label="Service 02"
        title="Circular Economy"
        description="Circularity isn't just about recycling. It's about redesigning the way materials move through an organisation so that less is wasted, more value is recovered and fewer carbon emissions are created."
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
