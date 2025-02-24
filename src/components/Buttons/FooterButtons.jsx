export default function FooterButtons({ icon }) {
  return (
    <button className="opacity-100 hover:opacity-70 ease-in-out duration-200 w-[48px] h-[48px] bg-[#F5F8FF] border border-[#F5F8FF] rounded-[100px] flex items-center justify-center">
      <img src={icon} alt="icon" />
    </button>
  )
}