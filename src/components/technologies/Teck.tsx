import React from "react";
import { technologies } from "../../constants";

const Tech: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {technologies.map(({ name, icon }) => (
          <div
            key={name}
            className="w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center bg-white/5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            {/* If you want 3D icons, swap this with <BallCanvas icon={icon} /> */}
            <img
              src={icon}
              alt={name}
              className="w-12 h-12 object-contain mx-auto mb-2"
            />
            <p className="text-center text-sm sm:text-base text-white">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
