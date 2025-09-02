import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { fadeIn } from "../utils/motion";

// 1. Define a type for the component's props
type ServiceCardProps = {
  index: number;
  title: string;
  icon: string; // Assuming icon is a URL or path to the image
};

// 2. Apply the props type to the component
export const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  icon,
}) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full"
  >
    {/* The redundant inner div can be removed, Tilt applies props to its child */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title} // Use the title for more descriptive alt text
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
