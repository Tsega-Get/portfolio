import { useState, useEffect } from "react";
import { experiences } from "../data/experience";
import type { Experience } from "../data/experience";

// Import timeline components and styles
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Import an icon for the timeline markers
import { FaCode } from "react-icons/fa";
import { openNewTab } from "../assets";

const ExperienceSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [experience, setworkExps] = useState<Experience[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setworkExps(experiences);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="experience" className="bg-transparent py-20 text-center">
        <p className="text-xl text-gray-100">Loading experience...</p>
      </section>
    );
  }

  return (
    <section id="experience" className="--color-black-100 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          What i have done so far!
        </p>
        <h2 className="text-4xl font-bold text-center mb-12 sm:text-5xl bg-gradient-to-r from-blue-500 to-gray-100 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Work Experience
        </h2>

        {/* The Vertical Timeline */}
        <VerticalTimeline>
          {experience.map((workExp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1f2937",
                color: "#e6e6e6",
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5)",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1f2937" }}
              date={workExp.date}
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaCode />}
            >
              {/* workExp Card Content */}
              <div className=" bg-gradient-to-l rounded-xl from-purple-500/10">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-300 to-gray-100 bg-clip-text text-transparent">
                  {workExp.title}
                </h3>
                <p className="mt-2 font-normal text-gray-400">
                  {workExp.points}
                </p>

                {/* workExp Links */}
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="p-[2px] rounded-md bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    {workExp.link !== "#" && (
                      <a
                        href={workExp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-800 text-white font-medium py-2 px-4 rounded-md
                   shadow-[0_0_15px_rgba(59,130,246,0.7)]
                   hover:shadow-[0_0_25px_rgba(59,130,246,1)]
                   transition-all duration-300 ease-in-out
                   hover:scale-105"
                      >
                        {workExp.showCase}
                        <img
                          src={openNewTab}
                          alt="Open in new tab"
                          className="inline w-4 h-4 ml-2"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default ExperienceSection;
