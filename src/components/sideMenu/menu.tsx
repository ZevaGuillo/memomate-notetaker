import TopicList from "./topicList";
import NewTopic from "./newTopic";
import { cn } from "~/lib/utils";
import { useNoteStore } from "~/store/notetackerStore";
import { type Dispatch, type FC, type SetStateAction, useEffect } from "react";
import { useApiTopic } from "~/hooks/use-api-topic";
import Link from "next/link";
import { HeartIcon } from "lucide-react";

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
      <p
        className={cn(
          "absolute px-4 py-6 text-3xl font-bold opacity-0 transition-opacity duration-300 delay-0 ease-in-out ",
          { "opacity-100 delay-150": open }
        )}
      >
        MemoMate
      </p>
      <NewTopic open={open} setOpen={setOpen} createTopic={createTopic} />

      {/* topic list */}
      {topics && <TopicList open={open} topics={topics} />}
      <p
        className={cn(
          "whitespace-nowrap px-4 py-6 text-sm font-bold text-slate-400 opacity-0 transition-opacity duration-300 delay-0 ease-in-out ",
          { "opacity-100 delay-150": open }
        )}
      >
        by <HeartIcon className="inline" size={20}/>{" "}
        <Link
          href={"https://github.com/ZevaGuillo"}
          target="_blank"
          rel="noreferrer"
        >
          ZevaGuillo
        </Link>
      </p>
    </div>
  );
};

export default Menu;
