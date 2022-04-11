import MainLayout from '../../src/layouts/MainLayout';
import {useWorksState} from '../../src/store/useStore'
import Link from 'next/link'
import {useState} from 'react'
export default function Portfolio() {
    const [currentTab, setCurrentTab] = useState('works')

    return (
      <MainLayout>
        <div className="min-h-screen w-full py-20">
          <div className="works w-full md:w-[620px] lg:w-[750px] xl:w-[900px] m-auto px-2">
            <div className="title text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-10">Portfolio</div>
            <div className="text-sm md:text-base categories flex gap-1 pb-6 pt-2">
              <div onClick={() => setCurrentTab('works')} className={`web-app rounded-sm ${currentTab==='works'? 'bg-darkBlue text-white' :'bg-transparent text-black border-darkBlue/20'} border-2 cursor-pointer transition-all  py-1 px-6`}>Web Application</div>
              <div onClick={() => setCurrentTab('graphicDesigns')} className={`graphic-design rounded-sm ${currentTab==='graphicDesigns'? 'bg-darkBlue text-white' :'bg-transparent text-black border-darkBlue/20'} border-2 cursor-pointer transition-all  py-1 px-6`}>Graphic Design</div>
            </div>
              {
                currentTab==='works'?
                <Works /> :
                <GraphicDesigns />
              }
          </div>
        </div>
      </MainLayout>
    ) 
}

const GraphicDesigns = () => {
  const graphicDesigns = useWorksState(state => state.graphicDesigns)

  return (
    <ul className="works flex flex-col gap-4">
      GRAPHIC DESIGNS
    </ul>
  )
}

const Works = () => {
  const works = useWorksState(state => state.works)
  return (
    <ul className="works flex flex-col gap-4">
      {
        works.map(work => {
          return (
            <li key={work.id} className="block max-w-full py-2 px-4 border-2 border-black/10 rounded-lg bg-black/0 transition-all cursor-pointer hover:bg-[rgba(0,0,0,0.05)]">
              <Link href={`/portfolio/${work.slug}`}>
                <a>
                  <div className="title text-2xl md:text-3xl text-[#EA6035]">{work.name}</div>
                  <div className="description text-lg md:text-xl text-black/60">{work.description}</div>
                </a>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}