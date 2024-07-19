import React from "react";
import supportImg from "../assets/blp_payment_qr_code.jpeg";
import { supportMsg } from "../constants/Constant";

const SupportSection = () => {
  return (
    <div className="mt-24 max-w-7xl mx-auto flex lg:flex-row flex-col justify-evenly items-center">
      <div className="space-y-5">
        <h1 className=" text-5xl font-bold mt-16 text-center md:text-start">
          SUPPORT US
        </h1>
        <p className=" text-lg max-w-4xl opacity-80">{supportMsg}</p>
        <p className=" text-lg max-w-4xl opacity-80">You may kindly Donate Here:</p>
        <p className=" text-lg max-w-4xl opacity-80">Scan QR Code</p>
        <div className="flex justify-center items-center">
        <p className=" text-lg max-w-4xl opacity-80">OR</p>
        </div>
        <p className=" text-lg max-w-4xl opacity-80">
          Account Name- Bharatiya Liberal party <br />
           Account No- 43137845456 <br />
           IFSC code- SBIN0050303 <br />
           State Bank of India, Parliament Street, Connaught Place, New Delhi
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={supportImg} alt="Support Img" className="w-80 h-80" />
      </div>
    </div>
  );
};

export default SupportSection;
