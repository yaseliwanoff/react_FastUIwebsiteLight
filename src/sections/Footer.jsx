import Logo from "@assets/svg/logo.svg";
import Instagram from "@assets/svg/insta.svg";
import LinkIn from "@assets/svg/link.svg";
import TikTok from "@assets/svg/tiktok.svg";
import Dribble from "@assets/svg/dribbble.svg";
import FooterButtons from "@components/Buttons/FooterButtons";
import Blur1 from "@assets/svg/blur1.png";
import Blur2 from "@assets/svg/blur2.png";

const footerButtons = [
  {
    icon: Instagram
  },
  {
    icon: LinkIn
  },
  {
    icon: TikTok
  },
  {
    icon: Dribble
  },
]

export default function Footer() {
  return (
    <footer className="">
      <div className="pb-20">
        <div className="relative z-0 hidden large:flex">
          <div className="absolute bottom-0 left-0 -top-[520px]">
            <img src={Blur1} alt="" />
          </div>
          <div className="absolute bottom-0 right-0 -top-[780px]">
            <img src={Blur2} alt="" />
          </div>
        </div>
        <div className="z-10 pt-[130px] relative">
          <div className="container items-center font-[Raleway] font-normal rounded-[40px] bg-white p-[72px] border border-[#FFFFFF] block middle:flex justify-between">
            <div>
              <img src={Logo} alt="logo" />
              <p className="w-auto middle:w-[356px] opacity-60 text-[16px] mt-9">Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.</p>
            </div>
            <div>
              <div>
                <nav className="">
                  <a href="#" className="p-1 mr-10 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">Home</a>
                  <a href="#" className="p-1 mr-10 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">About</a>
                  <a href="#" className="p-1 mr-10 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">Our works</a>
                  <a href="#" className="p-1 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">Services</a>
                </nav>
              </div>
              <div className="mt-[70px] flex gap-4">
                {footerButtons.map((item, index) => (
                  <FooterButtons
                    key={index}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}