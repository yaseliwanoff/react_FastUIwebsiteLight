import Input from "@components/Input/Input";
import ClassicButton from "@components/Buttons/ClassicButtons";
import Star from "@assets/svg/star.svg";
import Spline from "@assets/svg/spline.svg";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

const inputsContent = [
  {
    name: "email",
    placeholder: "example@email.com",
    type: "email",
    area: false,
  },
  {
    name: "name",
    placeholder: "write your name",
    type: "text",
    area: false,
  },
  {
    name: "message",
    placeholder: "write your message...",
    type: "text",
    area: true,
  },
]

export default function Contacts() {
  return (
    <section className="font-[Raleway] font-normal pb-5">
      <div className="hidden middle:flex justify-between absolute w-full mix-blend-color-burn">
        <div className="flex items-end">
          <motion.img 
            className="mb-4"
            src={Star}
            alt="star"
            animate={{
              translateY: [-80, 100]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="flex items-star z-0">
          <motion.img
            className="mt-4"
            src={Spline}
            alt="star"
            animate={{
              translateY: [50, -30],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="container relative z-20">
        <h2 className="h2__title font-bold flex justify-center text-center mt-[25px] large:mt-[150px]">Let’s Get in Touch</h2>
        <div className="flex flex-col gap-4 items-center w-[100%] mt-14">
          {inputsContent.map((item) => (
            <Input
              key={item.name}
              inputName={item.name}
              inputPlaceholder={item.placeholder}
              inputType={item.type}
              area={item.area}
            />
          ))}
          <div>
          <ClassicButton
            text="Get in Touch"
            textColor="#FFFFFF"
            fontWeight="500"
            backgroundColor="#4E47FF"
            paddingY="19px"
            borderRadius="10px"
            paddingX="21vw"
          />
          </div>
        </div>
      </div>
    </section>
  )
}