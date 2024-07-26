import React from "react";
import goalImg from "../assets/goal.svg";
import flagImg from "../assets/flag.svg";
import accountImg from "../assets/account.svg";
import { ideologies } from "../constants/Constant";

const IdeologySection = () => {
  return (
    <div className="mx-auto my-24 bg-secondaryBackground rounded-2xl flex flex-col justify-center items-center space-y-5">
      <h1 className="mt-10 text-5xl font-bold text-primary">COMMITMENTS</h1>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 justify-items-center gap-x-4">
        {ideologies.map((ideology, idx) => (
          <div
            key={idx}
            className=" group cursor-pointer w-max bg-white rounded-xl shadow-xl flex mx-4 p-12 justify-center items-center mt-5 mb-10"
          >
            <img
              key={idx}
              src={ideology.img}
              alt="Goal Img"
              className=" w-48 h-48 group-hover:scale-110 transition-all opacity-30"
            />

            <h1 className="absolute z-10 text-2xl font-semibold w-48 text-center">
              {ideology.label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeologySection;
