import { useState, useRef } from 'react'
import { tutorials } from '@/data'
import ContributionsCardGenerator from '@/pages/Contributions/Tutorials/ContributionsCardGenerator'
import React from 'react'
import SeeMore from './utility/SeeMore'

export const DevGuidesContributions = () => {

    return (
        <>
            <SeeMore data={tutorials}>

                {(
                    ({ itemsData, showLessRef }: { itemsData: any, showLessRef: any }) => {
                        return (
                            <div className="px-20">

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
                                    className={`flex flex-col flex-wrap md:flex-row gap-10 justify-center transition-opacity duration-500'}`}
                                >
                                    {itemsData.map((item: any) => (
                                        <ContributionsCardGenerator
                                            key={item.id}
                                            title={item.title}
                                            description={item.description}
                                            link={item.link}
                                        />
                                    ))}
                                </div>

                            </div>
                        )
                    }
                )}

            </SeeMore>

        </>
    );
}
export default DevGuidesContributions;