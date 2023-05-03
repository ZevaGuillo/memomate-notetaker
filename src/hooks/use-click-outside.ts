import { useEffect, useRef, useState } from "react";

export const useClickOutside =()=> {
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
    return {
        open,
        setOpen,
        containerRef
    }
}