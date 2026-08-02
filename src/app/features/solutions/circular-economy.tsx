import NavigationBar from "@/components/navbar/navbar";
import { ButtonGroup, Center, Heading, Text } from "@chakra-ui/react";
import Hero from "./hero";
import { BookConsult, PartnerWithUs } from "@/components/btns";

export default async function CircularEconomyPageEntry() {
  return (
    <>
      <NavigationBar pos="relative" />
      <Hero
        label="Service 01"
        title="Circular Economy"
        description="Circularity isn't just about recycling. It's about redesigning the way materials move through an organisation so that less is wasted, more value is recovered and fewer carbon emissions are created."
        actions={
          <ButtonGroup>
            <BookConsult showArrow />
            <PartnerWithUs borderColor={"tertiary"} variant={"outline"} />
          </ButtonGroup>
        }
        banner={<></>}
      />
    </>
  );
}
