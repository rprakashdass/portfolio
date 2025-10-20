"use client";

import { useState, useRef } from 'react'
import { tutorials, type Tutorial } from '@/data'
import ContributionsCardGenerator from './ContributionsCardGenerator'
import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const DevGuidesContributions = () => {
    const showLessRef = useRef<HTMLParagraphElement | null>(null);
    const [showAll, setShowAll] = useState<boolean>(false);

    const handleShowMore = () => {
        setShowAll(true);
    }

    const handleShowLess = () => {
        showLessRef.current?.scrollIntoView({ behavior: 'smooth' })
        setShowAll(false);
    }

    const itemsData = showAll ? tutorials : tutorials.slice(0, 2);

    return (
        <>
            <div>
                <div className="py-10 text-center text-white">
                    <h1 className="mb-8 font-extrabold text-5xl">
                        <span className="bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 text-transparent">
                            Tutorials & Resources
                        </span>
                    </h1>
                    <p
                        ref={showLessRef}
                        className="mx-auto mb-6 max-w-3xl text-gray-400 text-lg leading-relaxed">
                        Explore tutorials on programming, algorithms, and NLP with practical insights. Learn or contribute today!
                    </p>
                </div>

                <div
                    className={`flex flex-col md:flex-row gap-10 justify-center transition-opacity duration-500'}`}
                >
                    {itemsData.map((item: Tutorial) => (
                        <ContributionsCardGenerator
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>

            {/* Show More/Less Button */}
            <div className="flex justify-center opacity-45 py-20">
                <button onClick={showAll ? handleShowLess : handleShowMore} className="inline-flex gap-4 font-bold text-2xl">
                    {showAll ?
                        <span className="inline-flex">
                            Show Less
                            <AiFillCaretUp size={32} />
                        </span>
                        :
                        <span className="inline-flex">
                            Show More
                            <AiFillCaretDown size={32} />
                        </span>
                    }
                </button>
            </div>
        </>
    );
}
export default DevGuidesContributions;