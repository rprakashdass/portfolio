import { tutorials } from '@/data'
import ContributionsCardGenerator from '@/pages/Contributions/Tutorials/ContributionsCardGenerator'
import React from 'react'

export const DevGuidesContributions = () => {
    return (
        <div className="py-20 px-20">
            <div className="text-center py-10 text-white">
                <h1 className="text-5xl font-extrabold mb-8">
                    Dev{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                        Guides
                    </span>
                </h1>
                <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
                    Contribute to or explore top, concise, and resource-driven GitHub repositories for interview prep and more.{' '}
                    <a
                        href="/contributions"
                        className="text-blue-400 hover:underline font-semibold ml-2"
                    >
                        See all
                    </a>
                </p>
            </div>


            <div className="flex flex-wrap gap-10 justify-center">

                {
                    tutorials.map(
                        (item) => (
                            <ContributionsCardGenerator
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                            />
                        )
                    ).slice(0, 2)
                }

            </div>

        </div>
    )
}
