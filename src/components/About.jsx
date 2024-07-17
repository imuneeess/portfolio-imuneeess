import aboutImg from "../assets/softwareeng.png";
import { ABOUT_TEXT } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div ref={ref} className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center lg:justify-start">
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <motion.img
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container(1)}
            className="rounded-2xl"
            src={aboutImg}
            alt="about"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={container(1.5)}
          >
            {ABOUT_TEXT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
