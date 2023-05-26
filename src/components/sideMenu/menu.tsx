import { Plus } from "lucide-react";
import TopicList from "./topicList";
import NewTopic from "./newTopic";
import { cn } from "~/lib/utils";
import { useClickOutside } from "~/hooks/use-click-outside";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { useNoteStore } from "~/store/notetackerStore";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
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
      <NewTopic open={open} setOpen={setOpen} createTopic={createTopic} />

      {/* topic list */}
      {topics && <TopicList open={open} topics={topics} />}
    </div>
  );
};

export default Menu;
