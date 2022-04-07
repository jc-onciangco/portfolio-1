import MainLayout from '../../src/layouts/MainLayout';
import {useWorksState} from '../../src/store/useStore'
import Link from 'next/link'
export default function Portfolio() {
  const works = useWorksState(state => state.works)

    return (
      <MainLayout>
        <div className="min-h-screen w-full py-20">
          <div className="works w-[900px] m-auto">
            <div className="title text-5xl mb-10">Portfolio</div>
            <ul className="works flex flex-col gap-4">
              {
                works.map(work => {
                  return (
                    <li key={work.id}>
                      <Link href={`/portfolio/${work.id}`}>
                        <a className="block py-2 px-4 border-2 border-black/10 rounded-lg bg-black/0 transition-all cursor-pointer hover:bg-[rgba(0,0,0,0.05)]">
                          <div className="title text-3xl text-[#EA6035]">{work.name}</div>
                          <div className="description text-xl text-black/60">{work.description}</div>
                        </a>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </MainLayout>
    ) 
}