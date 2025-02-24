import GradientBackground from "@assets/png/bg-gradient.png";
import ClassicButtons from "@components/Buttons/ClassicButtons";

export default function Hero() {
  return (
    <main className="container font-[Raleway] font-normal relative">
      <div className="flex justify-center -mt-[0%] middle:-mt-[30%] items-center">
        <img 
          src={GradientBackground} 
          alt="gradient background" 
          className="z-0" 
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
          <h1 className="font-bold text-3xl middle:text-5xl large:text-[73px] w-[300px] middle:w-[480px] large:w-[737px] text-center leading-[100%]">
            Awesome UI Dark Template for Webflow Agency
          </h1>
          <div className="mt-10">
            <ClassicButtons
              text="Get in Touch"
              backgroundColor="#252432"
              fontWeight="500"
              textColor="#FFFFFF"
              paddingY="18px"
              paddingX="58px"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
