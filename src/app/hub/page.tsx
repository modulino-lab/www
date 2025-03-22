"use client";

import {
  TypographyBlockquote,
  TypographyH1,
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
        <div className="flex justify-between  mt-8 pr-15 pl-15">
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
        <TypographyH1>Maximize Your 3D Printing Experience.</TypographyH1>
        <TypographyBlockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TypographyBlockquote>
        <ImageStack />
      </div>
    </div>
  );
}

function ImageStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex justify-center space-x-4 mt-8">
      {images.map((item, index) => (
        <motion.div
          key={index}
          className="relative w-[200px] h-[300px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            width: hoveredIndex === index ? 300 : 200,
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
