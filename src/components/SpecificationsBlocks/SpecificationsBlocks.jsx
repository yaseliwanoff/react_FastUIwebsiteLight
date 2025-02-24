export function SpecificationClassicBlock({ icon, title, desc, image, customHeight = "252px", customWidth = "280px" }) {
  let setFlex = "";
  let csImageWidth = "";
  let csImageHeight = "";
  let csImagePosition = "";
  let marginLeft = "";
  let marginTop = "";

  if (title === "Webflow") {
    setFlex = "flex";
    marginLeft = "ml-[98px]";
    csImageWidth  = "max-w-[218px]";
    csImageHeight = "max-w-[214px]";
  } else if (title === "E-commerce") {
    marginTop = "mt-[22px]";
    csImageWidth  = "max-w-[238px]";
    csImageHeight = "max-h-[258px]";
    csImagePosition = "justify-center";
  }

  return (
    <div style={{
      borderRadius: "10px",
      height: customHeight,
      width: `large:${csImageWidth}`,
    }} className={`middle:w-full bg-white p-[22px] ${setFlex}`}>
      <div>
        <div style={{
          borderRadius: "10px",
        }} className="w-[44px] h-[44px] items-center flex justify-center bg-[#F5F8FF] p-[10px]">
          <img src={icon} alt={title} />
        </div>
        <h4 className="font-semibold text-[20px] mt-[19px]">{title}</h4>
        <p style={{
          maxWidth: "231px"
        }} className="opacity-60 mt-[19px]">{desc}</p>
      </div>
      <div className={`${marginLeft} middle:ml-auto hidden middle:flex overflow-x-hidden`}>
        <img className={` flex flex-col ${csImagePosition} ${csImageWidth} ${csImageHeight} ${marginTop}`} src={image} alt="" />
      </div>
    </div>
  )
}

export function SpecificationHorizontalBlock({}) {}

export function SpecificationVerticalBlock({}) {}

