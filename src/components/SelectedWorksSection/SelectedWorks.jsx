import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'
import Link from 'next/link'
const works = [
    {
      id: 0,
      name: 'chatout',
      url: 'https://chatout.vercel.app/',
      imgUrl: '/chatout-desktop.png',
      description: "A chat application with some features of FB's messenger app. A user should create an account to use this app.",
      techStack: ["HTML5", "CSS3", "NEXT JS", "Firebase"],
      isItResponsive: true,
      account: {email: 'rose@gmail.com' , password: 'test1234'}
    },
    {
      id: 1,
      name: 'wooz that pokemon',
      url: 'https://wooz-that-pokemon.vercel.app/',
      imgUrl: '/wtp-home.png',
      description: `A browser game inspired by Pokemon's mini-game segment "Who's that Pokemon" where the player guess the pokemon behind its silhouette form.`,
      techStack: ["HTML5", "CSS3", "VUE JS","vuex", "Firebase", "SASS" ],
      isItResponsive: false,
      account: {email: 'uwang@gmail.com' , password: 'test1234'}
    },
    {
      id: 2,
      name: 'monster match',
      url: 'https://monster-match.vercel.app/',
      imgUrl: '/mm.png',
      description: `A memory game in which all of the tiles are laid face down on a surface. The object of the game is to turn over pairs of matching object.`,
      techStack: ["HTML5", "CSS3", "NEXTJS", "Redux toolkit"],
      isItResponsive: true,
      account: {}
    }
  ]



function SelectedWorks() {
  return (
    <section className="selected-works w-full py-40 flex items-center justify-center">
        <div className="content relative m-auto mt-4 md:mt-0 max-w-[780px] lg:max-w-[900px] p-4">

            <div className="title mb-[5rem]">
                <div className="bg-[#EA6035] w-max text-white font-extrabold text-6xl px-10 py-4 mx-auto">
                    MY SELECTED WORKS
                </div>
            </div>


            <div className="works grid grid-cols-2 gap-8">
                {
                works.map(work => {
                    return (
                        <Link href="/" key={work.id}>
                            <a className="relative hover:scale-[1.1] transition-all hover:z-[20]">
                                <Tilt 
                                    tiltMaxAngleX={8} 
                                    glareEnable={true} 
                                    tiltMaxAngleY={3} 
                                    className="shadow-md hover:shadow-2xl"
                                >
                                <Work work={work} />
                                </Tilt>
                            </a>
                        </Link>
                    )
                })
                }
            </div>

        </div>

    </section>
  )
}

const Work = ({work}) => {
    return (
    <div className="work flex flex-col bg-neutral-200 rounded-md overflow-hidden">

        <div className="img-container relative h-[200px] bg-slate-600 aspect-[1.2/1] rounded-l-md">
            <Image 
                src={work.imgUrl}
                 alt="my_image" 
                 layout='fill' 
                 objectFit='cover' 
            />
        </div>

        <div className="details pl-6 pr-4 py-3 flex flex-col justify-between items-start">

            <div className="text">
                <div className="name text-2xl capitalize font-bold mb-1 text-[#EA6035] tracking-wider">{work.name}</div>
                <div className="description uppercase font-semibold text-black/60 text-lg tracking-wider">{work.description}</div>
            </div> 

        </div>
    </div>
    )
}

export default SelectedWorks