import Typewriter from "typewriter-effect";

// This registers the <spline-viewer> element globally
import "@splinetool/viewer";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-blue-500" />
          <div className="w-[2px] h-40 sm:h-80 bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />
        </div>

        <div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-gray-100 bg-clip-text text-transparent mb-4 sm:text-7xl">
            Hi, I'm <span className="text-[#915EFF]">...</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I do{" "}
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Development",
                  "Mobile APP development",
                  "API Development",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
              }}
            />
          </p>
        </div>

        {/* Directly use the spline-viewer */}
        {/* @ts-expect-error  ignore('spline-viewer' does not exist on type 'JSX.IntrinsicElements')*/}
        <spline-viewer url="https://prod.spline.design/dfS1u48OjIBqHrpd/scene.splinecode"></spline-viewer>
      </div>
    </section>
  );
};

export default Hero;
