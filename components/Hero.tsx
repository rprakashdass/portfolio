import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { MagicButton } from './ui/MagicButton';
import { RiExternalLinkLine } from 'react-icons/ri';

const words = `Transforming Ideas into Solutions and Business Solutions`;

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        {/* <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        /> */}
        <Spotlight
          className="-top-5 left-full h-[80vh] w-[60vw]"
          fill="purple"
        />
        {/* <Spotlight
          className="top-25 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        /> */}

      </div>

      <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.01] absolute flex items-center justify-center top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      </div>

      <div className='flex relative justify-center my-20'>
  <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
    <h2 className='uppercase tracking-widest text-sm text-center text-blue-100 max-w-90'>
      Shaping the Future with AI/ML and Scalable Solutions
    </h2>
    <TextGenerateEffect
      className='text-[40px] text-center md:text-5xl lg:text-6xl'
      words='Building Intelligent Products and Robust Systems'
    />
    {/* <p className='text-center tracking-wider text-sm md:text-lg lg:text-2xl'>
      Hi, I&apos;m Prakash Dass R, a passionate AI/ML product innovator and 
      full-stack developer. I specialize in creating seamless, impactful 
      applications that drive progress and solve real-world problems.
    </p> */}
    <p>I&apos;m Prakash Dass R, a student creating user-centric products.</p>
    <a href='/projects'>
      <MagicButton
        title="Explore My Projects"
        icon={<RiExternalLinkLine />}
        position='right'
      />
    </a>
  </div>
</div>


    </div>
  );
};

export default Hero