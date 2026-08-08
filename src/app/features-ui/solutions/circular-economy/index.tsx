import { BookConsult, PartnerWithUs } from "@/components/btns";
import { ButtonGroup } from "@chakra-ui/react";
import Image from "next/image";
import Hero from "../components/hero";
import OurApproach from "../components/our-approach";
import NavigationBar from "@/components/navbar/navbar";
import Benefits from "../components/benefits";
import { WVIcons } from "@/components/icons";
import OurProcess from "../components/process";
import WhatToExpect from "../components/what-to-expect";

export default async function CircularEconomyPageEntry() {
  return (
    <>
      <NavigationBar bg="white" pos="fixed" />
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
        banner={
          <>
            <Image
              src="/assets/images/gallery/circular-econ.webp"
              alt=""
              objectFit="cover"
              objectPosition="center"
              width={1080}
              height={1080}
            />
          </>
        }
      />

      <OurApproach
        data={[
          {
            title: "Redesigning Material Flows",
            body: `We help organisations understand where materials enter, where waste occurs, and how it affects cost, efficiency, and environmental performance. \n\nThen we identify practical ways to reduce waste, recover value, and build circular systems that deliver lasting results.`,
            illustrationUrl:
              "/assets/illustrations/global-sustainability-recycling.png",
          },
          {
            title: "Sustainability That Works",
            body: `Sustainability should simplify operations, not add complexity.\n\nWe combine climate education, circular economy thinking, and practical implementation to help organisations reduce waste, improve performance, and create measurable environmental impact. Because sustainability isn't another department, it's a smarter way to do business.`,
            illustrationUrl:
              "/assets/illustrations/sustainable-electricity-gen.png",
            color: "#EFEFED",
          },
        ]}
      />

      <Benefits
        title="What is Included"
        data={[
          {
            icon: WVIcons.Trash,
            title: "Waste Assessment",
            description:
              "Analyse how materials move through your operations and identify improvement opportunities.",
          },
          {
            icon: WVIcons.Drop,
            title: "Material Recovery",
            description:
              "Increase reuse, resale, and recycling to reduce waste and recover value.",
          },
          {
            icon: WVIcons.UsersThree,
            title: "Team Training",
            description:
              "Equip your team with the skills and processes to sustain results.",
          },
          {
            icon: WVIcons.BeerBottle,
            title: "Vendor Optimisation",
            description:
              "Consolidate suppliers and improve procurement performance.",
          },
          {
            icon: WVIcons.Vector,
            title: "Smart Procurement",
            description:
              "Redesign purchasing strategies to reduce waste and costs.",
          },
          {
            icon: WVIcons.Buildings,
            title: "Business Case",
            description:
              "Measure financial impact and build a case for sustainable investment.",
          },
          {
            icon: WVIcons.MapPinSimpleArea,
            title: "Site Assessment",
            description:
              "Review operations through site visits and stakeholder interviews.",
          },
          {
            icon: WVIcons.Ranking,
            title: "Impact Reporting",
            description:
              "Track waste diversion and measure progress with regular reports.",
          },
        ]}
      />

      <OurProcess
        process={[
          {
            title: "Week 1",
            description:
              "Site walks, operator interviews, 12-month invoice review.",
          },
          {
            title: "Week 2-4",
            description:
              "Material-flow map, opportunity register, unit economics.",
          },
          {
            title: "Week 4+",
            description:
              "Interventions run by your team, weekly check-in for a quarter.",
          },
          {
            title: "Handover",
            description:
              "Playbook, dashboard, and a named successor on your team.",
          },
        ]}
      />
      <WhatToExpect
        benefits={[
          "20–45% diversion within two quarters on the target streams",
          "A defensible business case your CFO can sign off on",
          // "20–45% diversion within two quarters on the target streams",
          // "20–45% diversion within two quarters on the target streams",
          // "A defensible business case your CFO can sign off on",
          // "20–45% diversion within two quarters on the target streams",
        ]}
      />
    </>
  );
}
