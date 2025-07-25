import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

type myProps = {
  setIsFirstScreen: (val: string) => void;
};

const ImageScreen = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-start items-center p-5 bg-[#F8FAFC]">
      <h4 className="text-2xl text-black font-bold">Video QnA</h4>

      <div className="w-[80%]">
        <div className=" border p-2 flex justify-center items-center flex-col gap-2 rounded-lg shadow-lg ">
         
          <Image
            src="/C27Images/7Cs-communication.png"
            width={500}
            height={100}
            alt="7Cs-communication image"
          />
        </div>
        <div className="w-full flex justify-start items-end mt-5">
          <div
            className={`
           
                border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                
           hover:scale-90`}
          >
            <FaArrowLeft
              className={`
          text-[40px] cursor-pointer text-black`}
              onClick={() => setIsFirstScreen("Questions")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScreen;
