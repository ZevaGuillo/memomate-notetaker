import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TopicList from "./topicList";
import NewTopic from "./newTopic";
import { cn } from "~/lib/utils";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

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
          "absolute -right-[2.5rem] mt-[6rem] grid h-20 w-20 place-content-center rounded-3xl  bg-slate-950 transition-all ease-in-out hover:bg-slate-900",
          { "w-[3rem]": open, "rounded-s-none": open }
        )}
        onClick={() => setOpen(true)}
      >
        <Plus size={40} />
      </div>
      <div className="mt-[6rem]">
        <NewTopic open={open} />

        {/* topic list */}
        <TopicList open={open} />
      </div>
    </div>
  );
};

export default Menu;
