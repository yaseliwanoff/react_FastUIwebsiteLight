import SliderButtons from "@components/Buttons/SliderButtons";
import LeftArrow from "@assets/svg/left-arrow.svg";
import RightArrow from "@assets/svg/right-arrow.svg";
import BackgroundImage from "@assets/svg/bg-image.svg";
import Work1 from "@assets/png/work1.png";
import Work2 from "@assets/png/work2.png";
import Work3 from "@assets/png/work3.png";
import WorkBlocksImages from "../components/WorkBlocksImages/WorkBlocksImages";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const worksImages = [
  {image: Work1},
  {image: Work2},
  {image: Work3},
]

export default function CheckWork() {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={mainRef} className="container mt-[10px] large:mt-[100px] font-[Raleway] font-normal overflow-hidden relative h-screen">
      <div className="absolute inset-0 flex justify-center items-center z-0 mix-blend-color-burn">
        <motion.img style={{
                rotate: 30,
                translateY: translateY,
              }} draggable={false} src={BackgroundImage} alt="bg image" className="object-contain h-full w-full" />
      </div>
      <div className="relative mt-24">
        <div className="flex justify-between items-center z-10">
          <div className="hidden large:flex">
            <SliderButtons 
              imageButton={LeftArrow}
            />
          </div>
          <div className="text-center">
            <h2 className="h2__title font-bold">Check our Work</h2>
            <p className="w-full large:w-[499px] opacity-60">
              Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.
            </p>
          </div>
          <div className="hidden large:flex">
            <SliderButtons 
              imageButton={RightArrow}
            />
          </div>
        </div>
        <div className="flex gap-10 mt-8">
          {worksImages.map((item) => (
            <WorkBlocksImages 
              image = {item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}