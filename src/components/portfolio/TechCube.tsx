import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TechIcon, { type TechIconName } from "./TechIcon";

interface CubeFaceProps {
  tech: TechIconName;
  color: string;
  rotate: string;
  translateZ: string;
}

const CubeFace = ({ tech, color, rotate, translateZ }: CubeFaceProps) => (
  <div
    className="absolute inset-0 flex items-center justify-center border-4 border-black/80 rounded-sm shadow-inner"
    style={{
      backgroundColor: color,
      transform: `${rotate} translateZ(${translateZ})`,
      backfaceVisibility: "hidden",
    }}
  >
    {/* Rubik's Pattern - Grid of 9 stickers */}
    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-full h-full p-1 opacity-20 pointer-events-none absolute inset-0">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="border border-black/40 rounded-[1px] bg-black/5" />
      ))}
    </div>
    
    {/* Main Icon */}
    <div className="relative z-10 transform scale-150 drop-shadow-md">
      <TechIcon name={tech} size="md" />
    </div>
  </div>
);

export const TechCube = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "-30deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-30deg", "30deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const faces: CubeFaceProps[] = [
    { tech: "laravel", color: "#FF2D20", rotate: "rotateY(0deg)", translateZ: "100px" },     // Front
    { tech: "react", color: "#61DAFB", rotate: "rotateY(180deg)", translateZ: "100px" },    // Back
    { tech: "flutter", color: "#02569B", rotate: "rotateX(90deg)", translateZ: "100px" },    // Top
    { tech: "vue", color: "#4FC08D", rotate: "rotateX(-90deg)", translateZ: "100px" },   // Bottom
    { tech: "tailwind", color: "#38B2AC", rotate: "rotateY(-90deg)", translateZ: "100px" }, // Left
    { tech: "typescript", color: "#3178C6", rotate: "rotateY(90deg)", translateZ: "100px" }, // Right
  ];

  return (
    <div 
      className="flex items-center justify-center w-64 h-64 md:w-80 md:h-80"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-48 h-48 preserve-3d"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {faces.map((face, index) => (
          <CubeFace key={index} {...face} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechCube;
