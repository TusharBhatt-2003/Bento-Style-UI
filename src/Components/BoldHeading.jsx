import { motion } from "motion/react";
import Scene from "./3d/Scene";
import CatsScene from "./3d/BGscene";

const BoldHeading = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.01 },
        // type: "spring",
        // stiffness: 900,
        // damping: 20,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border overflow-hidden border-[#964144] h-2/3 w-full flex justify-center items-center rounded-lg"
    >
      {/* <h1 className="text-5xl text-[#964144] font-bold uppercase">{text}</h1> */}
      <CatsScene />
    </motion.div>
  );
};

export default BoldHeading;
