import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
      dark:bg-light dark:text-dark py-3 px-6 absolute shadow-dark cursor-pointer 
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      //  viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
          dark:bg-light dark:text-dark p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-17vw" y="-4vw" />
        <Skill name="ReactJS" x="19vw" y="-2vw" />
        <Skill name="NextJS" x="0vw" y="12vw" />
        <Skill name="Web Design" x="32vw" y="-8vw" />
        <Skill name="Canva" x="15vw" y="-12vw" />
        <Skill name="MongoDB" x="-16vw" y="18vw" />
        <Skill name="Tailwind CSS" x="15vw" y="18vw" />
        <Skill name="Firebase" x="0vw" y="-18vw" />
        <Skill name="MySQL" x="-25vw" y="-12vw" />
        <Skill name="NodeJS" x="19vw" y="10vw" />
        <Skill name="SQL Server" x="-25vw" y="5vw" />
        <Skill name="PHP" x="30vw" y="5vw" />
        <Skill name="Laravel" x="-35vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;
