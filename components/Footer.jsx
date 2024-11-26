"use client"

import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { MagicButton } from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            {/* Background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image
                    src="/footer-grid.svg"
                    alt="Grid background"
                    className="w-full h-full opacity-50"
                    width={1000}
                    height={1000}
                />
            </div>

            <div id="#contact" className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] sm:mb-6 mb-4">
                    Looking to <span className="text-purple">collaborate</span> on exciting projects?
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
                <p className="md:text-base m-5 text-sm md:font-normal font-light">
                    Copyright © 2024 Prakash Dass R
                </p>
            </div>
        </footer>
    );
};

export default Footer;