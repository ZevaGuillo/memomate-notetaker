import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import NoteEditor from "./NoteEditor";

type SheetPositions = "right" | "top" | "bottom" | "left" | null | undefined 

const NewNote = () => {
  const [position, setPosition] = useState<SheetPositions>('bottom');
  
  useEffect(() => {
    function handleResize() {
      setPosition(window.innerWidth <= 768 ? 'bottom': 'right');
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent size={"lg"} position={position} className="rounded-s-3xl">
        <NoteEditor/>
      </SheetContent>
    </Sheet>
  );
};

export default NewNote;
