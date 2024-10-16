import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps = 6;
  return totalSteps - index -1;
};

const Stairs: React.FC = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration:1.9,
              ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
            }}
            className="w-full h-full bg-gradient-to-b from-[#49BBBD]  to-white border border-white  relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
