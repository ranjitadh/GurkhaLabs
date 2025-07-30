import React from 'react'

const page = () => {
  return (
    <>

    <div className='grid grid-cols-2'>
    <div className="bg-black  max-w-screen text-white text-8xl  p-28 font-bold ">
    Skyrocket your
        <br />
       productivity
        <br />
      with us.
 <span className="flex justify-start">
  <a href="/contact" className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-1 px-4 cursor-pointer rounded-4xl text-5xl w-auto">
    Contact Us
  </a>

</span>
{/* <span className="flex justify-end">
  <a href="/about" className="border border-white bg-black text-white hover:border-[#3498db] hover:text-white font-bold py-1 px-4 cursor-pointer rounded-4xl text-5xl w-auto">
   Know More
  </a>

</span> */}
 
      </div>


      <div className='bg-black  max-w-screen' >


      
      </div>
    </div>
    
    </>
  )
}

export default page
