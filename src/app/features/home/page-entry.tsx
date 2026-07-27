"use client";
import AboutWV from "./sections/about-wv";
import { FinalCTA } from "@/components/footer/final-cta";
import NavigationBar from "@/components/navbar/navbar";
import { Center, Heading } from "@chakra-ui/react";
import { motion } from "motion/react";
import Trusties from "../about/sections/trusties";
import Quote from "./sections/quote";
import WhatWeDo from "./sections/what-we-do";
import FeaturedPlatform from "./sections/featured-platform";
import ImpactCount from "../about/sections/impact-count";
import Extra from "./sections/extra";
import JoinMovement from "./sections/join-movement";
import Voices from "./sections/voices";

export default function HomePageEntry() {
  return (
    <>
    <NavigationBar />
      <Center minH="svh">
        <Heading asChild pos={"relative"}>
          <motion.h1
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
          >
            Home Content
          </motion.h1>
        </Heading>
      </Center>
      <Quote />
      <Trusties />
      <AboutWV />
      <WhatWeDo />
      <FeaturedPlatform />
      <ImpactCount />
      <Extra />
      <JoinMovement />
      <Voices />
      <FinalCTA />
    </>
  );
}
