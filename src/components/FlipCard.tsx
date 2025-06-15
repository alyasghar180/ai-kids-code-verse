
import React, { useState } from "react";
import { motion } from "framer-motion";

type FlipCardProps = {
  icon: string;
  title: string;
  description: string;
  backBg?: string;
};

const backBgColors = [
  "bg-[#B9FBC0]", // Mint
  "bg-[#A0C4FF]", // Sky Blue
  "bg-[#CDB4DB]", // Pastel Purple
  "bg-[#FFD6A5]", // Pastel Orange
];

export const FlipCard: React.FC<FlipCardProps & { idx: number }> = ({
  icon,
  title,
  description,
  backBg,
  idx
}) => {
  const [flipped, setFlipped] = useState(false);

  // On mobile, click/tap toggles
  const handleToggle = () => setFlipped((f) => !f);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: 0.07 * idx, type: "spring", bounce: 0.2 }}
      className="group perspective"
    >
      <div
        className={`relative w-full h-64 
          [transform-style:preserve-3d] transition-transform duration-500
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
          cursor-pointer
        `}
        onClick={handleToggle}
        tabIndex={0}
        onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handleToggle() }}
        role="button"
        aria-pressed={flipped}
      >
        {/* Front side */}
        <motion.div
          whileHover={{
            scale: 1.048
          }}
          whileTap={{
            scale: 0.98
          }}
          className="absolute inset-0 z-20 rounded-2xl bg-white shadow-md flex flex-col items-center justify-center gap-4 px-6 text-center select-none
            transition-transform duration-500
            [backface-visibility:hidden]
            "
        >
          <span className="text-5xl" aria-hidden>
            {icon}
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl font-bold text-gray-800 font-['Fredoka','Quicksand','Nunito',sans-serif]">
            {title}
          </span>
        </motion.div>
        {/* Back side */}
        <div
          className={`absolute inset-0 z-30 rounded-2xl ${backBg ?? backBgColors[idx % backBgColors.length]} shadow-lg flex flex-col items-center justify-center px-7 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-500`}
        >
          <span className="text-base md:text-lg font-semibold text-gray-800 font-['Nunito',sans-serif]">
            {description}
          </span>
        </div>
      </div>
      {/* For accessibility: hint */}
      <span className="block md:hidden text-xs text-gray-500 text-center mt-2 select-none">Tap to flip</span>
      <span className="hidden md:block text-xs text-gray-400 mt-2 select-none">Hover or tap to flip</span>
      <style>{`
        .perspective {
          perspective: 1400px;
        }
      `}</style>
    </motion.div>
  );
};

export default FlipCard;
