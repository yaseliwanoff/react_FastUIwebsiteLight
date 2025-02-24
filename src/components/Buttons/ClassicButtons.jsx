export default function ClassicButton({
  text,
  fontWeight="400",
  backgroundColor="inherit",
  textColor,
  paddingY,
  borderRadius="10px",
  paddingX
}) {
  const buttonClassicStyle = {
    color: textColor,
    fontWeight: fontWeight,
    backgroundColor: backgroundColor,
    paddingTop: paddingY,
    paddingBottom: paddingY,
    borderRadius: borderRadius,
    paddingRight: paddingX,
    paddingLeft: paddingX,
  };

  return (
    <button className="button-classic border border-[#373737] middle:border-none" style={buttonClassicStyle}>{text}</button>
  )
}