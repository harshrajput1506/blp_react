import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Faqs = () => {
  return (
    <div className=" bg-backgroud min-h-screen px-10 min-w-fit">
      <Navbar />
      <div className="mt-20 max-w-7xl mx-auto flex flex-col space-y-10">
        <h1 className="text-7xl text-primary font-bold opacity-30">
          FAQs
        </h1>
        <div className="space-y-2">
          <p className="text-2xl font-semibold">
            Q. What is Bharatiya Liberal Party?
          </p>
          <div className="text-lg opacity-80">
            Answer: Bharatiya Liberal Party (BLP) is a newly organized political
            party committed to a model of good governance and electoral reforms.{" "}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-semibold">
            Q. What areas of India are you currently working on?
          </p>
          <div className="text-lg opacity-80">
            Answer: We are focused on Delhi state with the motto: <br />
            दिल्ली के लोगों के लिए, दिल्ली के लोगों के द्वारा, <br />
            दिल्ली के लोगों को समर्पित: भारतीय लिबरल पार्टी <br />
            (लोगों की सेना) <br />
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-semibold">
            Q. What differentiates you from the plethora of other political
            parties?
          </p>
          <div className="text-lg opacity-80">
            Ans: UNIQUE MODELS OF Bharatiya Liberal Party Politcal party:
            <br />
            <br />
            President and National Council (supreme body) members will NOT
            contest elections so that they can stay course and focus on the
            goals of the party.
            <br />
            <br />
            Lok Umeedwar / Public Candidate concept:
            <br />
            Candidate selection will be done by party members (and public who
            can cast vote by becoming a member of the party) via Primary
            elections.
            <br />
            In other words:
            <br />
            <br />
            प्रत्याशी चयन की अनूठी नीति : प्राइमरी /सोशल इलेक्शन
            <br />
            <br />
            MLA/MP को चुनने से पहले जनता चुनकर देगी,भारतीय लिबरल पार्टी को
            उम्मीदवार। यानि मुख्य चुनाव से पहले एक ऐसा चुनाव (प्राइमरी इलेक्शन /
            सोशल इलेक्शन ) भी होगा जिसमें आप यानी जनता अपने पसंदीदा व्यक्ति को
            लोकसेना हिन्द की टिकट दिलवाने के लिए वोट के जरिये चुनेंगे (लोक
            उम्मीदवार)
            <br />
            <br />
            Elected representatives will be accountable to Voters Councils/
            Matdaata parishads. Social recall will be available and when we get
            power at the center, we shall implement Right to REcall without any
            delay.
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
