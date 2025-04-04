import Image from "next/image";
import Image1 from "images/home/solutions-1.png"
import Image2 from "images/home/solutions-2.png"
import Image3 from "images/home/solutions-3.png"

const list = [
  {
    id: 0,
    image: Image1,
    title: "Continuous Integration & Deployment",
    description: "Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment."
  },
  {
    id: 1,
    image: Image2,
    title: "Cloud Solutions & Infrastructure Management",
    description: "Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services."
  },
  {
    id: 2,
    image: Image3,
    title: "Automated Testing & Quality Assurance",
    description: "Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market."
  },
]

function Solutions() {
  return (
    <section className="pt-[157px]">
      <div className="container">
        <div className="flex flex-col relative">
          <div className="absolute w-[1220px] h-[396px] bg-blur-hero-ellipse rounded-full blur-[150px] bottom-3 left-1/2 -translate-x-1/2 select-none pointer-events-none" />
          <h2 className="font-aeonik text-5xl leading-[113%] text-center tracking-[-0.01em] max-w-[544px] mx-auto">
            Innovative solutions
            <br />
            for operational excellence
          </h2>
          <p className="pt-4 text-xl max-w-[556px] text-center mx-auto text-gray-1 font-light leading-normal tracking-[-0.02em]">
            Tailored DevOps expertise driving your business momentum.
            Personalized solutions for growth and evolution.
          </p>
          <ul className="flex pt-14 gap-10 justify-center">
            {list.map((item, index) => (
              <li key={item.id} className="flex flex-col w-[calc(33.33%-14px)] rounded-2xl max-w-[380px] backdrop-blur-[48px] shadow-[0px_10px_40px_0px_#0000004D]">
                <div className="relative rounded-xl">
                  <div className="flex flex-col rounded-xl bg-solutions-gradient">
                    <div className="select-none pointer-events-none h-[277px] w-full relative">
                      <Image src={item.image} alt={`image-${index + 1}`} width={280} height={277} className="w-full"/>
                    </div>
                    <div className="px-8 pb-8 pt-0">
                      <h3 className="pt-0.5 leading-[125%] tracking-[-0.01em] text-xl">
                        {item.title}
                      </h3>
                      <p className="pt-3 text-gray-1 font-light leading-[138%] tracking-0 text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl pointer-events-none">
                    <div className="absolute inset-0 rounded-xl border border-[rgba(116,159,246,0.3)]" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Solutions