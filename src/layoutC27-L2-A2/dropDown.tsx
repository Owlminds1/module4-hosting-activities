"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type myProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
  options: string[];
  defaultValue: string;
  disabled?: boolean;
  onChange?: (value: string) => void; // 👈 Add this
};

function DropDown({
  open,
  setOpen,
  options,
  defaultValue,
  disabled = false,
  onChange,
}: myProps) {
  const [selected, setSelected] = useState(defaultValue); // use defaultValue

  const handleSelect = (value: string) => {
    setSelected(value);
    setOpen(false);
    onChange?.(value); 
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        disabled={disabled}
        className={` p-2 min-w-[80px] flex items-center justify-center gap-1  ${
          disabled ? "cursor-not-allowed" : " cursor-pointer"
        }`}
      >
        {selected}
        <IoIosArrowDown
          className={`transition-all duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((item) => (
          <DropdownMenuItem
            className="cursor-pointer flex justify-center items-center"
            key={item}
            onSelect={(e) => {
              e.preventDefault();
              handleSelect(item);
            }}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
