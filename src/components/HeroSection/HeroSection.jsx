import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

function HeroSection() {
    const variants = {
        visible: { opacity: 1, x:0 ,transition: {duration: 1, delay: 0.5} },
        hidden: { opacity: 0 , x:-100 },
      }

  return (
    <section className="hero-section pt-10 h-max md:h-screen w-full flex justify-center items-start md:items-center">

        <div className="relative h-full flex items-center max-w-[780px] lg:max-w-[900px] p-4">

            <div className="relative flex-col items-center md:flex-row flex md:items-stretch gap-4 z-[2] content">


                <div className="flex flex-col items-center">
                    <div className="greetings block md:hidden text-black/80 text-center mb-4">
                        <div className="hello text-5xl leading-none">Hello!</div>
                        <div className="my-name text-6xl leading-none font-bold">I&apos;m Juan Carlo </div>
                    </div>
                    <motion.div 
                        variants={variants} 
                        initial="hidden"
                        animate="visible"    
                                >
                        <div className="img-container border-l-4 border-orange relative w-[225px] md:w-[250px] lg:w-[300px] aspect-square ">
                            <Image src="/me2.jpg" alt="my_image" layout='fill' />
                        </div>
                    </motion.div>
                </div>

                <div className="my-data flex flex-col justify-between w-2/4 md:w-full"> 

                    <div className="greetings hidden md:block text-black/80 mb-10 md:mb-0">
                        <div className="hello text-base md:text-xl lg:text-3xl leading-none font-bold">Hello!</div>
                        <div className="my-name text-6xl md:text-[5rem] lg:text-[5.5rem] leading-none">I&apos;m Juan Carlo </div>
                    </div>

                    <div className="description text-center md:text-left text-4xl md:text-3xl lg:text-4xl font-bold leading-[1.2] text-slate-800">
                        I&apos;m a selft-taught Web Developer specializing in <span className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-orange">FRONTEND DEVELOPMENT</span> and <span className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-orange">CREATIVE DESIGN.</span>
                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default HeroSection