import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  children: [React.ReactNode, React.ReactNode]; // [Front, Back]
  className?: string;
}

export const FlipCard = ({ children, className = "" }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative cursor-pointer perspective-1000 ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className="w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {children[0]}
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {children[1]}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
