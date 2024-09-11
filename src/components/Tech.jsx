import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandLaravel } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

export default function Tech() {
  return (
    <div className="flex flex-col border-b border-neutral-900 pb-10">
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="tracking-tighter font-thin text-4xl text-center my-20 text-white"
        >
          Technologies
        </motion.h2>
      </div>
      <div className="lg:flex lg:justify-center items-center gap-4 flex flex-wrap justify-center ">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 1,
            delay: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className=" border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 1,
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className=" border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <RiTailwindCssLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 1,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className=" border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <TbBrandLaravel className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: 1.2,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className=" border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>
      </div>
    </div>
  );
}
