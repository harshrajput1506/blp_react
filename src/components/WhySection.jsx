import img from "../assets/political_man.svg";
import {
  whyUSQues,
  whyUsSol1,
  whyUsSol2,
  whyUsSol3,
} from "../constants/Constant";

const WhySection = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row">
      <div className="space-y-5">
        <h1 className=" text-5xl font-bold text-center md:text-start">
          WHY US?
        </h1>
        <p className=" text-xl max-w-4xl">{whyUSQues}</p>
        <p className=" text-sm max-w-4xl opacity-80">{whyUsSol1}</p>
        <p className=" text-sm max-w-4xl opacity-80">{whyUsSol2}</p>
        <p className=" text-sm max-w-4xl opacity-80">{whyUsSol3}</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={img} alt="Why US Img" />
      </div>
    </div>
  );
};

export default WhySection;
