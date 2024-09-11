import {motion} from "framer-motion"
export default function Exper() {
  return (
    <div className="pb-4 border-b border-neutral-900">
        <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
        className="tracking-tighter font-thin text-center text-white text-4xl my-20">Experience</motion.h1> 
        <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>    
    </div>
  )
}
