"use client"

import React, { useState, useEffect } from 'react'

const faceEmojis = [
  "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
  "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
  "😋", "😛", "🤪", "🤑", "🤗", "🤭", "🤫", "🤔",
  "🤐", "🤨", "😐", "😑", "😶", "😏", "😒", "🙄", "😬", "😮‍💨",
  "🤥", "😌", "😔", "😪", "😴", "😷", "🤒", "🤕", "🤢",
  "🤧", "🥶", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐"
];

const EmojiGenerator = () => {
  

  useEffect(
    () =>{
      handleEmoji();
    }
  ), [ ]
  
  const RandomEmojiGenerator = (seed?: number) => {
    seed = seed || 0;
    const month = new Date().getMonth();
    const sec = new Date().getSeconds();
    return ((month * 2142473648) % sec) + seed;
  }
  
  const handleEmoji = () => {
    const index = RandomEmojiGenerator();
    console.log("index is " , index );
    console.log("emoji is " , faceEmojis[index] );
    setEmoji( index % faceEmojis.length);
  }

  const [emoji, setEmoji] = useState<number>(0);

  return (
    <div className='flex flex-col justify-center items-center my-[20%] heading'>
      <button className='' onClick={handleEmoji}>
        <span className='h-56 text-9xl'>{faceEmojis[emoji]}
        </span>
        
      </button>
      <p className='text-5xl mt-5'>Your Random Emoji!!</p>
    </div>
  )
}

export default EmojiGenerator;