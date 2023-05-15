import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Edit3 } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

const EditTopic = () => {
  return (
    <Dialog>
      <DialogTrigger className=" w-full">
        <DropdownMenuItem 
        className=" flex justify-between"
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          Edit <Edit3 size={17} />
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="text-slate-50">
        <DialogHeader>
          <DialogTitle>Edit Topic</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditTopic;
