import React from 'react'
import eq from '../assets/equinix.png'
import real from '../assets/realty.png'
import tower from '../assets/tower.png'
import value from '../assets/prologis.png'

function Page2() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap gap-6 p-10 justify-evenly items-center'>
        <img src={eq} alt=""  className=' max-w-[250px] ' />
        <img src={real} alt=""  className=' max-w-[250px] ' />
        <img src={tower} alt=""  className=' max-w-[250px] ' />
        <img src={value} alt=""   className=' max-w-[250px] '/>


      </div>

      <div></div>
      
    </div>
  )
}

export default Page2
