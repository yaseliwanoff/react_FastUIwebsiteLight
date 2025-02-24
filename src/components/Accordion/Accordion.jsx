export default function Accordion({ title, content, index, activeIndex, onAccordionClick }) {
  const isActive = index === activeIndex;

  return (
    <div className="w-full large:w-[696px] bg-white p-[22px] rounded-[10px] border border-[#FFFFFF]" key={title}>
      <div className="accordion-title flex items-center justify-between" onClick={() => onAccordionClick(index)}>
        <div className="font-bold text-[18px]">{title}</div>
        <div className="cursor-pointer p-2 text-[20px]">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="w-full mt-5 text-[16px] opacity-70 large:w-[608px]">{content}</div>}
    </div>
  );
}
