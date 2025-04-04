import Image from "next/image";
import Background from "images/home/about-background.png"
import Icon1 from "svgs/home/about-1.inline.svg"
import Icon2 from "svgs/home/about-2.inline.svg"
import Icon3 from "svgs/home/about-3.inline.svg"
import Icon4 from "svgs/home/about-4.inline.svg"

export const list = [
  {
    id: 0,
    icon: <Icon1 className="w-[54px] h-[54px]" />,
    title: "DevOps transformation",
    description: "Reshaping businesses with DevOps expertise."
  },
  {
    id: 1,
    icon: <Icon2 className="w-[54px] h-[54px]" />,
    title: "Efficient operations",
    description: "Streamline processes for productivity gains."
  },
  {
    id: 2,
    icon: <Icon3 className="w-[54px] h-[54px]" />,
    title: "CI/CD implementation",
    description: "Seamless software delivery pipeline."
  },
  {
    id: 3,
    icon: <Icon4 className="w-[54px] h-[54px]" />,
    title: "Automation mastery",
    description: "Unlock full automation potential."
  },
]

function About() {
  return (
    <section className="pt-20 pb-12">
      <div className="container">
        <div className="relative">
          <div className="absolute -top-[55px] w-[854px] h-[619px] -left-[224px] select-none pointer-events-none">
            <Image src={Background} className="absolute inset-0 object-cover" alt="background" width={1000} height={619}/>
          </div>
          <div className="relative ml-[716px] mt-[55px] mr-[126px]">
            <div className="absolute w-[300px] h-[300px] bg-blur-hero-ellipse rounded-full blur-[150px] -left-[310px] -top-[65px] select-none pointer-events-none" />
            <h2 className="font-aeonik text-5xl leading-[113%] tracking-[-0.01em]">
              What is DevOptima?
            </h2>
            <p className="text-gray-1 pt-[18px] font-light text-xl leading-[150%] tracking-[-0.01em]">
              At DevOptima, we are a team of passionate DevOps experts committed to transforming the way businesses approach software development and operations.
            </p>
            <ul className="flex flex-wrap gap-x-20 gap-y-10 pt-14">
              {list.map((item) => (
                <li key={item.id} className="flex flex-col max-w-[242px]">
                  <div className="flex relative w-[36px] h-[36px]">
                    <span className="absolute w-[100px] h-[100px] bg-about-gradient -left-[30px] top-1/2 -translate-y-1/2 z-1" />
                    <div className="absolute -left-2.5 z-10 -top-2">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-medium text-xl leading-[125%] tracking-[-0.02em] pt-3.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-1 pt-2 font-light leading-[138%]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About