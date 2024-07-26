import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import munishProfileImg from "../assets/munish.png"
import akbarProfileImg from '../assets/akbar.jpg'

const Profile = () => {
  return (
    <div className="bg-backgroud min-h-screen px-10 min-w-fit">
      <Navbar />
      <div className="mt-20 max-w-7xl mx-auto flex flex-col">
        <h1 className="text-7xl text-primary font-bold opacity-30">
          PROFILE
        </h1>

        {/* Profile of Munish Kumar Raizada */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10">
          <div className="flex-shrink-0">
            <img
              src={munishProfileImg} 
              alt="Dr. Munish Kumar Raizada"
              loading="lazy"
              className="rounded-lg w-48 h-48 object-cover"
            />
          </div>
          <div className="lg:ml-10 mt-6 lg:mt-0">
            <h1 className="text-4xl font-bold opacity-80">
              Munish Kumar Raizada
            </h1>
            <div className="text-sm opacity-80 mt-2">
              President, Bharatiya Liberal Party (BLP) <br />
              MD, D.A.B.P. (Diplomate of American Board of Pediatrics) <br />
              MBBS: from MGIMS, Sewagram, Wardha, India <br />
              Medical Residency in Pediatrics: Long Island Jewish (LIJ) Hospital, New York, USA. <br />
              Fellowship in Neonatology: John H Stroger Hospital of Cook County, Chicago, IL, USA
            </div>

            <div className="text-lg opacity-80 mt-4">
              Dr. Munish Raizada moved to the USA in 2002 for higher training in Neonatology and thereafter had been practicing as a neonatologist doctor. In September 2023, he moved back to India to focus full time on politics.
              <br />
              Munish actively supported India Against Corruption (Anna Aandolan) in 2011-2012 and thereafter joined Aam Aadmi Party as a full-time member in the hope to bring about Vyavastha Parivartan (overhaul of system). However, true to his core, he opposed the move of the party to shield donors’ list (thereby killing the principle of financial integrity). And In Nov 2015, the party suspended him when he openly criticized AAP for supporting Laloo Prasad Yadav during the Bihar assembly elections of 2015.
              <br />
              In 2019, Dr. Munish worked on directing and producing a 7-episode web series called Transparency: Pardarshita that chronicles the inside and UNTOLD stories of IAC and AAP. It also has 2 beautiful songs. A must-watch, the web series is available now on YouTube.
              <br />
              Last many years, Dr. Munish has been focusing on studying the ills of democracy in India and abroad. With the international experience of observing democracies, he has now embarked upon the journey of creating a political organization (Bharatiya Liberal Party) that aims to deliver models of good governance and upgrading democracy via various reforms.
            </div>
          </div>
        </div>

        {/* Profile of Akbar Khan Rana */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mt-16">
          <div className="flex-shrink-0">
            <img
              src={akbarProfileImg}
              alt="Akbar Khan Rana"
              loading="lazy"
              className="rounded-lg w-48 h-48 object-cover"
            />
          </div>
          <div className="lg:ml-10 mt-6 lg:mt-0">
            <h1 className="text-4xl font-bold opacity-80">
              Akbar Khan Rana
            </h1>
            <div className="text-sm opacity-80 mt-2">
              General Secretary, Bharatiya Liberal Party (BLP) <br />
              M.A. (Sociology) <br />
              LL.B. (Bachelor of Laws) <br />
              P.G.Dip. (Journalism & Mass Communication) <br />
              Aalim (Islamic Studies)
            </div>

            <div className="text-lg opacity-80 mt-4">
              Akbar Khan Rana held a key role in Governmental and Non-Governmental Organizations. He is passionate about bringing positive change in society. At present, Akbar Khan Rana is actively involved in the Bharatiya Liberal Party (BLP) and working for social and political issues. He is committed to eliminating corruption from the structure of governance and working for Social Justice.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
