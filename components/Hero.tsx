import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { RiExternalLinkLine } from 'react-icons/ri';

const words = `Crafting Smart Solutions and Reliable Systems`;

const Hero = () => {
  return (
    <section id='#hero' className="relative pb-20 pt-20 bg-white dark:bg-black h-screen">
      {/* Background Spotlights */}
      <div>
        <Spotlight
          className="-top-5 left-full h-[80vh] w-[60vw]"
          fill="purple"
        />
      </div>

      {/* Gradient Mask */}

      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      />
      {/* Main Content */}
      <div className="relative flex justify-center my-20">
        <div className="flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="text-sm text-center tracking-widest uppercase text-blue-100">
          Empowering Progress with AI/ML and Full Stack Expertise
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={words}
          />

          <p className="mt-4 text-center text-sm tracking-wider md:text-lg lg:text-2xl">
            Hi, I&apos;m Prakash Dass R, a student passionate about creating user-centric products
          </p>

          <a href="https://github.com/rprakashdass" className="">
            <MagicButton
              title="Vist My GitHub"
              icon={<RiExternalLinkLine />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
