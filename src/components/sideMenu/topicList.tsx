import { type FC } from "react";
import TopicComponent from "./topic";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "~/lib/utils";
import { Topic } from "@prisma/client";

interface TopicListProps {
  open: boolean;
  topics: Topic[]
}

const TopicList: FC<TopicListProps> = ({ open, topics }) => {

  return (
    <ScrollArea
      className={cn(
        "flex h-[calc(100vh-14.5rem)] w-[4rem] flex-col overflow-hidden",
        { "w-[15rem]": open }
      )}
    >
      {topics &&
        topics?.map((topic) => (
          <TopicComponent key={topic.id} open={open} topic={topic} />
        ))}
    </ScrollArea>
  );
};

export default TopicList;
