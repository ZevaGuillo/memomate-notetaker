import { useEffect, useState } from "react";

type SheetPositions = "right" | "top" | "bottom" | "left" | null | undefined;

export const usePositionSheet =()=> {
    const [position, setPosition] = useState<SheetPositions>("bottom");

    useEffect(() => {
      function handleResize() {
        setPosition(window.innerWidth <= 768 ? "bottom" : "right");
      }
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return {
        position
    }
}