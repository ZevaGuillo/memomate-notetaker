import { Plus } from "lucide-react";
import TopicList from "./topicList";
import NewTopic from "./newTopic";
import { cn } from "~/lib/utils";
import { useClickOutside } from "~/hooks/use-click-outside";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useNoteStore } from "~/store/notetackerStore";
import { useEffect } from "react";

const Menu = () => {
  const { open, setOpen, containerRef } = useClickOutside();
  const { addAllTopic, setCurrentTopic, currentTopic } = useNoteStore();

  const { data: sessionData } = useSession();

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined,
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => {
        addAllTopic(data);
        if (currentTopic && data[0]) {
          setCurrentTopic(data[0]);
        }
      },
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  useEffect(()=>{
    setOpen(false);
  }, [currentTopic])

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed top-0 flex h-screen w-[4rem] flex-col bg-slate-950 text-white transition-all ease-in-out",
        { "w-[15rem]": open }
      )}
    >
      <div className="pointer-events-none absolute -right-5 top-[4.75rem] h-5 w-5 bg-slate-950">
        <div className="h-5 w-5 rounded-es-full bg-slate-50"></div>
      </div>
      <div className="pointer-events-none absolute -right-5 top-[11rem] z-20 h-5 w-5 bg-slate-950">
        <div className="h-5 w-5 rounded-ss-full bg-slate-50"></div>
      </div>
      <div
        className={cn(
          "absolute -right-[2.5rem] z-10 mt-[6rem] grid h-20 w-20 place-content-center rounded-3xl  bg-slate-950 transition-all ease-in-out hover:bg-slate-900",
          { "w-[3rem]": open, "rounded-s-none": open }
        )}
        onClick={() => setOpen(true)}
      >
        <Plus size={40} pointerEvents={"none"} />
      </div>
      <div className="mt-[6rem]">
        <NewTopic open={open} createTopic={createTopic}/>

        {/* topic list */}
        {topics && <TopicList open={open} topics={topics} />}
      </div>
    </div>
  );
};

export default Menu;
