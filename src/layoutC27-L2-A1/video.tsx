import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Video = ({
  setIsFirstScreen,
}: {
  setIsFirstScreen: (val: string) => void;
}) => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-start items-center p-5 bg-[#F8FAFC]">
      <h4 className="text-2xl text-black font-bold">Video QnA</h4>

<div className="w-[80%]">

      <div className=" border p-2 w-full flex justify-center items-center  rounded-lg shadow-lg ">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/p9sv-DwJUlo?si=Drp29pSwkR8-9cq6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

      </div>
        <div className="w-full flex justify-end items-end mt-5">
          <div
            className={`
           
                border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400
                
           hover:scale-90`}
          >
            <FaArrowRight
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

export default Video;
