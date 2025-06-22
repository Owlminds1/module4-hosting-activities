import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-start items-center gap-8 p-5 bg-[#F8FAFC] flex-col">
      <h4 className="text-black text-xl text-center ">Write a caption</h4>
      <div className="grid grid-cols-12 p-5 border  gap-6 w-[900px] rounded-lg  ">
        <div className="col-span-12 text-xl font-bold text-center text-black">
            Create five captions for the following image
        </div>

        <div className="col-span-6 w-full">
        <Image src="/C27Images/swings.jpg" width={380} height={100} alt="caption image" />
      </div>
      <div className="col-span-6 flex flex-col gap-3 justify-center">
        <div className="flex items-center gap-2">
          <label className="text-lg text-black min-w-[100px]" htmlFor="A">CAPTION A</label>
          <input type="text" id="A" className="w-[200px] min-h-[30px] text-black px-2 border border-gray-500 outline-none"  />
        </div>

          <div className="flex items-center gap-2">
          <label className="text-lg text-black min-w-[100px]" htmlFor="B">CAPTION B</label>
          <input type="text" id="B" className="w-[200px] min-h-[30px] text-black px-2 border border-gray-500 outline-none"  />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-lg text-black min-w-[100px]" htmlFor="C">CAPTION C</label>
          <input type="text" id="C" className="w-[200px] min-h-[30px] text-black px-2 border border-gray-500 outline-none"  />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-lg text-black min-w-[100px]" htmlFor="D">CAPTION D</label>
          <input type="text" id="D" className="w-[200px] min-h-[30px] text-black px-2 border border-gray-500 outline-none"  />
        </div>

         <div className="flex items-center gap-2">
          <label className="text-lg text-black min-w-[100px]" htmlFor="E">CAPTION E</label>
          <input type="text" id="E" className="w-[200px] min-h-[30px] text-black px-2 border border-gray-500 outline-none"  />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Page;
