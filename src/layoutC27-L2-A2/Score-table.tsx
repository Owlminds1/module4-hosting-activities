"use client";
import React, { useState } from "react";
import tableData from "@/layoutC27-L2-A2/tableData.json";
import DropDown from "./dropDown";


const ScoreTable = () => {
  const [dropdownOpenMap, setDropdownOpenMap] = useState<
    Record<string, boolean>
  >({});

  const [activeColumnPerRow, setActiveColumnPerRow] = useState<number[]>(
    tableData.map(() => -1) // -1 means no checkbox selected
  );

  const [selectedValues, setSelectedValues] = useState<number[][]>(
    tableData.map(() => []) // har row ke liye selected value
  );

  //  Calculate total score
  const totalScore = selectedValues.reduce((acc, row) => {
    return acc + (row[0] || 0); // sirf ek hi value hai per row
  }, 0);

  return (
    <div className="min-h-screen p-5 flex justify-start items-center w-full flex-col gap-8 bg-[#F8FCFA]">
      <div>
        <h3 className="text-center text-black font-bold text-2xl">Score The Speech</h3>
        <p className="text-center text-lg text-black">Score the speech in the video based on the 7Cs  indicators.</p>
      </div>
      <div className="">
        <div className="grid grid-cols-12 w-full gap-[1px] border border-black">
          <div className="col-span-2 w-full bg-blue-400 flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-lg font-bold">7Cs</h4>
          </div>
          <div className="col-span-2 w-full bg-rose-400 p-1  flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-md font-bold">1-3</h4>
            <h6 className="text-center text-sm w-full">
              (Rarely Applied/Hardly Convincing)
            </h6>
          </div>
          <div className="col-span-2 w-full bg-orange-400 p-1  flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-md font-bold">4-6</h4>
            <h6 className="text-center text-sm w-full">
              (Occasionally Applied/Functionally Convincing)
            </h6>
          </div>

          <div className="col-span-2 w-full bg-blue-400 p-1  flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-md font-bold">7-9</h4>
            <h6 className="text-center text-sm w-full">
              (Sometimes Applied/Mostly Convincing)
            </h6>
          </div>

          <div className="col-span-2 w-full bg-green-400 p-1  flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-md font-bold">10-12</h4>
            <h6 className="text-center text-sm w-full">
              (Often Applied/Exceptionally Convincing)
            </h6>
          </div>

          <div className="col-span-2 w-full bg-blue-400 p-1  flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-lg font-bold">Score</h4>
          </div>
        </div>
        {tableData.map((item, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-12 w-full gap-[1px]">
            <div className="col-span-2 w-full bg-blue-500 border-b border-white p-1 flex justify-center items-center flex-col">
              <h4 className="text-center text-white w-full text-lg font-medium">
                {item.title}
              </h4>
            </div>

            {[
              { options: ["1", "2", "3"], defaultValue: "1-3" },
              { options: ["4", "5", "6"], defaultValue: "4-6" },
              { options: ["7", "8", "9"], defaultValue: "7-9" },
              { options: ["10", "11", "12"], defaultValue: "10-12" },
            ].map((col, colIndex) => {
              const isActive = activeColumnPerRow[rowIndex] === colIndex;
              const key = `${rowIndex}-${colIndex}`; // ✅ THIS LINE IS REQUIRED

              return (
                <div
                  key={colIndex}
                  className="col-span-2 w-full border-r border-b border-blue-400 p-1 flex justify-center items-center gap-2 "
                >
                <input
  title="check"
  type="checkbox"
  checked={isActive}
 onChange={() => {
  const updatedActive = [...activeColumnPerRow];
  const updatedSelected = [...selectedValues];

  // If already active, uncheck and remove value
  if (isActive) {
    updatedActive[rowIndex] = -1;
    updatedSelected[rowIndex] = [];
  } else {
    // Before switching, reset previous value
    updatedSelected[rowIndex] = [];
    updatedActive[rowIndex] = colIndex;
  }

  setActiveColumnPerRow(updatedActive);
  setSelectedValues(updatedSelected);
}}

  className="w-6 h-6"
/>

                  <DropDown
                    open={dropdownOpenMap[key] || false}
                    setOpen={(val: boolean) => {
                      setDropdownOpenMap((prev) => ({ ...prev, [key]: val }));
                    }}
                    options={col.options}
                    defaultValue={col.defaultValue}
                    disabled={!isActive}
                    onChange={(value) => {
                      const num = parseInt(value);
                      const updated = [...selectedValues];
                      updated[rowIndex] = [num];
                      setSelectedValues(updated);
                    }}
                  />
                </div>
              );
            })}

            <div className="col-span-2 w-full border-l-0 border-b border-r border-blue-500 p-1 flex justify-center items-center flex-col">
              <h4 className="text-center w-full text-lg font-bold">
                {selectedValues[rowIndex]?.[0] || 0}/12
              </h4>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-12 p-2 w-full bg-blue-400 border-2 border-black  ">
          <div className="col-span-2 w-full  flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-xl font-bold">Total</h4>
          </div>
          <div className="col-span-2 w-full   flex justify-center items-center flex-col"></div>
          <div className="col-span-2 w-full   flex justify-center items-center flex-col"></div>

          <div className="col-span-2 w-full   flex justify-center items-center flex-col"></div>

          <div className="col-span-2 w-full flex justify-center items-center flex-col"></div>

          <div className="col-span-2 w-full  pl-3 flex justify-center items-center flex-col">
            <h4 className="text-center w-full text-xl font-bold">
              {totalScore}/84
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
