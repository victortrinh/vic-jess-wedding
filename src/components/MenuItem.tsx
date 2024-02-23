import { motion } from "framer-motion";
import { Heading } from "./Heading";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface Props {
  href: string;
  text: string;
  onClick: () => void;
}


export const MenuItem = ({ href, text, onClick }: Props) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href={href} className="text-lg" onClick={onClick}>
        <Heading variant="amalfi">
          {text}
        </Heading>
      </a>
    </motion.div>
  );
};
