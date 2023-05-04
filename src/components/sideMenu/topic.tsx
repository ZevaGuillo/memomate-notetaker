import { type FC } from "react";
import { cn } from "~/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useNoteStore } from "~/store/notetackerStore";
import { type RouterOutputs } from "~/utils/api";

type Topic = RouterOutputs['topic']['getAll'][0]


interface TopicProps {
  topic: Topic;
  open: boolean;
}

const Topic: FC<TopicProps> = ({ topic, open }) => {

  
  const { setCurrentTopic} = useNoteStore();

  const onClick =()=>{
    setCurrentTopic(topic);
  }

  return (
    <div
      className={cn(
        "flex w-[15rem] items-center gap-4 py-2 pl-[0.5rem] transition-all",
        { "w-[15rem] hover:bg-slate-800": open }
      )}
      onClick={onClick}
    >
      <TooltipProvider >
        <Tooltip>
          <TooltipTrigger>
            <div className={cn("min-h-[2.75rem] min-w-[2.75rem] rounded-xl bg-purple-800 transition-all delay-75 ease-in",{'hover:bg-slate-700':!open})}></div>
          </TooltipTrigger>
          <TooltipContent side="right" className={cn('ml-3',{ hidden: open })}>
            {topic.title}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <p>{topic.title}</p>
    </div>
  );
};

export default Topic;
