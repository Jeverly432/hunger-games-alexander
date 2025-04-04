import Image from "next/image";
import Background from "svgs/home/feedback-1.inline.svg"
import FeedbackIcon1 from "svgs/home/feedback-2.inline.svg"
import FeedbackIcon2 from "svgs/home/feedback-3.inline.svg"

import Avatar1 from "images/home/feedback-1.png"
import Avatar2 from "images/home/feedback-2.png"

const list = [
  {
    id: 0,
    icon: <FeedbackIcon1 className="w-40 h-40"/>,
    description: (
      <p className="font-light text-2xl leading-normal tracking-[-0.01em] text-gray-1">
        Thanks to DevOptima, our team can focus more on <strong>innovation</strong> and less on operational challenges. Their <strong>cloud management solutions</strong> are top-notch.
      </p>
    ),
    avatar: Avatar1,
    name: "John Smith",
    position: "IT Director at Reflex"
  },
  {
    id: 1,
    icon: <FeedbackIcon2 className="w-40 h-40"/>,
    description: (
      <p className="font-light text-2xl leading-normal tracking-[-0.01em] text-gray-1">
        DevOptima has been a game-changer for us. With their support, we&apos;ve shifted our focus <strong>from operational hurdles to pushing boundaries in innovation.</strong>
      </p>
    ),
    avatar: Avatar2,
    name: "Jane Doe",
    position: "Tech Lead at Dribble"
  },
]

function Feedback() {
  return (
    <section className="pt-[292px] pb-[287px]">
      <div className="container">
        <div className="flex relative items-center justify-center [&_strong]:font-medium">
          <h2 className="sr-only">Feedback</h2>
          <div className="absolute h-[640px] w-[1920px] -right-[223px] -top-[261px] select-none pointer-events-none">
            <Background />
          </div>
          <ul className="flex items-center justify-center gap-[88px] relative z-1">
            {list.map((item, index) => (
              <li key={item.id} className="flex flex-col w-full max-w-[521px]">
                <div className="relative w-16 h-16 select-none pointer-events-none">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                    {item.icon}
                  </div>
                </div>
                <div className="pt-5">
                  {item.description}
                </div>
                <div className="flex pt-8 gap-3">
                  <div className="flex w-11 h-11 shrink-0 select-none pointer-events-none">
                    <Image src={item.avatar} width={44} height={44} alt={`avatar-${index + 1}`} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-light text-lg leading-[125%] tracking-[-0.02em]">
                      {item.name}
                    </p>
                    <span className="pt-0.5 text-md text-gray-1 font-light leading-[125%] tracking-[-0.05em]">
                      {item.position}
                    </span>
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

export default Feedback