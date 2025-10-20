import React from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { RiExternalLinkLine } from 'react-icons/ri';

const words = `Building Intelligent Systems with AI & Machine Learning`;

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen max-h-screen hero-gradient overflow-clip"
    >
      <div className='mx-auto px-6 lg:px-12 relative'>

      <div className="relative flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center space-y-6">
        <h2 className="text-sm lg:mt-10 tracking-widest uppercase">
          AI Engineer • Machine Learning Specialist • Systems Developer
        </h2>

        <TextGenerateEffect
          className="text-[40px] md:text-5xl lg:text-6xl"
          words={words}
        />

        <p className="mt-4 text-sm tracking-wider md:text-lg lg:text-2xl">
          Hi, I&apos;m {" "}
          <span className='text-[#ee6cfa] font-semibold font-serif'>
              Prakash Dass R,
            </span> {" "}
           a student passionate about creating user-centric products
        </p>

        <a href="https://github.com/rprakashdass">
          <MagicButton
            title="Visit My GitHub"
            icon={<RiExternalLinkLine />}
            position="right"
          />
        </a>
      </div>
 
      <div
          className="absolute w-[220vw] h-[50vh] top-auto bg-black rounded-[100%] left-1/2 -translate-x-1/2 border-8 border-[#B48CDE] blur-sm bg-[radial-gradient(closest-side, #B48CDE_92%,  #000_82%)]"
        />
      </div>

    </section>
  );
}

export default Hero;


