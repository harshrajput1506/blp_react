import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className=" bg-backgroud min-h-screen px-10 min-w-fit">
      <Navbar />
      <div className="mt-20 max-w-7xl mx-auto flex flex-col">
        <h1 className="text-7xl text-primary font-bold opacity-30">
          ABOUT US
        </h1>
        <p className="mt-10 text-xl">
          Bharatiya Liberal Party (BLP) is a political party formed in 2019 with a national vision and a focus on Delhi state. 
          BLP`s main focus is to eliminate corruption, promote social welfare and work towards social justice. 
        </p>
        <p className="mt-10 text-xl">
          Delhi is gearing up to contest in the 2025 Delhi assembly to establish a transparent and people-centric government. 
        </p>
        <div className="mt-8 text-lg opacity-80">
        दिल्ली के लोगों के लिए, दिल्ली के लोगों के द्वारा, <br />
        दिल्ली के लोगों को समर्पित: भारतीय लिबरल पार्टी (BLP)<br /> <br /> 
        अब दिल्ली की जनता चुनेगी  <br />
        दिल्ली प्रदेश का पहला दलित मुख्यमंत्री। <br /> <br />
        2025 में बहुजन सरकार  <br />
        2025 में भारतीय लिबरल पार्टी को चुनिए व सच की राजनीति का हिस्सा बनिए
        </div>

        <h1 className="text-7xl text-primary font-bold opacity-30 mt-20">
        BLP’s FOCUS
        </h1>
        <div className="mt-8 text-lg opacity-80 max-w-fit">
          <p className="text-center font-bold mt-10  mb-10">
          दिल्ली को स्वर्णिम कल में पहुँचाना ही है हमारा प्रण <br />
          दिल्ली में फैल चुका है भ्रष्टाचार और अराजकता का जंजाल। 
          </p>
          बदहाली और कुव्यवस्था (कूड़ा-करकट, टूटी सड़कें, गन्दा व मटमैला बदबूदार पानी , जहरीली हवा, चरमराई स्वास्थ्य सेवाएं तथा औसत सरकारी स्कूल ये सब दिल्ली सरकार की नाकामी को बयान करते हैं। लेकिन, दिल्ली के MLA और CM (शीश महल में घुस कर) आराम परस्ती तथा राजनीतिक आरोप-प्रत्यारोप में मशगूल हैं।
          <br />
          <p className="mt-4">दिल्ली के भ्रष्ट, निकम्मे व गैर जिम्मेदार नेताओं से छुटकारे का समय अब आ चुका  है।</p>
          <p className="mt-4">
          1. मिलेगा दिल्ली प्रदेश के हर वर्ग को समानता का अधिकार
          <br />
          2. माँ यमुना का सम्मान व जीर्णोद्धार
          <br />
          3. दिल्ली के प्रदूषण का समाधान
          <br />
          4. महिलाओं व बच्चों का होगा उत्थान
          <br />
          5. कूड़े के ढेर का नहीं होगा स्थान (MCD के कार्यप्रणाली में पारदर्शिता लाएंगे)।
          <br />
          6. शिक्षा व स्वास्थ्य सेवाएं होंगी उत्तम
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
