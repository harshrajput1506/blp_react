import img from "../assets/political_man.svg";
import {
  whyUsContent1,
  whyUsContent2,
} from "../constants/Constant";

const WhySection = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-evenly">
      <div className="space-y-5">
        <h1 className=" text-5xl font-bold text-center md:text-start">
        HOW ARE WE DIFFERENT? 
        </h1>
        <p className=" text-base max-w-4xl opacity-80">{whyUsContent1}</p>
        <p className=" text-base max-w-4xl opacity-80">{whyUsContent2}</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt="Why US Img" />
      </div>
    </div>
  );
};

export default WhySection;
