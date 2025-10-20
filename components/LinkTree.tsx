import React from 'react';
import { socialMedia } from '@/data';

const LinkTree = () => {
  return (
    <section className="py-10 border-t border-b border-b-purple-400/30 border-gray-500/30 bg-black/20">
      <div className="flex justify-center gap-10">
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-150"
          >
            <img
              src={media.img}
              alt={''}
              className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default LinkTree;
