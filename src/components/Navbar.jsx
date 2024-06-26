import React from 'react'
import logo from '../assets/logo.png'
import {  RxHamburgerMenu } from "react-icons/rx";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { useState } from 'react';


function Navbar() {
  const [isactive, setisactive] = useState(false)

  const { contextSafe } = useGSAP()

  const handle = contextSafe(() =>{
    console.log("enter")
    if (isactive == false) {
      gsap.to(".bar" , {
    
        left:"calc(50% - 100px)",
        duration:0.5
      })
      gsap.from(".txt" , {
        x:200,
        opacity:0,
        duration:0.3,
        delay:0.5,
        
        stagger:0.1
      })
      setisactive(true)
    }
    else{
      gsap.to(".bar" ,{
        left:"-200",
        duration:0.5
      })
      setisactive(false)

    }

  })



  return (
    <section className=' w-screen h-[70px] backdrop-blur-sm bg-black/40 flex items-center px-10 justify-between fixed z-20'>
      <div>
        <h1 className='text-white font-bold text-2xl'>Homyz</h1>
      </div>
      <div className='lg:hidden'>
      <RxHamburgerMenu className=' w-8 h-8 text-white cursor-pointer lg:hidden' onClick={handle} />
      </div>
      <div className='  lg:bg-transparent bar bg-white lg:static lg:border-0 lg:text-white absolute shadow-2xl lg:shadow-none lg:w-[60%] w-[200px] h-96 rounded-xl right-[-200px] top-[75px] p-9'>
        <ul className='text-center font-bold h-full flex lg:flex-row flex-col justify-around items-center gap-3 lg:font-semibold lg:text-[0.8rem] xl:text-base'>
          <li className='txt' ><a href="" className='lg:text-white '>Residencies</a></li>
          <li className='txt' ><a href="" className='lg:text-white '>Our Values</a></li>
          <li className='txt' ><a href="" className='lg:text-white '>Contact Us</a></li>
          <li className='txt' ><a href="" className='lg:text-white '>Get Started</a></li>
          <button className='w-[100px] text-white bg-blue-600 rounded-md h-[50px]'>contact</button>
        </ul>
      </div>
    </section>
  )
}

export default Navbar
