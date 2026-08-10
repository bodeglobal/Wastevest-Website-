import { BookConsult, PartnerWithUs } from "@/components/btns";
import { ButtonGroup } from "@chakra-ui/react";
import Image from "next/image";
import Hero from "../components/hero";
import OurApproach from "../components/our-approach";
import NavigationBar from "@/components/navbar/navbar";
import Benefits from "../components/benefits";
import { WVIcons } from "@/components/wv-icons";
import OurProcess from "../components/process";
import WhatToExpect from "../components/what-to-expect";

export default async function CommunityEngagementPageEntry() {
  return (
    <>
      <NavigationBar bg="white" pos="fixed" />
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

      <OurApproach
        data={[
          {
            title: "Action to Impact",
            body: `In 2023, WasteVest set out to solve a local waste challenge with a simple act of advocacy. That effort grew into partnerships, public awareness campaigns, and practical climate programs that now empower businesses, communities, and institutions across Africa.\n\nToday, we continue that mission by delivering Carbon Literacy training, circular economy solutions, and community-led climate action, helping people move beyond awareness to lasting impact.`,
            illustrationUrl: "/assets/illustrations/sustainable-electricity-gen.png",//"/assets/illustrations/hugging-planet-earth.png",
          },
        ]}
      />

      <Benefits
        title="What is Included"
        data={[
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Material Priorities",
            description:
              "Identify the sustainability issues that matter most to your business and stakeholders.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Reporting Framework",
            description:
              "Choose the right reporting standard for your organization's goals.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Reliable Data",
            description:
              "Build trusted systems for collecting and reporting sustainability data.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Investor Story",
            description:
              "Communicate your sustainability strategy with confidence and clarity.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Annual Reporting",
            description:
              "Establish a consistent and effective sustainability reporting process.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "NGX Compliance",
            description:
              "Align your reports with NGX sustainability disclosure requirements.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Climate Risk",
            description:
              "Understand climate risks and prepare for future challenges.",
          },
          {
            icon: WVIcons.GlobeHemisphereWest,
            title: "Leadership Coaching",
            description:
              "Equip sustainability leaders with practical skills and strategic guidance.",
          },
        ]}
      />

      <OurProcess
        process={[
          {
            title: "Discovery",
            description: "Regulator, investor and stakeholder landscape.",
          },
          {
            title: "Materiality",
            description: "Genuine, stakeholder-tested, not survey theatre.",
          },
          {
            title: "Architecture",
            description: "Data owners, cadence, controls, assurance path.",
          },
          {
            title: "Report",
            description: "Drafted with your team, not for them.",
          },
          {
            title: "Handover",
            description: "Playbook and a named owner for next year's cycle.",
          },
        ]}
      />
      <WhatToExpect
        benefits={[
          "A disclosure your legal team is comfortable defending publicly",
          "A materiality view your board actually references in decisions",
          // "An internal reporting cadence that doesn't collapse in Q4",
          // "A disclosure your legal team is comfortable defending publicly",
          // "A materiality view your board actually references in decisions",
          // "An internal reporting cadence that doesn't collapse in Q4",
        ]}
      />
    </>
  );
}
