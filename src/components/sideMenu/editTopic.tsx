import React, { type FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Edit3 } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { api, RouterOutputs } from "~/utils/api";

type Topic = RouterOutputs["topic"]["getAll"][0];

interface EditTopicProps {
  topic: Topic;
  save: ReturnType<typeof api.topic.update.useMutation>;
}

const EditTopic: FC<EditTopicProps> = ({ topic, save }) => {
  const [topicValue, setTopicValue] = useState(topic?.title || "");

  const onSave = () => {
    if (topicValue.length > 1) {
      save.mutate({
        id: topic.id,
        title: topicValue,
      });
    } else {
      // TODO: Alert
    }
  };

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
          <div className="space-y-4 pt-4">
            <Input
              value={topicValue}
              onChange={(e) => setTopicValue(e.target.value)}
            />
            <div className="flex space-x-4">
              <Button onClick={onSave}>
                <DialogPrimitive.Close>Save</DialogPrimitive.Close>
              </Button>
              <DialogPrimitive.Close className="rounded-md border p-2 hover:border-slate-400 ">
                Cancel
              </DialogPrimitive.Close>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditTopic;
