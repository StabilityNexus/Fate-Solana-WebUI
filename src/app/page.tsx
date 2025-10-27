"use client";

import { useRef } from "react";
import AboutSection from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/layout/Navbar";
import StickyCursor from "@/components/StickyCursor";
import HeroWrapper from "@/components/Home/HeroWrapper";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const stickyRef = useRef<HTMLElement | null>(null);

  return (
    <main className="relative h-[200vh]">
      <StickyCursor stickyRef={stickyRef} />
      <Navbar />
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <AboutSection />
      <Footer />
    </main>
  );
}
