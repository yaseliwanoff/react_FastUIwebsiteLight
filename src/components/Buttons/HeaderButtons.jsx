export default function HeaderButton({
  text,
  fontWeight="400",
  backgroundColor="inherit",
  borderRadius="10px",
  textColor,
  paddingY,
  paddingX }) {
    const buttonStyle = {
      color: textColor,
      fontWeight: fontWeight,
      backgroundColor: backgroundColor,
      paddingTop: paddingY,
      paddingBottom: paddingY,
      paddingRight: paddingX,
      paddingLeft: paddingX,
      borderRadius: borderRadius,
    };

    buttonStyle.backgroundColor !== "inherit" ? buttonStyle.fontWeight="600" : buttonStyle.fontWeight="400";

    return (
      <button className="button-classic" style={buttonStyle}>{text}</button>
    )
  }