"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);
// Different animation variants for variety
const getAnimationVariant = (index) => {
  const variants = [
    // Slide from left
    {
      initial: { opacity: 0, x: -60, rotate: -10 },
      animate: { opacity: 1, x: 0, rotate: 0 },
    },
    // Slide from right
    {
      initial: { opacity: 0, x: 60, rotate: 10 },
      animate: { opacity: 1, x: 0, rotate: 0 },
    },
    // Slide from top
    {
      initial: { opacity: 0, y: -60, scale: 0.8 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    // Flip animation
    {
      initial: { opacity: 0, rotateY: 90, scale: 0.8 },
      animate: { opacity: 1, rotateY: 0, scale: 1 },
    },
  ];

  return variants[index % variants.length];
};

export const SkillCard = ({ name, icon, color, index }) => {
  const variant = getAnimationVariant(index);

  return (
    <motion.div
      initial={variant.initial}
      animate={variant.animate}
      transition={{
        duration: 0.5,
        delay: index * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 },
      }}
      className="group cursor-pointer"
    >
      <div className="relative flex flex-col items-center justify-center space-y-3 p-6 h-full min-h-[140px]">
        {/* Animated glow background */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
          style={{ backgroundColor: `${color}40` }}
        />

        {/* Icon container */}
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-60"
            style={{
              background: `linear-gradient(135deg, ${color}30, ${color}10)`,
            }}
          />

          <FontAwesomeIcon
            className="w-9 h-9 relative z-10 drop-shadow-lg"
            icon={icon}
            size="2x"
            style={{ color }}
          />
        </motion.div>

        {/* Skill name */}
        <motion.h3
          className="text-sm font-bold text-center text-foreground relative z-10"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.h3>
      </div>
    </motion.div>
  );
};
