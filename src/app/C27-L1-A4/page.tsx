"use client"
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
    const [show,setShow]=useState(false)
    const [input,setInput]=useState("")
  return (
    <div className="min-h-screen flex justify-center items-center gap-3 p-5 bg-[#F8FAFC] flex-col">
      <h4 className="text-black text-xl text-center ">Describe what you see</h4>
      <div className="flex justify-center items-center flex-col p-2 gap-2 ">
        <Image src="/C27Images/A4.png" width={800} height={100} alt="image" />

        <textarea
        value={input}
        onChange={(e)=>setInput(e.target.value)}
          placeholder="Write Here..."
          className={` text-black border border-gray-400 w-[600px] min-h-[80px] rounded-lg text-center  p-2 placeholder:text-center`}
        />
   
   {
    show ?  <p className="text-violet-800 font-medium w-[600px] text-center">We see a dog, a man, and a tiger. The tiger is speaking to himself about how dogs are a man’s best friend. But he says that the reason is because cats have standards. He means that cats don’t like men. That’s why they are not best friends. He is trying to be funny. But he doesn’t look happy. The man and the dog are happy in the image</p>
    :

        <button disabled={input.length == 0} onClick={()=>setShow(true)} className={` ${input.length > 0 ? "cursor-pointer":"cursor-not-allowed"}
 bg-violet-900 text-white px-5 py-2 rounded-lg `}>
          Check
        </button>
   }

       
      </div>
    </div>
  );
};

export default Page;
