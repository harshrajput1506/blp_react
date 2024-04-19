import React from 'react'
import supportImg from '../assets/support.svg'
import { supportMsg } from '../constants/Constant'

const SupportSection = () => {
  return (
    <div className='mt-24 max-w-7xl mx-auto flex lg:flex-row flex-col'>
        <div className='space-y-5'>

<h1 className=' text-5xl font-bold mt-16 text-center md:text-start'>SUPPORT US</h1>
<p className=' text-lg max-w-4xl opacity-80'>{supportMsg}</p>
</div>
<div className='flex justify-center items-center'>
<img src={supportImg} alt="Support Img" />
</div>
    </div>
  )
}

export default SupportSection