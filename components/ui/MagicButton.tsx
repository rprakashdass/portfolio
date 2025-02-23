import React from 'react'

export const MagicButton = ({
  title, icon, position, handleClick, OtherClasses
}: {
  title: string;
  icon: React.ReactNode, // a more encompassing type that includes React elements and other types that React can render
  position: string;
  handleClick?: () => {}; // ? - tells that an optional
  OtherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10 mt-5"
    >
      <span
        className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      ></span>
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${OtherClasses || ""
          }`}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>

  )
}
