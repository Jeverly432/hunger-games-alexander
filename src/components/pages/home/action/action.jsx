import Button from "components/shared/button";

function Action() {
  return (
    <section className="pb-[176px] pt-8">
      <div className="container">
        <div className="flex flex-col items-center relative">
          <div className="absolute w-[800px] h-[800px] bg-blur-hero-ellipse rounded-full blur-[100px] -left-[632px] -bottom-[424px] pointer-events-none select-none" />
          <div className="absolute w-[800px] h-[800px] bg-blur-hero-ellipse rounded-full blur-[100px] -right-[632px] -bottom-[424px] pointer-events-none select-none" />
          <h2 className="font-aeonik bg-action-gradient bg-clip-text text-transparent text-5xl leading-[113%] tracking-[-0.01em] text-center">
            Ready to elevate your DevOps strategy?
          </h2>
          <p className="text-gray-1 pt-[17px] font-light text-xl leading-[150%] tracking-[-0.02em] max-w-[716px] text-center">
            Join the multitude of companies benefiting from optimized DevOps practices. Contact us to discover how DevOptima can help your business.
          </p>
          <div className="flex pt-10 gap-[18px]">
            <Button size='md' theme="white-secondary" className="!tracking-0" transition>Contact us</Button>
            <Button size='md' theme='white-primary' transition >Try for free</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Action