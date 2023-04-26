import { type FC } from "react";
import Topic from "./topic";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

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
    <div className="flex flex-col overflow-hidden">
      {/* <Topic open={open} /> */}
      {topics && topics?.map(topic => (
        <Topic key={topic.id} open={open} topic={topic}/>
      ))}
    </div>
  );
};

export default TopicList;
