import { useState, useEffect } from "react";
import { experiences } from "../data/experiance";
import type { Experience } from "../data/experiance";

// Import timeline components and styles
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Import an icon for the timeline markers
import { FaCode } from "react-icons/fa";

const Experiance = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [experiance, setworkExps] = useState<Experience[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setworkExps(experiences);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="experiance" className="bg-transparent py-20 text-center">
        <p className="text-xl text-gray-100">Loading experiance...</p>
      </section>
    );
  }

  return (
    <section id="experiance" className="--color-black-100 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <p className="font-mono font-medium text-center text-gray-950 dark:text-white">
          What i have done so far!
        </p>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-gray-100 bg-clip-text text-transparent sm:text-5xl">
          Work Experiance
        </h2>

        {/* The Vertical Timeline */}
        <VerticalTimeline>
          {experiance.map((workExp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
                boxShadow:
                  "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
              date={workExp.date}
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaCode />}
            >
              {/* workExp Card Content */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {workExp.title}
              </h3>
              <p className="mt-2 font-normal text-gray-600">{workExp.points}</p>

              {/* workExp Links */}
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={workExp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  website
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiance;
