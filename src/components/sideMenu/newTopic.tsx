import { KeyboardEvent, type FC } from "react";
import { Input } from "../ui/input";
import type { api } from "~/utils/api";
import { cn } from "~/lib/utils";

interface NewTopicProps {
  open: boolean;
  createTopic: ReturnType<typeof api.topic.create.useMutation>;
}

const NewTopic: FC<NewTopicProps> = ({ open, createTopic }) => {

  const onInput = (e:KeyboardEvent<HTMLInputElement>)=>{
    if(e.currentTarget.value.length < 2) return;
    
    if (e.key === "Enter") {
      createTopic.mutate({
        title: e.currentTarget.value,
      });
      e.currentTarget.value = "";
    }
  }

  return (
    <div
      className={cn(
        "mb-10 flex  h-20 items-center justify-center pl-2 pr-4 opacity-100 transition-opacity delay-75 ease-in",
        { "opacity-0": !open }
      )}
    >

      <Input
        className="bg-slate-900"
        placeholder="New Topic"
        onKeyDown={onInput}
      />
    </div>
  );
};

export default NewTopic;
