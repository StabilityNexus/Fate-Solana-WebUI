"use client";

import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import features from "@/constants/Features";

export default function AboutSection() {
  return (
    <section
      id="features"
      className="relative pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-36 lg:pb-32 bg-white dark:bg-black"
    >
      {/* Visible gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white to-neutral-100 dark:from-black dark:to-neutral-900 opacity-80" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 relative z-10">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-fate fate-title mb-8 sm:mb-10 lg:mb-12">
          The Future of{" "}
          <br className="hidden sm:block" />
          Prediction Markets
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-2xl sm:rounded-3xl bg-white/40 dark:bg-[#0b0b0b]/50 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 lg:p-10 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CardHeader className="space-y-4 sm:space-y-6 p-0">
                <div className="flex justify-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-neutral-900 dark:text-white leading-tight">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}