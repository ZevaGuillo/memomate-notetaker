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
import TopicDropdown from "./topicDropdown";
import EditTopic from './editTopic';

type Topic = RouterOutputs["topic"]["getAll"][0];

interface TopicProps {
  topic: Topic;
  open: boolean;
}

const Topic: FC<TopicProps> = ({ topic, open }) => {
  const { setCurrentTopic } = useNoteStore();

  const onClick = () => {
    setCurrentTopic(topic);
  };

  return (
    <div
      className={cn(
        "flex w-[15rem] items-center justify-between gap-4 py-2 pl-[0.5rem] pr-4 transition-all",
        { "w-[15rem] hover:bg-slate-800": open }
      )}
      onClick={onClick}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className={cn(
                "min-h-[2.75rem] min-w-[2.75rem] rounded-xl bg-purple-800 transition-all delay-75 ease-in",
                { "hover:bg-slate-700": !open }
              )}
            ></div>
          </TooltipTrigger>
          <TooltipContent
            side="right"
            className={cn("ml-3 border-none bg-slate-50", { hidden: open })}
          >
            {topic.title}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className={cn("hidden pl-1 w-full items-center opacity-0 justify-between transition-all ease-in-out pointer-events-auto", {"flex opacity-1": open})}>
        <p>{topic.title}</p>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <TopicDropdown />
        </div>
      </div>
    </div>
  );
};

export default Topic;
