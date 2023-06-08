import {
  type KeyboardEvent,
  type FC,
  type SetStateAction,
  type Dispatch,
  useState,
} from "react";
import { Input } from "../ui/input";
import type { api } from "~/utils/api";
import { cn } from "~/lib/utils";
import { Plus } from "lucide-react";
import { useToast } from "../ui/use-toast";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Corner } from "../corner";

interface NewTopicProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  createTopic: ReturnType<typeof api.topic.create.useMutation>;
}

const NewTopic: FC<NewTopicProps> = ({ open, setOpen, createTopic }) => {
  const [picker, setPicker] = useState("📚");

  const [input, setInput] = useState("");
  const { toast } = useToast();

  const onSave = (value: string) => {
    if (input.length < 2) {
      toast({
        description: "Please enter at least 2 characters.",
      });
    } else {
      createTopic.mutate({
        title: value,
        icon: picker,
      });
      setInput("");
      setPicker("📚");
    }
  };

  const onInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSave(e.currentTarget.value);
    }
  };

  return (
    <>
      {/* <div className=" ">
        <div className="h-5 w-5 rounded-es-full bg-slate-50"></div>
      </div>
      <div className="pointer-events-none absolute -right-5 top-[11rem] -z-20 hidden h-5 w-5 bg-slate-950 md:block">
        <div className="h-5 w-5 rounded-ss-full bg-slate-50"></div>
      </div> */}


      <Corner className="pointer-events-none absolute -right-5 top-[11rem] -z-10" />
      <Corner className="pointer-events-none absolute -right-5 top-[4.75rem] -z-10 rotate-[270deg]" />

      <div
        className={cn(
          "absolute -right-[2.5rem] z-10 mt-[6rem] grid h-20 w-20 place-content-center rounded-3xl  bg-slate-950 transition-all ease-in-out hover:bg-slate-900",
          { "w-[3rem]": open, "rounded-s-none": open }
        )}
        onClick={() => {
          if (!open) {
            setOpen(true);
          } else {
            onSave(input);
          }
        }}
      >
        <Plus size={40} pointerEvents={"none"} />
      </div>

      <div className="mt-[6rem]">
        <div
          className={cn(
            "mb-10 flex  h-20 items-center justify-center pl-2 pr-4 opacity-100 transition-opacity delay-75 ease-in",
            { "opacity-0": !open }
          )}
        >
          <Input
            className="rounded-none rounded-s-md bg-slate-900"
            placeholder="New Topic"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={onInput}
          />

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="grid h-10 w-10 place-content-center rounded-e-md bg-slate-800 text-xl hover:bg-slate-700">
                {picker}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              className="absolute right-0 z-50 w-48"
            >
              <Picker
                data={data}
                onEmojiSelect={(e: { native: string }) => setPicker(e.native)}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default NewTopic;
