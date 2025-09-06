import { motion } from "framer-motion";

import { ServiceCard } from "../cards/ServiceCards";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div className={`mt-20 pb-14  max-w-7xl mx-auto py-16 sm:py-24`}>
      <motion.div variants={textVariant(0.5)} className="p-8">
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}
        >
          Introduction
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Overview
        </h2>
      </motion.div>
      <div className="mt-4 flex flex-col items-center justify-center ring-0 rounded-3xl shadow-2xl shadow-purple-500/20 p-10 sm:flex-row md:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="flex-1 mt-2 text-gray-300 text-[17px]  leading-[30px]"
        >
          I am a passionate developer with a love for creating efficient,
          scalable, and user-friendly applications. My journey into technology
          started with a fascination for how things work, and it has evolved
          into a career where I get to solve real-world problems. I thrive in
          collaborative environments and am always eager to learn new
          technologies.
        </motion.p>

        <div className="flex-1 items-center justify-center mt-20">
          <div className="w-full max-w-lg p-6 mx-auto text-white bg-gray-800 rounded-3xl shadow-2xl shadow-purple-500/20 ring-1 ring-purple-600/50">
            <div className="flex items-center justify-between pb-4">
              <h2 className="text-2xl font-semibold">
                My services <span className="text-gray-400">now</span>
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>{" "}
              </div>
            </div>

            <hr className="border-t border-gray-700 my-4" />

            <div className="mb-6">
              <h3 className="text-xl font-bold">Epic description</h3>
              <p className="mt-2 text-gray-300">
                Now that I have been working as full-stack developer (see{" "}
                <a
                  href="#experience"
                  className="underline text-purple-400 hover:text-purple-300"
                >
                  #my work
                </a>
                ), I have some follow-up work to do. And i developed this
                portfolio for public access from github
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 p-3 bg-gray-700/50 rounded-lg">
                <h4 className="text-lg font-medium">
                  Currently I'm working on frontend{" "}
                  <span className="text-gray-400">(in main project)</span>
                </h4>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 text-gray-300 rounded-lg bg-gray-700/30">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  React with Mantine libraries{" "}
                  <span className="text-gray-500">#18.x</span>
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 text-gray-300 rounded-lg bg-gray-700/30">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 4v.01M12 10v.01M12 16v.01M12 20v.01"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>
                  Vite with typescript (this portfolio){" "}
                  <span className="text-[14px] text-pink-500">
                    #tailwind css 4.1
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 text-gray-300 rounded-lg bg-gray-700/30">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 4v.01M12 10v.01M12 16v.01M12 20v.01"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Data source json file (this portfolio)</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                className="w-full py-2 text-sm text-center text-gray-400 transition-colors duration-200 bg-gray-700/50 rounded-lg hover:bg-gray-700"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                contact me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap gap-10 p-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
