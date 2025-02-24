import {
  SpecificationClassicBlock,
  SpecificationHorizontalBlock,
  SpecificationVerticalBlock
} from "@components/SpecificationsBlocks/SpecificationsBlocks";
import WebDesign from "@assets/svg/web-design.svg";
import UxUiDesign from "@assets/svg/ux-ui-design.svg"
import ResponsiveDesign from "@assets/svg/responsive-design.svg"
import Ecommerce from "@assets/svg/ecommerce.svg"
import Webflow from "@assets/svg/webflow.svg"
import CustomDevelopment from "@assets/svg/custom-design.svg"
import PeopleImage from "@assets/png/people.png"
import WebflowImage from "@assets/png/webflow.png"

const specifications = [
  {
    "id": 0,
    "icon": WebDesign,
    "title": "Web Design",
    "description": "From concept to launch, we create stunning, user-centric websites that elevate.",
  },
  {
    "id": 1,
    "icon": UxUiDesign,
    "title": "UI/UX Design",
    "description": "From concept to launch, we create stunning, user-centric websites that elevate.",
  },
  {
    "id": 2,
    "icon": ResponsiveDesign,
    "title": "Responsive Design",
    "description": "From concept to launch, we create stunning, user-centric websites that elevate.",
  },
  {
    "id": 3,
    "icon": Ecommerce,
    "title": "E-commerce",
    "description": "From concept to launch, we create stunning, user-centric websites that elevate.",
    "image": PeopleImage,
  },
  {
    id: "4",
    "icon": Webflow,
    "title": "Webflow",
    "description": "From concept to launch, we create stunning, user-centric websites that elevate.",
    "image": WebflowImage,
  },
  {
    id: "5",
    "icon": CustomDevelopment,
    "title": "Custom development",
    "description": "From concept to launch, we create stunning, user-centric websites",
  },
]

export default function Specifications() {
  return (
    <section className="container font-[Raleway] font-normal">
      <div className="large:-mt-[200px] mt-[30px] middle:mt-[0px]">
        <h1 className="font-bold h2__title">What We do</h1>
        <div className="small:block large:grid grid-cols-4 gap-4 mt-[24px] grid-auto-rows-[252px]">
          {specifications.map((item, index) => {
            let columnSpan = "";
            let rowSpan = "";
            let widthClass = "w-full";

            if (index === 3) {
              rowSpan = "row-span-2";
            } else if (index === 4) {
              columnSpan = "col-span-2";
            }

            return (
              <div className={`flex gap-4 ${columnSpan} ${rowSpan}`} key={item.id}>
                <SpecificationClassicBlock
                  icon={item.icon}
                  title={item.title}
                  desc={item.description}
                  image={item.image}
                  customHeight="auto"
                  customWidth="auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
