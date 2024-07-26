import React from "react";
import { reforms } from "../constants/Constant";

const ReformsSection = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-primary">PROMISES</h1>
      <div className="grid md:grid-cols-2 md:grid-rows-6 grid-cols-1 grid-rows-12 gap-8 mt-20">
        {reforms.map((reform, index) => (
          <div key={index} className="flex flex-row">
            <h1 className=" text-7xl font-bold text-primary opacity-25">
              {index + 1}
            </h1>
            <p className="text-base p-2">{reform}</p>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default ReformsSection;
