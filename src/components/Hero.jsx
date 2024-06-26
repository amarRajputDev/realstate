import React from "react";
import { CiLocationOn } from "react-icons/ci";
import heroimg from "../assets/heroimage.png"
import CountUp from 'react-countup';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {

    useGSAP(()=>{
        gsap.from(".txxt" , {
            y:200,
            opacity:0,
            duration:1,
            stagger:0.4,
            ease: "power4.out"
        })
      
    })


  return (
    <div className="px-10 h-[110vh] sm:h-screen bg-cover flex bg-gray-700 bg-[url('https://virtuance-media.s3.us-west-2.amazonaws.com/virtuance-prod/wp-content/uploads/2020/04/06131814/Living-Room-587-Paintbrush-Avon.jpg')] after:contect-[''] after:absolute after:w-full after:h-[110vh] sm:after:h-screen overflow-y-hidden after:left-0 after:top-0 after:bottom-0 after:bg-black after:opacity-60 justify-center items-center flex-wrap sm:p-10 gap-3 overflow-x-hidden  ">
      <div className=" pt-[50px] md:px-0 sm:max-w-[90%] text-center md:h-[90%] min-h-screen flex flex-col z-[2] text-white justify-center gap-8 items-center  flex-wrap">
        <h1 className="font-bold txxt text-4xl sm:text-6xl">Discover Most Suitable Property</h1>
        <p className="txxt">Find a variety of properties that suit you very easilty
        Forget all difficulties in finding a residence for you</p>
        <div className="bg-white w-[90%] h-16 flex items-center rounded-md txxt px-3 gap-2">
        <CiLocationOn className="text-blue-500 text-4xl sm:text-5xl" />
        <input type="text" placeholder="Search" className=" outline-none text-black w-[90%]" />
        <button className='w-[50%] sm:w-[30%] text-white text-[0.9rem] sm:text-[1rem] bg-blue-600 rounded-md h-[40px]'>Search</button>

        </div>
        <div className="flex gap-3 w-full flex-wrap justify-around">
            <div className="bg-[#100c08]/50 backdrop-blur-[5px] p-3 rounded-2xl shadow-2xl flex-1 border-2 ">
                <h1 className="text-2xl">
                <CountUp
                start = {8000}
                end = {9000}
                >
                </CountUp>
                +
                </h1>
                <p>Premium Product</p>
            </div>
            <div className="bg-[#100c08]/50 backdrop-blur-[5px] p-3 rounded-2xl shadow-2xl flex-1 border-2  ">
            <h1 className="text-2xl">
                <CountUp
                start = {1000}
                end = {2000}
                useEasing = {true}
                >
                </CountUp>
                +
                </h1>
                <p>Happy Customer</p>
            </div>
            <div className="bg-[#100c08]/50 backdrop-blur-[5px] p-3 rounded-2xl flex-1 shadow-2xl border-2 ">
            <h1 className="text-2xl">
                <CountUp
                start = {0}
                end = {27}
                >
                </CountUp>
                +
                </h1>
                <p>Awards Winning</p>
            </div>

        </div>
      </div>
     
    </div>
  );
}

export default Hero;
