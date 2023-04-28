import { type FC } from "react";
import Topic from "./topic";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "~/lib/utils";

interface TopicListProps {
  open: boolean;
}

const TopicList: FC<TopicListProps> = ({ open }) => {
  const { data: sessionData } = useSession();
  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined,
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => {
        // setSelectedTopic(selectedTopic ?? data[0] ?? null);
      },
    }
  );

  return (
    <ScrollArea className={cn("h-[calc(100vh-14.5rem)] w-[4rem] flex flex-col overflow-hidden",{'w-[15rem]':open})}>

      {/* <Topic open={open} /> */}
      {topics && topics?.map(topic => (
        <Topic key={topic.id} open={open} topic={topic}/>
      ))}

    </ScrollArea>
  );
};

export default TopicList;
