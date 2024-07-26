import { appName, heroText } from "../constants/Constant";
import heroImage from "../assets/hero_image.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const text = heroText.replace(/\n/g, "<br>");
  return (
    <div className="m-4 mx-auto bg-secondaryBackground rounded-2xl">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center">
          <img
            className="w-full h-auto p-6 md:p-16 max-w-xs md:max-w-md lg:max-w-lg"
            src={heroImage}
            alt="heroImage"
          />
        </div>

        <div className="flex-1 bg-white rounded-2xl p-6 md:p-10 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-3xl md:text-5xl text-primary font-bold text-center md:text-start">
            {appName}
          </h1>
          <div className="pt-6 md:pt-12 text-lg md:text-xl">
            <p
              className="opacity-80"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
          <Link
            className="mt-6 md:mt-8 py-2 md:py-3 px-4 md:px-6 bg-secondary text-white rounded-full font-medium text-sm"
            to="/about"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
