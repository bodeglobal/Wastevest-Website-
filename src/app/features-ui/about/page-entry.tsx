"use client";
import NavigationBar from "@/components/navbar/navbar";
import { Center, Heading } from "@chakra-ui/react";
import { motion } from "motion/react";
import AboutWV from "./sections/about-wv";
import VisionMission from "./sections/vison-mission";
import { FinalCTA } from "@/components/footer/final-cta";
import ImpactCount from "./sections/impact-count";
import TheTeam from "./sections/team";
import WhatWeDo from "./sections/what-we-do";
import HeroSection from "./sections/hero";
import Quote from "./sections/quote";
import FeaturedPlatform from "../home/sections/featured-platform";

export default function AboutPageEntry() {
  return (
    <>
      <header>
        <NavigationBar bg="bg" bgOpacity={70} />
        <HeroSection />
      </header>
      <main>
        <Quote />
        <AboutWV variant="subtle" />
        <VisionMission />
        <WhatWeDo mode="full" />
        <FeaturedPlatform />
        <TheTeam />
        <ImpactCount />
        <FinalCTA />
      </main>
    </>
  );
}
