import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { RiExternalLinkLine } from 'react-icons/ri';

const words = `Crafting Smart Solutions and Reliable Systems`;

const Hero = () => {
  return (
    <section className="relative hero-gradient h-[90vh] flex items-center overflow-clip">
      <div className="mx-auto px-6 lg:px-12 relative">
        {/* Main Content */}
        <div className="relative mt-[3vh] flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Tagline */}
          <h2 className="text-xs md:text-sm tracking-widest uppercase rainbow-gradient text-transparent bg-clip-text lg:mt-[#80px] absolute">
            Empowering Progress with AI/ML and Full Stack Expertise
          </h2>

          {/* Main Heading */}
          <TextGenerateEffect
            className="text-[32px] md:text-5xl lg:text-6xl font-bold tracking-tighter text-white"
            words={words}
          />

          {/* Subtext */}
          <p className="mt-4 text-sm md:text-lg lg:text-xl text-gray-300">
            Hi,
            I&apos;m {" "}
            <span className='text-[#ee6cfa] font-semibold font-serif'>
              Prakash Dass R
            </span> , a student passionate about creating user-centric products
          </p>

          {/* Button */}
          <a
            href="https://github.com/rprakashdass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Visit My GitHub"
              icon={<RiExternalLinkLine />}
              position="right"
            />
          </a>
        </div>

        <div
          className="absolute w-[120vw] h-[20rem] bg-black rounded-[100%] left-1/2 -translate-x-1/2 border-8 border-[#B48CDE] blur-sm bg-[radial-gradient(closest-side, #B48CDE_92%,  #000_82%)]"
        ></div>

      </div>
    </section>
  );
};

export default Hero;
