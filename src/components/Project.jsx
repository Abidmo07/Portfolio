import {motion} from "framer-motion"
export default function Project() {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
      className="tracking-tighter font-thin text-center text-white my-20 text-4xl">
        Porjects
      </motion.h2>
      <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
}
