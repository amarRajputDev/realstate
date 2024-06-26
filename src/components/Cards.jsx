import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);



function Cards(props) {

 
  return (
    <div >
      {/* component  */}
<div id='ani' className=" relative mb-10 hover:w-[320px] duration-700 hover:shadow-2xl hover:shadow-indigo-500/40 flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={props.img} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl text-[#1F3E72] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {props.name}
    </h4>
    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      <span className=' text-orange-400'>$</span>{props.price}
    </p>
    <p className=' text-gray-500 text-[0.7rem]'>
        {props.details}
    </p>
  </div>
  <div className="flex justify-center gap-7 p-6 pt-2">
    <a
      href="#facebook"
      className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a
      href="#twitter"
      className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a
      href="#instagram"
      className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>
  </div>
</div>



    </div>
  )
}

export default Cards
