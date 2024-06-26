import React, { useState } from 'react'
import value from '../assets/value.png'
import { FaSlideshare } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function Page3() {
    const [list, setlist] = useState(0)
    const [clas, setclas] = useState("")
  return (
    <div className='flex flex-col lg:flex-row items-center px-10 gap-5  xl:h-screen mb-3'>
        <div className=' w-full lg:w-[40%]  flex justify-center xl:h-[90%]'>
            <img src={value} alt="" className=' w-[60%] lg:w-[100%] border-[5px] border-gray-600 rounded-t-full' />
        </div>
        <div className='flex flex-col gap-2 lg:w-[50%] lg:gap-5'>
            <h1 className=' text-orange-400 text-lg lg:text-2xl'>Our Value</h1>
            <h2 className='text-[#1F3E72] text-2xl lg:text-4xl font-semibold'>Value We Give to You</h2>
            <p className='text-[0.9rem]'>We always ready to help by providijng the best services for you. <br />
            We beleive a good blace to live can make your life better</p>

            <div className="border-[1px] border-gray-500/30 relative shadow-md shadow-blue-400 border-blue-500 rounded-lg p-4 cursor-pointer" onClick={()=>{setlist(1)}}>
           <div className='flex justify-around '>
           <FaSlideshare className=' text-blue-400 text-2xl' />
            <h1 className='text-center'>Best interest rates on the market</h1>
            <MdOutlineArrowDropDownCircle className=' text-blue-400 text-2xl' />
            </div>
            {list==1?<div><p className='mt-5 text-[0.9rem] duration-200 text-gray-400'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p></div>:<div></div>}
           </div>

           <div className='border-[1px] border-gray-500/30 rounded-lg p-4 shadow-md shadow-blue-400 cursor-pointer' onClick={()=>{setlist(2)}}>
           <div className='flex justify-around '>
           <FaSlideshare className=' text-blue-400 text-2xl' />
            <h1 className='text-center'>Prevent unstable prices</h1>
            <MdOutlineArrowDropDownCircle className=' text-blue-400 text-2xl' />
            </div>
            {list==2?<div><p className='mt-5 text-[0.9rem] duration-200 text-gray-400'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p></div>:<div></div>}
           </div>

           <div className='border-[1px] border-gray-500/30 rounded-lg p-4 shadow-md shadow-blue-400 cursor-pointer' onClick={()=>{setlist(3)}}>
           <div className='flex justify-around '>
           <FaSlideshare className=' text-blue-400 text-2xl' />
            <h1 className='text-center'>Best price on the market</h1>
            <MdOutlineArrowDropDownCircle className=' text-blue-400 text-2xl' />
            </div>
            {list==3?<div><p className=' text-[0.9rem] mt-4 text-gray-400'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p></div>:<div></div>}
           </div>
        </div>
      
    </div>
  )
}

export default Page3
