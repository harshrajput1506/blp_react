import React from 'react'
import { appName, heroText } from '../constants/Constant'
import heroImage from '../assets/hero_image.png'
import heroGlow from '../assets/hero_glow.svg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
const text =  heroText.replace(/\n/g, '<br>');
  return (
    <div className='m-4 mx-auto bg-secondaryBackground rounded-2xl'>
  
        <div className='flex  flex-col md:flex-row'>

            <div className='flex-1 flex justify-center items-center'>
                <img className='  p-20 md:p-16 ' src={heroImage} alt="heroImage" />
            </div>
        
            <div className=' flex-1 bg-white rounded-2xl max-h-max p-10 flex flex-col justify-center items-center md:items-start'>
            <h1 className=' text-5xl text-turmericYellow font-bold text-center md:text-start'>{appName}</h1>
                <div className='pt-12 text-xl'>
                <p className='opacity-80' dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <Link className='mt-8 py-3 px-6 bg-mehroon text-white rounded-full font-medium text-sm' to="/about">Read More</Link>
            
            </div>
            
            
        </div>
       
    </div>

  )
}

export default HeroSection