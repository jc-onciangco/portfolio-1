import React from 'react'
function BasicInfoSection() {
    const programming = ["html5","css3","javascript","tailwindcss","Next JS (React JS)"]
    const designing = ["figma", "adobe illustration" , "krita"]

  return (
    <section className="py-20 w-full">
        <div className="relative m-auto mt-4 md:mt-0 max-w-[780px] lg:max-w-[900px] p-4">
            <Format header={'who am i'}>
                My name is Juan Carlo Onciangco. I am Computer Engineer who has strong passion in programming and designing.
                I do coding for more than a year and my specilization is to build and design web application&apos;s user interface.
            </Format>
            <Format header={'what tools that i currently using'}>
                <div className="">
                    <div className="tools mb-8">
                        <div className="title mb-2">Coding and Programming</div>
                        <ul className="text-3xl font-thin tracking-wide flex flex-wrap gap-4">
                            {
                                programming.map((tool, index) => {
                                    return (
                                        <li className="bg-orange text-white py-2 px-5 text-2xl" key={index}>{tool}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="designing">
                        <div className="title mb-2">Designing and Illustrating</div>
                        <ul className="text-3xl font-thin tracking-wide flex flex-wrap gap-4">
                            {
                                designing.map((tool, index) => {
                                    return (
                                        <li className="bg-orange text-white py-2 px-5 text-2xl" key={index}>{tool}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Format>
        </div>
    </section>
  )
}

const Format = ({children, header}) => {
    return (
        <div className="content max-w-[900px] m-auto mb-16">
            <div className="title font-extrabold text-5xl  md:text-6xl mb-8">{header}<span className="question-mark ml-2 text-7xl inline-block text-orange">?</span></div>
            <style jsx>{`

                    .question-mark {
                        animation: swing 5s linear infinite;
                        transform-origin: 50% 100%
                    }

                    @keyframes swing {
                        0% {transform: rotate(-12deg);}
                        50% {transform: rotate(12deg);}
                        100% {transform: rotate(-12deg);}
                    }

                `}</style>

            <div className="info text-3xl md:text-4xl text-black/60">
                {children}
            </div>
        </div>
    )
}

export default BasicInfoSection