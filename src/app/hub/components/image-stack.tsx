import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

// TODO: change to real images
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

export default function ImageStack() {
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
