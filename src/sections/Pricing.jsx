import ArrowRight from "@assets/svg/right-arrow.svg"
import Arrow from "@assets/svg/arrow.svg"

export default function Pricing() {
  return (
    <section className="container font-[Raleway] font-normal mt-[86px]">
      <div className="block large:flex items-end justify-between">
        <div className="w-full large:w-[387px]">
          <h2 className="text-[25px] middle:text-[35px] large:text-[60px] font-bold">Pricing</h2>
          <p className="opacity-60 text-[14px]">
            Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.
          </p>
          <div className="mt-[81px] bg-white p-[22px] border border-[#FFFFFF] rounded-[20px]">
            <h3 className="text-[20px] large:text-[35px] font-bold leading-[120%]">Let’s Schedule a Meeting</h3>
            <button className="w-[100%] bg-[#4E47FF] text-white h-[60px] rounded-[10px] mt-[31px]">Schedule Meeting</button>
          </div>
        </div>
        <div className="w-full mt-5 large:w-[624px] h-auto bg-[#FFFFFF] p-[22px] rounded-[20px]">
          <div className="p-[20px]">
            <h4 className="text-[20px] middle:text-[30px] font-bold leading-[120%]">Unlimited Services</h4>
            <p className="w-full large:w-[400px] mt-[21px] opacity-60">Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
            <div className="grid grid-cols-1 large:grid-cols-2 mt-5 gap-4 mb-6 text-[14px]">
              <span className="flex gap-1">
                <img src={Arrow} alt="arrow" />
                Unlimited requests
              </span>
              <span className="flex gap-1">
                <img src={Arrow} alt="arrow" />
                Unlimited requests
              </span>
              <span className="flex gap-1">
                <img src={Arrow} alt="arrow" />
                Unlimited requests
              </span>
              <span className="flex gap-1">
                <img src={Arrow} alt="arrow" />
                Unlimited requests
              </span>
              <span className="flex gap-1">
                <img src={Arrow} alt="arrow" />
                Unlimited requests
              </span>
              <span className="flex gap-1">
                <img src={Arrow} alt="arrow" />
                Unlimited requests
              </span>
            </div>
          </div>
          <div className="p-[42px] bg-[#F5F8FF] rounded-[10px] w-[100%] h-[127px] items-center flex justify-between bottom-0">
            <div>
              <span className="font-bold text-[25px] large:text-[60px]">$3,250</span><span className="text-[20px] opacity-70">/mo</span>
            </div>
            <button><img src={ArrowRight} alt="arrow right" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
