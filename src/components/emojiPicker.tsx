import React, { Dispatch, FC, SetStateAction } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";



interface PickerProps {
    pickerState: string,
    setPicker: Dispatch<SetStateAction<string>>;
}

export const EmojiPicker: FC<PickerProps> = ({pickerState, setPicker}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="grid h-10 w-10 place-content-center rounded-e-md bg-slate-800 text-xl hover:bg-slate-700">
          {pickerState}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="absolute -right-[10rem] z-50">
        <Picker
          data={data}
          onEmojiSelect={(e: { native: string }) => setPicker(e.native)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
