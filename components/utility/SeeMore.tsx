"use client";

import { ReactNode, useRef, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export const SeeMore = ({ children, data }: {
  children: any,
  data: any[],
}) => {


  const showLessRef = useRef<HTMLDivElement | null>(null);

  const [showAll, setShowAll] = useState<boolean>(false);

  const handleShowMore = () => {
    setShowAll(true);
  }

  const handleShowLess = () => {
    showLessRef.current?.scrollIntoView({ behavior: 'smooth' })
    setShowAll(false);
  }

  const itemsData = showAll ? data : data.slice(0, 2);

  return (
    <>
      {children({ itemsData, showLessRef })}
      <div className="flex justify-center my-2 opacity-20">
        <button onClick={showAll ? handleShowLess : handleShowMore} className="inline-flex gap-4 text-2xl font-bold">
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
};

export default SeeMore