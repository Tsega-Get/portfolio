import { motion } from "framer-motion";

import { ServiceCard } from "../cards/ServiceCards";
import { services } from "../constants";
import { styles } from "../styles/styles";

import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div
      className={`mt-20 pb-14 ${styles.paddingX} max-w-7xl mx-auto py-16 sm:py-24`}
    >
      <motion.div variants={textVariant(0.5)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate developer with a love for creating efficient,
        scalable, and user-friendly applications. My journey into technology
        started with a fascination for how things work, and it has evolved into
        a career where I get to solve real-world problems. I thrive in
        collaborative environments and am always eager to learn new
        technologies.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
