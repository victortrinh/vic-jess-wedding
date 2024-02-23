"use client";

import { MenuItem } from "@/components/MenuItem";
import { MenuToggle } from "@/components/MenuToggle";
import { useDimensions } from "@/hooks/useDimensions";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";

const sidebarMotion = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  

export const Sidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      {isOpen && <div className="absolute inset-0 w-[100vw] h-[100vh] bg-black opacity-60 z-30" onClick={() => toggleOpen()} />}
      <motion.div className="bg-white absolute top-0 bottom-0 left-0 w-[100vw] md:w-[400px] z-30 shadow-[0_3px_10px_rgb(0,0,0,0.2)]" variants={sidebarMotion} />
      <motion.ul className="absolute top-[80px] w-full z-30 px-7" variants={variants}>
          <MenuItem />
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};
