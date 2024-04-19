import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhySection from './components/WhySection'
import MissionSection from './components/MissionSection'
import IdeologySection from './components/IdeologySection'
import ReformsSection from './components/ReformsSection'
import SupportSection from './components/SupportSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' bg-backgroud min-h-screen px-10 min-w-fit'>
    <Navbar/>
    <HeroSection/>
    <WhySection/>
    <MissionSection/>
    <IdeologySection/>
    <ReformsSection/>
    <SupportSection/>
    <Footer/>
    </div>
  )
}

export default App