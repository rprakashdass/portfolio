"use client"

import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { MagicButton } from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 mb-10" id="contact">

            <div id="#contact" className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] sm:mb-6 mb-4">
                    Looking to <span className="text-highlight">collaborate</span> on exciting projects?
                </h1>
                <p className="text-white-200 md:mt-8 mt-4 mb-6 text-center sm:line-clamp-2">
                    If you're ready to elevate your digital presence or need help with your next project, let's connect and create something amazing together.
                </p>
                <a className="mb-6" href="mailto:rprakashdass@gmail.com">
                    <MagicButton
                        title="Get in Touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>


            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base m-5 mb-2 text-sm md:font-normal font-light text-center">
                    © {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>         </div>
        </footer>
    );
};

export default Footer;