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
import { EmojiPicker } from "../emojiPicker";

type Topic = RouterOutputs["topic"]["getAll"][0];

interface EditTopicProps {
  topic: Topic;
  save: ReturnType<typeof api.topic.update.useMutation>;
}

const EditTopic: FC<EditTopicProps> = ({ topic, save }) => {
  const [picker, setPicker] = useState(topic.icon);
  const [topicValue, setTopicValue] = useState(topic?.title || "");

  const onSave = () => {
    if (topicValue.length > 1) {
      save.mutate({
        id: topic.id,
        title: topicValue,
        icon: picker,
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
            <div className="flex">
              <Input
                value={topicValue}
                onChange={(e) => setTopicValue(e.target.value)}
              />
              <EmojiPicker pickerState={picker} setPicker={setPicker} />
            </div>
            <div className="flex space-x-4">
              <DialogPrimitive.Close>
                <Button onClick={onSave}>Save</Button>
              </DialogPrimitive.Close>
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
