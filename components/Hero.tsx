import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { RiExternalLinkLine } from 'react-icons/ri';

const words = `Crafting Smart Solutions and Reliable Systems`;

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen bg-white dark:bg-black"
    >
      {/* Background Spotlights */}
      <div>
        <Spotlight
          className="-top-5 left-full h-[80vh] w-[60vw]"
          fill="purple"
        />
      </div>

      {/* Gradient Mask */}
      <div
        className="absolute top-0 left-0 h-screen w-full bg-white dark:bg-black
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
      />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center space-y-6">
        {/* <h2 className="text-sm tracking-widest uppercase text-blue-100">
          Empowering Progress with AI/ML and Full Stack Expertise
        </h2> */}

        <TextGenerateEffect
          className="text-[40px] md:text-5xl lg:text-6xl"
          words={words}
        />

        <p className="mt-4 text-sm tracking-wider md:text-lg lg:text-2xl">
          Hi, I&apos;m Prakash Dass R, a student passionate about creating user-centric products
        </p>

        <a href="https://github.com/rprakashdass">
          <MagicButton
            title="Visit My GitHub"
            icon={<RiExternalLinkLine />}
            position="right"
          />
        </a>
      </div>

      {/* Spacer to increase distance between sections */}
      <div className="absolute bottom-0 left-0 w-full h-20 lg:h-40" />
    </section>
  );
};

export default Hero;
