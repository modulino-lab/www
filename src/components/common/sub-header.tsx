import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter";

import { motion, AnimatePresence } from "motion/react";
import { useScroll } from "motion/react";
import { useEffect, useState } from "react";

const subHeaderPaths = ["/hub"];

interface SubHeaderProps {
  pathname: string;
}

export default function SubHeader({ pathname }: SubHeaderProps) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  const triggerPoint = 800;

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest > triggerPoint);
    });
    return () => unsubscribe();
  }, [scrollY]);

  if (!subHeaderPaths.includes(pathname)) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='border-grid sticky top-14 z-49 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
        >
          <div className='flex justify-between items-center w-full container-wrapper'>
            <div className='hidden lg:inline-block font-bold'>
              Get the <span className='italic'>modulino</span> Hub
            </div>
            <div className='flex items-center gap-2 ml-auto'>
              <Counter />
              <Button className='h-10 px-6'>Add to Cart</Button>
              <Button className='h-10 px-6'>Go to Checkout</Button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
