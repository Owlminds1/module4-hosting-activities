import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type myProps = {
  setIsFirstScreen: (val: string) => void;
};

const Questions = ({ setIsFirstScreen }: myProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full gap-5 justify-start items-center p-8 bg-[#F8FAFC]">
              <h4 className="text-2xl text-black font-bold">Video QnA</h4>

         <h4 className="text-xl text-black font-bold">
                    Answer the following questions based on the video{" "}
                  </h4>
      <div className="w-[80%]">
        <div className="min-h-[400px]  border p-5 flex justify-center items-center flex-col gap-2 rounded-lg shadow-lg ">
          <ul className="list-decimal space-y-4 ">
            <li className="text-lg font-medium">
              What was the clear purpose of the speech?
            </li>
            <li className="text-lg font-medium">
              How was the speaker concise about achieving goals?{" "}
            </li>
            <li className="text-lg font-medium">
              What kind of concrete problems did she discuss in her speech?
            </li>
            <li className="text-lg font-medium">
              How was her speech coherent?{" "}
            </li>
            <li className="text-lg font-medium">
              How did she communicate correct information?
            </li>
            <li className="text-lg font-medium">
              What shows that she is courteous?
            </li>
            <li className="text-lg font-medium">
              How was her speech complete?{" "}
            </li>
          </ul>
        </div>
        {/* ======================== buttons ====================== */}
        <div className="w-full flex justify-between items-end mt-5">
          <div
            className={`                
                      border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                      
                 hover:scale-90`}
          >
            <FaArrowLeft
              className={`
                text-[40px] cursor-pointer text-black`}
              onClick={() => setIsFirstScreen("video")}
            />
          </div>
          <div
            className={`                
                      border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                      
                 hover:scale-90`}
          >
            <FaArrowRight
              className={`
                text-[40px] cursor-pointer text-black`}
              onClick={() => setIsFirstScreen("ImageScreen")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
