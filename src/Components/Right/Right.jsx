import { motion } from "motion/react";
import Image from "../Image";
import Text from "../Text";

export default function Right() {
  const imgSrc =
    "https://i.pinimg.com/736x/78/8f/b9/788fb91080f878bb5606127aac7637c4.jpg";
  return (
    <div className="lg:w-1/2 flex flex-col gap-3 h-full">
      <div className="flex flex-col md:flex-row gap-3 h-2/3 w-full">
        <div className="grid grid-cols-2 gap-3 md:w-2/3 h-full">
          <Text text="I’m not broken, just beautifully twisted." />
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
            href="https://in.pinterest.com/pin/2181499815766109"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col-reverse bg-[#F0EFEA] h-full rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <div className="flex flex-row gap-1 md:flex-col ml-5 mb-5">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  //scale: { type: "spring", visualDuration: .5, bounce: 0.01 },
                  type: "spring",
                  stiffness: 900,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-5 h-5 rounded-full bg-[#313131]"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  //scale: { type: "spring", visualDuration: .5, bounce: 0.01 },
                  type: "spring",
                  stiffness: 900,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-5 h-5 rounded-full bg-[#964144]"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  //scale: { type: "spring", visualDuration: .5, bounce: 0.01 },
                  type: "spring",
                  stiffness: 900,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-5 h-5 rounded-full bg-white"
              ></motion.div>
            </div>
          </motion.a>
        </div>
        <div className="flex md:flex-col gap-3 md:w-1/3 h-full">
          <motion.div
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
            className="flex justify-center items-center border border-[#964144] md:h-1/2 w-full rounded-lg"
          >
            <h1 className="text-5xl text-[#964144]  font-bold">666</h1>
          </motion.div>
          <motion.div
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
            className="flex justify-center items-center border border-[#964144] md:h-1/2 w-full rounded-lg"
          >
            <h1 className="text-5xl text-[#964144]  font-bold">Havoc</h1>
          </motion.div>
        </div>
      </div>
      <div className="flex gap-3 h-1/3 w-full">
        <Image
          pinLink="https://in.pinterest.com/pin/351912465772830/"
          imgSrc="https://i.pinimg.com/originals/5d/31/2b/5d312bed12dfd21bf4d3e8ff92d0560f.gif"
        />
        <Text text="The mind is a labyrinth, and I’m lost in its twists." />
      </div>
    </div>
  );
}
