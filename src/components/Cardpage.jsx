import React from 'react'
import Cards from './Cards'
import { GrPrevious , GrNext } from "react-icons/gr";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from 'react';
import r1 from '../assets/r1.png'
import r3 from '../assets/r3.png'
import r2 from '../assets/r2.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);

function Cardpage() {

    const [Box, setBox] = useState(0)

    const {contextSafe} = useGSAP()

    const next = contextSafe(() => {

        if (Box == 0) {
            gsap.to(".mn" ,{
                xPercent: -25,
                duration:1
            })
           setBox(1)
           
        }
        if (Box == 1) {
            gsap.to(".mn" ,{
                xPercent: -50,
                duration:1
            })
           setBox(2)
        }
        if (Box == 2) {
            gsap.to(".mn" ,{
                xPercent: -75,
                duration:1
            })
           setBox(3)
        }
        else {
            console.log("end")
        }


        console.log(Box)
        
    })

    const prev = contextSafe(() => {

        if (Box == 0) {
            console.log("end")
            
        }
        if (Box == 1) {
            gsap.to(".mn" ,{
                xPercent: 0,
                duration:1
            })
            setBox(0)
        }
        if (Box == 2) {
            gsap.to(".mn" ,{
                xPercent: -25,
                duration:1
            })
            setBox(1)

        }
        if(Box == 3) {
            gsap.to(".mn" ,{
                xPercent: -50,
                duration:1
            })
            setBox(2)

        }
        console.log(Box)
    })

    

  return (

    

    <div className=' py-24 overflow-x-hidden'>
        <div className='flex flex-col items-center mb-10'>
            <h1 className='text-xl text-orange-500'>Best Choice</h1>
            <h1 className='text-2xl text-[#1F3E72] font-semibold'>Popular Residencies</h1>
        </div>
        <div className='w-[400vw] lg:w-[200vw] xl:w-screen mn flex justify-around'>
        <Cards className="hel" img = {r1}  name = "Aliva Priva Jardin" details = "Jakarta Gardern City Street , Caakung. Pulo Gadung Jarkarta" price="47,043"/>
        <Cards img ={r2}  name ="Asatti Garden City" details = "Jakarta Gardern City Street , Caakung. Pulo Gadung Jarkarta" price="66,353"/>
        <Cards img = {r3}  name ="Citranlan Puri Serang" details = "Jakarta Gardern City Street , Caakung. Pulo Gadung Jarkarta" price="35,853"/>
        <Cards img = {r1}  name = " Aliva Priva Jardin" details = "Jakarta Gardern City Street , Caakung. Pulo Gadung Jarkarta" price = "47,043"/>
        </div>
        <div className=' xl:hidden absolute w-[100vw] flex justify-center items-center'>
            <button onClick={prev} className=' shadow-lg w-10 h-10 text-center flex justify-center items-center rounded'> <GrPrevious/> </button>
            <button onClick={next} className='border-2 border-black w-10 h-10 text-center flex justify-center items-center ml-5 rounded shadow-lg shadow-indigo-500/40'> <GrNext /> </button>
        </div>


      
    </div>
  )
}

export default Cardpage
