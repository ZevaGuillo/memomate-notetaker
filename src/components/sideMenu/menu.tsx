import TopicList from "./topicList";
import NewTopic from "./newTopic";
import { cn } from "~/lib/utils";
import { useNoteStore } from "~/store/notetackerStore";
import { type Dispatch, type FC, type SetStateAction, useEffect } from "react";
import { useApiTopic } from "~/hooks/use-api-topic";

interface MenuProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const Menu: FC<MenuProps> = ({ open, setOpen }) => {
  const { currentTopic } = useNoteStore();
  const { topics, createTopic } = useApiTopic();

  useEffect(() => {
    setOpen(false);
  }, [currentTopic]);

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex h-screen w-[4rem] flex-col bg-slate-950 text-white transition-all ease-in-out",
        { "w-[15rem]": open }
      )}
    > 
      <p className={cn("absolute text-3xl font-bold py-6 px-4 opacity-0 transition-opacity delay-0 duration-300 ease-in-out ", {'opacity-100 delay-150': open})}>MemoMate</p>
      <NewTopic open={open} setOpen={setOpen} createTopic={createTopic} />

      {/* topic list */}
      {topics && <TopicList open={open} topics={topics} />}
      <p className={cn("text-sm text-slate-400 whitespace-nowrap font-bold py-6 px-4 opacity-0 transition-opacity delay-0 duration-300 ease-in-out ", {'opacity-100 delay-150': open})}>by ❤ ZevaGuillo</p>
    </div>
  );
};

export default Menu;
