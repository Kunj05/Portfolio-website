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
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold flex items-center justify-center">
            Yo, I'm Kunj Chandak<span className="text-4xl sm:text-6xl">🚀</span>
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
            Education 学
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

            <div className="text-sm sm:text-base text-white/60">
              2022 - 2026
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mt-12 sm:mt-16 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
            Grindin' & Hustlin' 仕
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Moonshot Media */}
              <div className="relative pl-14">
                {/* Timeline Dot */}
                <div className="absolute left-[1.15rem] top-1 w-2.5 h-2.5 rounded-full bg-white" />

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/tools.png"
                        alt="Zymo"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">
                            Moonshot Media
                          </h3>
                          <p className="text-white/60">
                            Fullstack Developer Intern
                          </p>
                        </div>
                        <span className="text-sm text-white/60">
                          Jan-Apr 2025
                        </span>
                      </div>
                      <p className="text-sm text-white/60 mt-1">Remote</p>
                      <ul className="mt-4 space-y-3 text-sm text-white/80">
                        <li>
                          • Built robust application using React, Firebase
                          emphasizing RESTful architecture, Advanced State
                          Management using Redux and implemented CRUD
                          operations.
                        </li>
                        <li>
                          • Integrated a Payment Dashboard using Razorpay
                          adhering to ACID principles, ensuring integrity and
                          scalability leveraging Firebase.
                        </li>
                        <li>
                          • Designed and optimized scalable cloud
                          infrastructure, ensuring high availability and
                          security with Firebase, while maintaining smooth user
                          experience and efficient data handling.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
