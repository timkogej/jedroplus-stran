"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface iIPicture {
  src: string;
  scale: MotionValue<number>;
}

interface iImmersiveScrollGalleryProps {
  images?: iIPicture[];
  className?: string;
  contentText?: string;
  contentNode?: React.ReactNode;
}

const DEFAULT_IMAGES = [
  {
    src: "/images/booking/jedroplus1.webp",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2940&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2940&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2940&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2940&auto=format&fit=crop",
    scale: null,
  },
  {
    src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2940&auto=format&fit=crop",
    scale: null,
  },
];

const IMAGE_STYLES = [
  "w-[25vw] h-[25vh]",
  "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
  "w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]",
  "w-[25vw] h-[25vh] left-[27.5vw]",
  "w-[20vw] h-[30vh] top-[30vh] left-[5vw]",
  "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]",
  "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
];

const DEFAULT_CONTENT_TEXT =
  "Vaše stranke rezervirajo v stilu. Vsak dizajn je skrbno oblikovan, da odraža profesionalnost in ustvari izkušnjo, ki jo stranke ne pozabijo.";

const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images = DEFAULT_IMAGES,
  className = "",
  contentText = DEFAULT_CONTENT_TEXT,
  contentNode,
}) => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Fewer distinct scale values = fewer MotionValue computations per scroll tick
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const opacityImage = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacitySection2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const scaleSection2 = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

  const scaleMap = [scale4, scale6, scale4, scale6, scale4, scale8, scale6];
  const pictures = images.map((img, index) => ({
    ...img,
    scale: scaleMap[index % 7],
  }));

  return (
    <div ref={container} className={`relative h-[200vh] ${className}`}>
      <div className="sticky top-0 h-[100vh] overflow-hidden bg-white">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale, opacity: opacityImage, willChange: "transform, opacity" }}
            className="absolute flex items-center justify-center w-full h-full top-0"
          >
            <div className={`relative ${IMAGE_STYLES[index]}`}>
              <img
                src={src}
                alt={`Dizajn naročanja ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          style={{ opacity: opacitySection2, scale: scaleSection2 }}
          className="w-full h-full flex items-center justify-center max-w-3xl mx-auto p-8 relative"
        >
          <p className="text-gray-900 text-2xl md:text-4xl font-normal text-center leading-relaxed">
            {contentNode ?? contentText}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ImmersiveScrollGallery;
