import React from 'react';
import { socialMedia } from '../data';

const LinkTree = () => {
  return (
    <section id="social-media" className="py-10">
      <div className="flex justify-center gap-6">
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={media.img}
              alt={''}
              className="w-10 h-10 rounded-full shadow-lg hover:shadow-xl"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default LinkTree;
