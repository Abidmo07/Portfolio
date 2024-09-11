import {motion} from "framer-motion"
export default function About() {
  return (
    <div className="flex flex-col border-b border-neutral-900 pb-16"  >
        <motion.h2
             initial={{opacity:0}}
             whileInView={{opacity:1,scale:1}}
             transition={{
               duration:1.2,
               delay:0.2
             }}
        className="font-thin tracking-tighter my-20 text-center text-4xl text-white">About <motion.span
        initial={{opacity:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{
          duration:1.2,
          delay:0.2
        }}
        className="text-gray-500">Me</motion.span> </motion.h2>
        <div className="flex flex-wrap ">

            <div className="w-full lg:w-1/2 p-8">
            <div className="flex justify-center items-center">
                <motion.img
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.5,delay:0.2}}
                className="rounded-xl" src="/webdev.jpg" alt="web" />
            </div>
                
            </div>
            <div className="w-full lg:w-1/2 p-8">
            <div className="flex justify-center items-center">
                                <motion.p
                                     initial={{x:100,opacity:0}}
                                     whileInView={{x:0,opacity:1}}
                                     transition={{duration:0.5,delay:0.2}}
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, modi iure? Consequatur voluptatem, illo incidunt iste aliquam natus quas ab, nihil ullam accusantium sed? Impedit sint temporibus blanditiis quisquam accusantium, voluptate, sed unde quae vero natus reiciendis voluptates nam asperiores dignissimos, quod quibusdam ratione excepturi officiis adipisci iusto commodi? Sint quam ipsam iure ex est odit dolore quidem totam sunt molestiae, quibusdam aliquam temporibus, placeat, quas culpa. Aliquid, harum nostrum doloribus cumque dignissimos quisquam magni minima nulla et temporibus est iure accusantium perferendis amet aperiam reiciendis a. Qui error tempora tempore fugit porro architecto ex eaque, nostrum recusandae nihil velit!</motion.p>

            </div>
            </div>
        </div>
      
    </div>
  )
}
