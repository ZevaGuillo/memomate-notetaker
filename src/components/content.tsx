import { useSession } from "next-auth/react";
import { useState } from "react";
import { api, type RouterOutputs } from "~/utils/api";

type Topic = RouterOutputs['topic']['getAll'][0]

const Content = () => {
  const { data: sessionData } = useSession();

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined,
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => {
        setSelectedTopic(selectedTopic ?? data[0] ?? null);
      },
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  return (
    <div className="mx-5 mt-5 grid-cols-4 gap-2">
      <div className="px-2">
        <ul className="">
          {topics?.map((topic) => (
            <li key={topic.id}>
              <a
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  setSelectedTopic(topic)
                }}
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="divide-x-2 divide-slate-600"></div>
        <input
          type="text"
          placeholder="New Topic"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              createTopic.mutate({
                title: e.currentTarget.value,
              });
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default Content;
