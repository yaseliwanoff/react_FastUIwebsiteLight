import LogoCompany from "@assets/svg/logo.svg"
import HeaderButtons from "@components/Buttons/HeaderButtons"
import Menu from "@assets/svg/menu-burger.svg"

export default function Header() {
  return (
    <header className="container z-50 py-5 font-[Raleway] font-normal overflow-x-hidden">
      <div className="flex items-center justify-center">
        <div>
          <img draggable={false} src={LogoCompany} alt="logo company" className="w-32 middle:w-40 h-full" />
        </div>
        <div className="grow text-center">
          <img src={Menu} alt="menu" className="w-5 h-5 large:hidden cursor-pointer ml-auto" />
          <div className="hidden large:flex overflow-hidden z-50">
            <nav className="py-[22px] rounded-[20px] backdrop-blur-xl z-50 border border-[#FFFFFF] w-[480px] mx-auto">
              <a href="#" className="p-1 mr-10 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">Home</a>
              <a href="#" className="p-1 mr-10 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">About</a>
              <a href="#" className="p-1 mr-10 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">Our works</a>
              <a href="#" className="p-1 opacity-80 hover:opacity-100 ease-in-out duration-300 inline-block">Services</a>
            </nav>
          </div>
        </div>
        <div className="hidden large:flex gap-5 z-20">
          <HeaderButtons
            text="Sign In"
            backgroundColor="inherit"
            textColor="#8987A1"
            paddingY="0px"
            paddingX="0px"
          />
          <HeaderButtons
            text="Sign Up"
            backgroundColor="#4E47FF"
            textColor="#FFFFFF"
            paddingY="12px"
            paddingX="36px"
          />
        </div>
      </div>
    </header>
  )
}