// React
import { motion } from "framer-motion";



export default function Hero() {
  return (
    <>
     <div className="flex flex-col lg:flex-row mx-10 border-b border-neutral-900 pb-16 my-20">
      <div className="w-full lg:w-1/2 flex flex-col lg:items-start lg:justify-center">
        <motion.h1
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0.2}} 
        
        className="text-4xl lg:text-8xl font-thin tracking-tighter pb-4 lg:pb-16">
          Ramzi Abid
        </motion.h1>
        <motion.span
          initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.4}} 
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl tracking-tighter text-transparent">
          Full Stack Developer
        </motion.span>
        <motion.p 
          initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:0.5,delay:0.6}} 
        className="my-2 max-w-xl font-light tracking-tighter text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque in
          a obcaecati officiis, totam illo accusantium dicta ipsam explicabo
          quas laudantium sed autem illum iste exercitationem tempore
          officia mollitia reprehenderit!
        </motion.p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:mt-12">
        <div className="relative w-48 h-48 lg:w-80 lg:h-80">
          <motion.img
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.4}} 
            className="absolute inset-0 object-cover rounded-full"
            src="/ramzi.jpg"
            alt="ramzi"
          />
        </div>
      </div>
    </div>
    </>
  );
}
