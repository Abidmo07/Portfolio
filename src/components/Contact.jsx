import {motion} from "framer-motion"
export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-b border-neutral-900 pb-10">
      <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
      className="tracking-tighter font-thin text-white text-4xl text-center mt-10">Get in Touch</motion.h2>
      <motion.p
      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{
        duration:1.2
      }}
      className="tracking-tighter font-thin text-gray-400">Cité hachemi,Rue khninef Aissa</motion.p>
      <motion.p
         initial={{x:100,opacity:0}}
         whileInView={{x:0,opacity:1}}
         transition={{
           duration:1.2
         }}
      className="tracking-tighter font-thin text-gray-400">+213541027222</motion.p>
      <p className="tracking-tighter font-thin text-gray-400 link-hover">ma.abid@esi-sba.dz</p>
    </div>
  )
}
