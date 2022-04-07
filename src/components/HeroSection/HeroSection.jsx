import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

function HeroSection() {
    const variants = {
        visible: { opacity: 1, x:0 ,transition: {duration: 1, delay: 0.5} },
        hidden: { opacity: 0 , x:-100 },
      }

  return (
    <section className="hero-section h-[100vh] w-full flex justify-center items-start md:items-center">

        <div className="relative mt-4 md:mt-0 max-w-[780px] lg:max-w-[900px] p-4">

            <div className="relative flex flex-col  items-center md:items-stretch md:flex-row gap-4 z-[2] content">

                <div className="">
                <motion.div 
                    variants={variants} 
                    initial="hidden"
                    animate="visible"    
                             >
                    <div className="img-container border-l-4 border-[#EA6035] relative w-[225px] md:w-[250px] lg:w-[300px] aspect-square ">
                        <Image src="/me2.jpg" alt="my_image" layout='fill' />
                    </div>
                </motion.div>

                </div>

                <div className="my-data font-sans flex flex-col justify-between"> 

                    <div className="greetings text-black/80 mb-10 md:mb-0">
                        <div className="hello text-base md:text-xl lg:text-3xl leading-none font-bold">Hello!</div>
                        <div className="my-name text-6xl md:text-[5rem] lg:text-[5.5rem] leading-none">I&apos;m Juan Carlo </div>
                    </div>

                    <div className="description text-xl md:text-3xl lg:text-4xl font-bold leading-[1.2] text-slate-800">
                        I&apos;m a selft-taught Web Developer specializing in <span className="text-lg md:text-5xl lg:text-6xl font-extrabold text-[#EA6035]">FRONTEND DEVELOPMENT</span> and <span className="text-lg md:text-5xl lg:text-6xl font-extrabold text-[#EA6035]">CREATIVE DESIGN.</span>
                    </div>

                </div>

            </div>

            <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
                .my-data {
                    font-family: 'Bebas Neue', cursive;
                }
            `}</style>

        </div>

    </section>
  )
}

export default HeroSection