import React from 'react'

const data = [
    {
        title: 'Random Emoji Generator',
        link: '/playground/emoji-generator',
    }
]


const PlayGround = () => {
    return (
        <div>
            <h1 className='heading'>PlayGround</h1>
            <div className='flex md:flex-row flex-col justify-center gap-10'>

                {
                    data.map((item) => (
                        <div className="flex justify-center items-center p-5 center">
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