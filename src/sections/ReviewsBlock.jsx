import Stars from "@assets/png/stars.png"
import Avatars from "@assets/svg/avatars.svg"

export default function ReviewsBlock() {
  return (
    <section className="container mt-[86px] font-[Raleway] font-normal">
      <div className="flex justify-center">
        <div className="flex items-center gap-3 bg-white border border-[#E4EAF8] rounded-[22px] p-[23px]">
          <div className="">
            <img src={Avatars} alt="avatars" />
          </div>
          <div className="block">
            <span className=""><strong>5.0</strong> Based on <strong>145</strong> Reviews</span>
            <span>
              <img src={Stars} alt="stars" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}