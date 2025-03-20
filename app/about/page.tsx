'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Spotlight } from '@/components/ui/Spotlight';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-10">
      <Spotlight
        className="fixed -top-70 left-0 md:left-60 md:-top-0"
        fill="white"
      />
      <Navbar />

      <div className="max-w-[700px] mx-auto px-4 sm:px-6 pt-[100px] sm:pt-[130px]">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold flex items-center justify-center gap-2 sm:gap-3">
            Yo, I'm Kunj Ch <span className="text-3xl sm:text-4xl">🚀</span>
          </h1>
          <p className="text-base sm:text-xl text-white/60">
            Building my future, by grinding fucking hard. ⚡
          </p>
        </div>

        {/* Fun Image Section */}
        <div className="mt-8 sm:mt-12 rounded-xl overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb"
            alt="Cool Developer Vibes"
            width={700}
            height={400}
            className="w-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-xl sm:text-2xl font-bold text-center">
              THERE'S SOMETHING YOU NEED TO KNOW ABOUT ME.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
            Brain Boost 学
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://www.google.com/imgres?q=pict%20logo&imgurl=x-raw-image%3A%2F%2F%2F9a701c4409f821fe8961fe8be20d75c8983efcfc34da37aadf632dbc0fc97d91&imgrefurl=https%3A%2F%2Fpict.edu%2Fadmission-ug%2Fpdf%2FInstitute%2520Information%2520Brochure_Prospectus_AY2024-25_V3%252010082024_%25201548.pdf&docid=v7HbP_jv5Ip56M&tbnid=_iH4CUQccJozrM&vet=12ahUKEwjOh62Ym5KMAxVFTmwGHWQQBBsQM3oECEgQAA..i&w=490&h=491&hcb=2&ved=2ahUKEwjOh62Ym5KMAxVFTmwGHWQQBBsQM3oECEgQAA"
                alt="University Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">
                Information Technology
              </h3>
              <p className="text-sm sm:text-base text-white/60 mt-1">
                Pune Institute of Computer Technology
              </p>
              <p className="text-sm sm:text-base text-white/60">
                BE Information Technology
              </p>
            </div>

            <div className="text-sm sm:text-base text-white/60">2022 - 2026</div>
          </div>
        </section>
      </div>
    </main>
  );
}