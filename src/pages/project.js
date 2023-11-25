import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/agency-website-cover-image.jpg";
import project3 from "../../public/images/projects/fashion-studio-website.jpg";
import project4 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import project5 from "../../public/images/projects/devdreaming.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, sumary, img, link, githubLink }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl rounded-br-2xl p-12 dark:bg-dark dark:border-light 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light  rounded-br-3xl 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold xs:text-base sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {sumary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={githubLink}
            target="_blank"
            className="w-10 dark:text-light"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark 
            hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl 
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark text-light p-2 px-2 text-lg font-medium 
            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:text-base"
          >
            Visit Project
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            className="w-8 dark:text-light md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const project = () => {
  return (
    <>
      <Head>
        <title> NGOC NV | Projects Page </title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="My Projects"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeatureProject
                title="Function Studio Website"
                sumary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                type="Feature Project"
                img={project3}
                githubLink="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                link="/"
                type="Project"
                img={project1}
                githubLink="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Agency Website"
                link="/"
                type="Project"
                img={project2}
                githubLink="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Collection Website"
                link="/"
                type="Project"
                img={project4}
                githubLink="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Dev Dreaming"
                link="/"
                type="Project"
                img={project5}
                githubLink="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default project;
