import { Topic } from "@prisma/client";
import { type FC } from "react";
import { cn } from "~/lib/utils";

interface TopicProps {
  topic: Topic,
  open: boolean;
}

const Topic: FC<TopicProps> = ({topic, open }) => {
  return (
    <div
      className={cn(
        "flex w-[15rem] items-center gap-4 py-2 pl-[0.4rem] transition-all",
        { "hover:bg-slate-800": open }
      )}
    >
      <div className="h-12 w-12 rounded-xl bg-slate-900 transition-all delay-75 ease-in hover:bg-slate-800"></div>
      <p>{topic.title}</p>
    </div>
  );
};

export default Topic;
