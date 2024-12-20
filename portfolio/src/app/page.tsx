'use client';
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the ThreeScene component (SSR disabled)
const ThreeScene = dynamic(() => import('../component/ThreeScene'), { ssr: false });

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      {/* Main container with background */}
      <div
        className="flex w-full h-full bg-cover bg-white bg-center"
        style={{ backgroundImage: "url(/pic1.jpg)" }}
      >
        {/* Left Section */}
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[50%]">
          <h1 className="text-[50px] text-black font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "} Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-black max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-black py-3 text-lg text-black max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-black inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-black px-5 py-3 text-lg text-black max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-black inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>

        {/* Right Section for 3D Model */}
        <div className="flex-1 h-full flex items-center justify-center">
          <div className="three-scene-container w-full h-full">
            <ThreeScene />
          </div>
        </div>
      </div>

      {/* Mobile Section (shown only on smaller screens) */}
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-black max-w-[200px]"
        >
          Learn more
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-black px-5 py-3 text-lg text-black max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-black px-5 py-3 text-lg text-black max-w-[200px]"
        >
          Contact me
        </Link>
      </div>
    </main>
  );
}
