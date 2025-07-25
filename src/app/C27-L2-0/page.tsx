"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Page = () => {
  const [isFirstSlide, setIsFIrstSlide] = useState("questionSlide");
  return (
    <div className="min-h-screen flex flex-col w-full gap-5 justify-start items-center p-8 bg-[#F8FAFC]">
      <h4 className="text-2xl text-black font-bold">Warm Up</h4>
      <div className="w-[80%]">
        {/* ================= question slide =================== */}
        {isFirstSlide === "questionSlide" && (
          <div className="min-h-[400px]  border p-5 flex justify-center items-center flex-col gap-2 rounded-lg shadow-lg ">
            <ul className="list-decimal space-y-4 ">
              <li className="text-lg font-medium">
                Be ________ in your thoughts so your goals are communicated
                clearly too.
              </li>
              <li className="text-lg font-medium">
                Be ________ in your articulation by being precise and simple
              </li>
              <li className="text-lg font-medium">
                Be ________ in your ideas by giving the right amount of detai
              </li>
              <li className="text-lg font-medium">
                Your language should be free of factual and grammatical errors
                but even it isn’t, ________ your mistakes
              </li>
              <li className="text-lg font-medium">
                Be ________ in your speech with logic and smooth flow of
                information{" "}
              </li>
              <li className="text-lg font-medium">
                Give the receiver a ________ understanding of what you are
                discussing
              </li>
              <li className="text-lg font-medium">
                Show a ________ attitude by being polite, friendly, and open
                while communicating with others{" "}
              </li>
            </ul>
          </div>
        )}
        {/* ==================== image slide =============== */}

        {isFirstSlide === "Image" && (
          <div className="min-h-[300px]  border p-2 flex justify-center items-center flex-col gap-2 rounded-lg shadow-lg ">
            <h4 className="text-3xl text-black font-bold">Recall</h4>
            <Image
              src="/C27Images/7Cs-communication.png"
              width={500}
              height={100}
              alt="7Cs-communication image"
            />
          </div>
        )}


    {/* ======================== buttons ====================== */}
        <div className="w-full flex justify-between items-end mt-5">
          <div
            className={`${isFirstSlide === "Image" ? "visible" : "invisible"}
           
                border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                
           hover:scale-90`}
          >
            <FaArrowLeft
              className={`
          text-[40px] cursor-pointer text-black`}
              onClick={() => setIsFIrstSlide("questionSlide")}
            />
          </div>
          <div
            className={`${isFirstSlide === "Image" ? "invisible" : "visible"}
           
                border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                
           hover:scale-90`}
          >
            <FaArrowRight
              className={`
          text-[40px] cursor-pointer text-black`}
              onClick={() => setIsFIrstSlide("Image")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
