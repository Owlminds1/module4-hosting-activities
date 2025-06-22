import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen flex flex-col gap-5 justify-start items-center p-5 bg-[#F8FAFC]'>
        <h4 className='text-2xl text-black font-medium'>Create a Comic Strip</h4>
    
<div className='min-h-[300px] border p-2 flex justify-center items-center flex-col gap-2'>
    <p className='text-center w-[800px] text-xl text-black'>Write the dialogue for the following comic strip! Be clear, concise, courteous, and complete. Have fun with it</p>
    <Image src="/C27Images/ComicStrip.jpg" width={300} height={100} alt='ComicStrip image'/>

    <textarea placeholder='Write Here...' className='text-lg text-black text-center min-h-[150px] min-w-[500px] border  rounded-lg '/>
</div>
      
    </div>
  )
}

export default Page
