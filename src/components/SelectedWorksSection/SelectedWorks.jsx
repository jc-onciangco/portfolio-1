import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'
import Link from 'next/link'
import {useWorksState} from '../../store/useStore'

function SelectedWorks() {
    const works = useWorksState(state => state.works)

    return (
        <section className="selected-works w-full py-8 md:py-36 flex items-center justify-center">
            <div className="content relative m-auto mt-4 md:mt-0 max-w-[780px] lg:max-w-[900px] p-4">

                <div className="title mb-[5rem]">
                    <div className="bg-orange w-max text-white font-extrabold text-4xl md:text-6xl px-10 py-4 mx-auto">
                        MY SELECTED WORKS
                    </div>
                </div>


                <div className="works grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                    works.map(work => {
                        return (
                            <Link href={`/portfolio/${work.slug}`} key={work.id}>
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

        <div className="img-container relative h-[200px] aspect-[1.2/1] rounded-l-md">
            <Image 
                src={work.imgUrl}
                 alt="my_image" 
                 layout='fill' 
                 objectFit='cover' 
            />
        </div>

        <div className="details pl-6 pr-4 py-3 flex flex-col justify-between items-start">

            <div className="text">
                <div className="name text-2xl capitalize font-bold mb-1 text-orange tracking-wider">{work.name}</div>
                <div className="description uppercase font-semibold text-black/60 text-lg tracking-wider">{work.description}</div>
            </div> 

        </div>
    </div>
    )
}

export default SelectedWorks