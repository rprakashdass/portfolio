import React from 'react'
import { MagicButton } from './ui/MagicButton'

export const About = () => {
    return (
        <section className='mx-[10vw] mt-20'>
            {/* Heading */}
            <div className='text-4xl font-semibold mb-20 text-center'>
                About
            </div>

            {/* Flex container for profile and content */}
            <div className='flex flex-col md:flex-row gap-10 justify-center items-center h-min-full'>

                {/* Profile Image */}
                <div className='w-full lg:w-2/3 border border-gray-800 rounded-xl p-3 h-[20rem]'>
                    <div className='w-full h-full relative'>
                        <img
                            src='/me/prakashdass.jpg'
                            alt="Profile of Prakash Dass"
                            className='object-cover absolute rounded-xl'
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className='w-full flex flex-col gap-10 border-2 border-gray-800 min-h-full'>
                    {/* Box 1 */}
                    <div className='border-2 border-gray-800 rounded-xl p-6 flex flex-col justify-between h-full'>
                        {/* <h3 className='text-center font-bold text-3xl mb-4'>Who Am I?</h3> */}
                        <p className='text-lg text-center line-clamp-4'>
                            An Aspiring Software Developer pursuing BTech AI & ML in my pre-final year.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className='border-2 border-gray-800 rounded-xl p-6 relative'>
                        {/* <h3 className='text-center font-bold text-3xl mb-4'>A Keen Volunteer</h3> */}
                        <p className='text-lg text-center'>
                            Contact me for volunteering<br></br>
                        </p>
                            {/* <a
                                href="#contact"
                                className='bg-gray-800 border-2 rounded-xl p-3 absolute'
                            >
                                Contact Me
                            </a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
