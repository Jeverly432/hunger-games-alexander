'use client'

import HeroBg from "svgs/home/hero-bg.inline.svg"
import Image from "next/image"
import HeroIllustration from "images/home/hero-illustration.png"
import { useCallback, useState } from "react"
import Input from "components/shared/input"


const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function Hero() {
  const [inputValue, setInputValue] = useState("")
  const [status, setStatus] = useState('normal')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChangeInputValue = useCallback((value) => {
    setInputValue(value)
    setStatus('normal')
    setErrorMessage('')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!inputValue) {
      setErrorMessage('Email is a required field')

      return
    }

    if (!EMAIL_REGEX.test(inputValue)) {
      setErrorMessage('Please enter a valid email address')

      return
    }

    // DEMO STATES

    // Loading
    setStatus('loading')
    // eslint-disable-next-line no-undef
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Success
    setStatus('success')
    // eslint-disable-next-line no-undef
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Error
    setStatus('error')
    // eslint-disable-next-line no-undef
    await new Promise(resolve => setTimeout(resolve, 2000))

    setStatus('normal')
  }

  return (
    <section className="pt-[168px] pb-[119px]">
      <div className="container">
        <div className="flex items-start relative justify-between">
          <div className="absolute w-[400px] h-[600px] bg-blur-hero-ellipse rounded-full blur-[100px] -left-[317px] -top-[369px]" />
          <div className="absolute h-[640px] w-[1796px] -right-[223px] -top-[167px] select-none pointer-events-none">
            <HeroBg />
          </div>
          <div className="relative z-1 pt-12.5">
            <h1 className="font-aeonik text-7xl bg-clip-text pt-[51px] bg-hero-gradient text-transparent leading-[113%] tracking-[-0.01em] max-w-[655px]">
              Revolutionize&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; your DevOps journey with DevOptima
            </h1>
            <p className="text-gray-1 max-w-[689px] leading-[150%] font-light text-xl tracking-[-0.01em] pt-6">
              Empower teams to innovate faster through streamlined development, efficient automated workflows, and reliable scaling.
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                value={inputValue}
                placeholder="Your business email..."
                wrapperClassName="w-[464px] mt-[35px]"
                status={status}
                errorMessage={errorMessage}
                onChange={handleChangeInputValue}
                /* Removed type="email for demo error state" */
              />
            </form>
          </div>
          <div className="relative z-1 select-none pointer-events-none">
            <div className="w-[656px] h-[396px] bg-blur-hero-ellipse rounded-full blur-[200px] right-[53px] top-3" />
            <div className="absolute w-[656px] -right-[30px] h-[494px] -top-5">
              <Image src={HeroIllustration} alt="hero-illustration" rel="preload" width={700} height={445} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero