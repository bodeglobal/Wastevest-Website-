"use client";
import NavigationBar from "@/components/navbar/navbar";
import { Center, Heading } from "@chakra-ui/react";
import { motion } from "motion/react";
import HeroSection from "./sections/hero";
import Trusties from "../about/sections/trusties";
import ImpactCount from "./sections/impact-count";
import { FinalCTA } from "@/components/footer/final-cta";
import CTA from "./sections/cta";
import Services from "./sections/services";

export default function RoutebeaonPageEntry() {
  return (
    <>
      <header>
        <NavigationBar bg="bg" />
        <HeroSection />
      </header>
      <main>
        <Trusties />
        <Services />
        <ImpactCount />
        <FinalCTA />
        <CTA />
      </main>
    </>
  );
}
