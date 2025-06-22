import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-start items-center p-5 bg-[#F8FAFC]">
      <h4 className="text-2xl text-black font-medium">Warm up</h4>

      <div className="min-h-[300px] border p-2 flex justify-center items-center flex-col gap-2 rounded-lg shadow-lg ">
      <h4 className="text-3xl text-black font-bold">Recall</h4>
        <Image
          src="/C27Images/7Cs-communication.png"
          width={500}
          height={100}
          alt="7Cs-communication image"
        />
      </div>
    </div>
  );
};

export default Page;
