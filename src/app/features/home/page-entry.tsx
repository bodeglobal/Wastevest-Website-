"use client";
import { FinalCTA } from "@/components/footer/final-cta";
import NavigationBar from "@/components/navbar/navbar";
import ImpactCount from "../about/sections/impact-count";
import Trusties from "../about/sections/trusties";
import AboutWV from "./sections/about-wv";
import Extra from "./sections/extra";
import FeaturedPlatform from "./sections/featured-platform";
import HeroSection from "./sections/hero";
import JoinMovement from "./sections/join-movement";
import Quote from "./sections/quote";
import Voices from "./sections/voices";
import WhatWeDo from "./sections/what-we-do";
import BookBodeCTA from "./sections/book-bode-cta";

export default function HomePageEntry() {
  return (
    <>
      <header>
        <NavigationBar bg="black" color="white" pos="fixed" top={0} left={0} />
        <HeroSection />
      </header>
      <main>
        <Quote />
        <Trusties />
        <AboutWV />
        <WhatWeDo />
        <FeaturedPlatform />
        <ImpactCount />
        <Extra />
        <JoinMovement />
        <BookBodeCTA />
        <Voices />
        <FinalCTA />
      </main>
    </>
  );
}
