import { motion } from "motion/react";

const Text = ({ text }) => {
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
      className="bg-[#F0EFEA] w-full flex justify-center items-center rounded-lg"
    >
      <div className="p-5">
        <p className="text-[#2F2F2F] capitalize font-semibold text-sm">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default Text;
