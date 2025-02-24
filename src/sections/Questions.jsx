import Accordion from "@components/Accordion/Accordion"
import { useState } from "react";
import BackgroundImage from "@assets/svg/spirrle.svg"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

const accordionMenu = [
  {
    id: 0,
    "title": "How can I contact Inkyy Team?",
    "description": "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 1,
    "title": "What services do you offer?",
    "description": "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 2,
    "title": "Do you provide website maintenance services?",
    "description": "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 3,
    "title": "How long does it take to design and develop a website?",
    "description": "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 4,
    "title": "Do you require a deposit for projects?",
    "description": "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
]

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="mt-[174px] font-[Raleway] font-normal">
      <div className="z-0 absolute -mt-32 mix-blend-color-burn">
        <motion.img
          src={BackgroundImage}
          alt="background image"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="container z-10 relative">
        <div className="block large:flex justify-between">
          <div>
            <h2 className="font-bold h2__title leading-[120%]">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-3 mt-7 large:mt-0">
            {accordionMenu.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.description}
                index={index}
                activeIndex={activeIndex}
                onAccordionClick={handleAccordionClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
