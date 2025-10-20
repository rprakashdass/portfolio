"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  maxWidth?: "default" | "wide" | "narrow";
  spacing?: "default" | "compact" | "spacious";
  motionProps?: {
    initial?: any;
    whileInView?: any;
    transition?: any;
    viewport?: any;
  };
}

const SectionWrapper = ({ 
  children, 
  id, 
  className = "", 
  maxWidth = "default",
  spacing = "default",
  motionProps 
}: SectionWrapperProps) => {
  const maxWidthClass = {
    default: "max-w-7xl",
    wide: "max-w-full",
    narrow: "max-w-5xl"
  }[maxWidth];

  const spacingClass = {
    default: "py-16 px-4",
    compact: "py-12 px-4", 
    spacious: "py-20 px-4"
  }[spacing];

  const defaultMotionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  const finalMotionProps = motionProps ? { ...defaultMotionProps, ...motionProps } : defaultMotionProps;

  return (
    <motion.section
      id={id}
      className={`${spacingClass} ${className}`}
      {...finalMotionProps}
    >
      <div className={`${maxWidthClass} mx-auto`}>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
