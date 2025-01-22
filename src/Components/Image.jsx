import { motion } from "motion/react";

const Image = ({ imgSrc, pinLink }) => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        //scale: { type: "spring", visualDuration: .5, bounce: 0.01 },
        type: "spring",
        stiffness: 900,
        damping: 20,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={pinLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundImage: `url(${imgSrc})` }}
      className="bg-cover bg-center w-1/3 rounded-lg overflow-hidden"
    ></motion.a>
  );
};

export default Image;
