import { BookConsult, PartnerWithUs } from "@/components/btns";
import { ButtonGroup } from "@chakra-ui/react";
import Image from "next/image";
import Hero from "./hero";

export default async function CommunityEngagementPageEntry() {
  return (
    <>
      {/* <NavigationBar pos="relative" /> */}
      <Hero
        label="Service 02"
        title="Community Engagement"
        description="WasteVest started in a two-room office in Wuse in 2023 with a stubborn question and
a spreadsheet. Why, in a city that generates 2,500 tonnes of waste a day, does almost
none of it come back?"
        actions={
          <ButtonGroup>
            <BookConsult showArrow>Get Started</BookConsult>
            <PartnerWithUs borderColor={"tertiary"} variant="outline">
              Become a Partner
            </PartnerWithUs>
          </ButtonGroup>
        }
        banner={
          <>
            <Image
              src="/assets/images/gallery/g3.webp"
              alt=""
              objectFit="cover"
              objectPosition="center"
              width={1080}
              height={1080}
            />
          </>
        }
      />
    </>
  );
}
