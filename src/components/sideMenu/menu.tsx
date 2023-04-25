import { useEffect, useRef, useState } from "react";
import { cn } from "~/utils";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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
    <div ref={containerRef} className={cn("fixed top-0 flex h-screen w-[4rem] flex-col bg-slate-950 text-white transition-all ease-in-out",{'w-[15rem]':open})}>

      <div className="pointer-events-none absolute top-[4.75rem] -right-5 h-5 w-5 bg-slate-950">
        <div className="h-5 w-5 rounded-es-full bg-slate-50"></div>
      </div>
      <div className="pointer-events-none absolute top-[11rem] z-20 -right-5 h-5 w-5 bg-slate-950">
        <div className="h-5 w-5 rounded-ss-full bg-slate-50"></div>
      </div>
      <div className={cn("absolute mt-[6rem] grid h-[5rem] w-[5rem] rounded-e-3xl -right-[2.5rem] place-content-center  bg-slate-950 text-3xl transition-all ease-in-out", {'w-[3rem]': open})}>
        <h1 className="text-3xl hover:scale-105" onClick={()=>setOpen(true)}>+</h1>
      </div>
    </div>
  );
};

export default Menu;
