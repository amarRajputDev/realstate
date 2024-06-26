import React from 'react'

function Footer() {
  return (
    <div className='mb-6'>
        <div className='flex flex-col lg:flex-row lg:justify-around gap-8 mb-5 items-center px-10 justify-center'>
        <div className='text-center'>
            <h1 className='text-blue-600 text-4xl font-bold'>Homyz</h1>
            <p className='mt-4'>Our vision is to make all people
            the best place to live for them.</p>
        </div>
        <div>
            <h1 className='text-blue-900 text-4xl font-bold'>Information</h1>
            <p>145 New York, FL 5467, USA</p>
        </div>

        </div>

        <div className='flex px-10 justify-evenly font-semibold '>
            <div className=' cursor-pointer'>Property</div>
            <div className=' cursor-pointer'>Services</div>
            <div className=' cursor-pointer'>Product</div>
            <div className=' cursor-pointer'>About Us</div>

        </div>
      
    </div>
  )
}

export default Footer
