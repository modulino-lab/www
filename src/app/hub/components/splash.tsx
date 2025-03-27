"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";
import Image from "next/image";
import {
  TypographyH2,
  TypographyLarge,
  TypographyP,
} from "@/components/ui/typography";

interface SplashProps {
  price: number;
}

export default function Splash({ price }: SplashProps) {
  return (
    <div className="relative flex w-full h-screen overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Image
          src="/images/jainath-ponnala-9wWX_jwDHeM-unsplash.jpg"
          alt="Background"
          className="object-cover filter grayscale opacity-30 brighness-50"
          layout="fill"
        />
      </div>

      {/* Left Side - Product Info */}
      <div className="relative z-10 w-1/2 flex flex-col justify-center p-10">
        <TypographyH2 className="border-none">Lorem Ipsum</TypographyH2>
        <TypographyLarge className="mt-2">${price.toFixed(2)}</TypographyLarge>
        <TypographyP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl eget aliquam aliquet, nunc nisl aliquam nisl, eget aliquam nisl
          nisl eget nisl.
        </TypographyP>
        <div className="flex flex-row justify-between items-center mt-6">
          <Counter />
          <Button className="flex-1">Add to Cart</Button>
        </div>
      </div>

      {/* Right Side - STL Viewer */}
      <div className="relative z-10 w-1/2 flex items-center justify-center">
        <Canvas camera={{ position: [2, 2, 2] }}>
          <ambientLight intensity={0.7} />
          <OrbitControls enableZoom={false} />
          <mesh scale={1.5}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
