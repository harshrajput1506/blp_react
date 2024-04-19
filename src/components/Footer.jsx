import React from 'react'
import logo from '../assets/blp_logo.png'
import { hindiAppName, socials } from '../constants/Constant'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-20 p-12 border-t border-neutral-700/80'>
        <div className='container px-4 mx-auto relative'>
            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                <img src={logo} alt='logo' className=' h-20 w-20 mb-4 md:mb-0'/>
                <div className='flex flex-col space-y-3 md:ml-8 mt-4 md:mt-0'>
                    <h1 className='text-lg font-semibold'>Follow Us On</h1>
                    <div className='space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-5 gap-3'>
                        {
                            socials.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <div key={index} className='flex flex-row items-center space-x-4'>
                                        <Icon/>
                                        <Link className='text-sm hover:text-turmericYellow' to={social.link}>{social.label}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col space-y-2 md:ml-8 mt-12 md:mt-0'>
                    <h1 className='text-2xl font-semibold text-center md:text-start'>{hindiAppName}</h1>
                    <div className='space-x-2 text-sm flex flex-row justify-center items-center'>
                        <Phone/>
                        <h1>फ़ोन / Whatsapp: +91 98215 78507</h1>
                    </div>
                    <div className='space-x-2 text-sm flex flex-row justify-center items-center md:justify-start'>
                        <Mail/>
                        <h1>Email: mail@blparty.in</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
