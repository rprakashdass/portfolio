import React from 'react'
import { data } from './data'

const PlayGround = () => {
    return (
        <div>
            <h1 className='heading'>PlayGround</h1>
            <div className='flex flex-col md:flex-row justify-center gap-10'>

                {
                    data.map((item) => (
                        <div className="flex justify-center items-center center p-5">
                            <h1>{item.title}</h1>
                            <hr />
                            <a href={item.link}>Click here</a>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default PlayGround