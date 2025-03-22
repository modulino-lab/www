"use client";

import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyLarge,
  TypographyMuted,
} from "@/components/ui/typography";
import Image from "next/image";

import { useState } from "react";

import { motion } from "framer-motion";

const images = [
  {
    src: "/images/eprojets-lab-jj705qpjVJI-unsplash.jpg",
    title: "Photo by EProjets Lab on Unsplash",
    description: "Photo by EProjets Lab on Unsplash",
    details: "Ultra-smooth materials, optimized for performance.",
  },
  {
    src: "/images/eprojets-lab-jj705qpjVJI-unsplash.jpg",
    title: "Photo by EProjets Lab on Unsplash",
    description: "Photo by EProjets Lab on Unsplash",
    details: "Ultra-smooth materials, optimized for performance.",
  },
  {
    src: "/images/eprojets-lab-jj705qpjVJI-unsplash.jpg",
    title: "Photo by EProjets Lab on Unsplash",
    description: "Photo by EProjets Lab on Unsplash",
    details: "Ultra-smooth materials, optimized for performance.",
  },
  {
    src: "/images/eprojets-lab-jj705qpjVJI-unsplash.jpg",
    title: "Photo by EProjets Lab on Unsplash",
    description: "Photo by EProjets Lab on Unsplash",
    details: "Ultra-smooth materials, optimized for performance.",
  },
  {
    src: "/images/eprojets-lab-jj705qpjVJI-unsplash.jpg",
    title: "Photo by EProjets Lab on Unsplash",
    description: "Photo by EProjets Lab on Unsplash",
    details: "Ultra-smooth materials, optimized for performance.",
  },
];

export default function HubPage() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="flex justify-between mt-8 pr-15 pl-15">
          <TypographyH1>Hub</TypographyH1>
          <TypographyLarge className="text-right">
            Your new functions,
            <br />
            all in one place.
          </TypographyLarge>
        </div>
        <div className="relative w-full aspect-[16/9] mt-8 overflow-hidden rounded-xl">
          <Image
            src="/images/jainath-ponnala-9wWX_jwDHeM-unsplash.jpg"
            alt="Image of the Hub"
            fill
            className="object-cover"
          />
        </div>
        <TypographyMuted>
          Photo by{" "}
          <a href="https://unsplash.com/@jainath?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jainath Ponnala
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/black-and-blue-usb-cable-9wWX_jwDHeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </TypographyMuted>
      </div>
      <div className="container mt-16">
        <div className="pr-5 pl-5">
          <TypographyH2>Maximize Your 3D Printing Experience.</TypographyH2>
          <TypographyBlockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypographyBlockquote>
        </div>
        <ImageStack />
      </div>
      <div className="container mt-16">
        <div className="pr-5 pl-5">
          <TypographyH1>Specifications</TypographyH1>
        </div>
        <SpecTable />
      </div>
      <div className="mb-16"></div>
    </div>
  );
}

function ImageStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex justify-center space-x-4 mt-8 w-full mx-auto">
      {images.map((item, index) => (
        <motion.div
          key={index}
          className="relative h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer flex-1"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            flex: hoveredIndex === index ? 3 : 1,
            transition: { type: "spring", stiffness: 200, damping: 20 },
          }}
        >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover rounded-2xl"
          />
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"
            animate={{
              opacity: hoveredIndex === index ? 1 : 0.8,
              y: hoveredIndex === index ? 0 : 10,
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            {hoveredIndex === index && (
              <motion.p
                className="text-sm text-gray-200 mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              >
                {item.description}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function SpecTable() {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Processor</td>
            <td className="px-4 py-2">
              Broadcom BCM2711, Quad-core Cortex-A72 (ARM v8) 64-bit SoC @
              1.5GHz
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">RAM</td>
            <td className="px-4 py-2">2GB / 4GB / 8GB LPDDR4-3200</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Storage</td>
            <td className="px-4 py-2">
              microSD card slot (supports booting from USB devices)
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Connectivity</td>
            <td className="px-4 py-2">
              Gigabit Ethernet, 2.4/5.0 GHz Wi-Fi, Bluetooth 5.0
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">USB Ports</td>
            <td className="px-4 py-2">2 × USB 3.0, 2 × USB 2.0</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Video Output</td>
            <td className="px-4 py-2">2 × micro-HDMI (supports up to 4Kp60)</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Power Supply</td>
            <td className="px-4 py-2">5V/3A USB-C</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">GPIO</td>
            <td className="px-4 py-2">40-pin GPIO header</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 font-semibold">Operating System</td>
            <td className="px-4 py-2">
              Raspberry Pi OS (Linux-based), supports Ubuntu, Arch Linux, etc.
            </td>
          </tr>
        </tbody>
      </table>
      {/* TODO: Change to real specification */}
      <TypographyMuted>This information is subject to change.</TypographyMuted>
    </div>
  );
}
