import { type FC, useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import NoteEditor from "./NoteEditor";
import {type api } from "~/utils/api";
import { useNoteStore } from "~/store/notetackerStore";

type SheetPositions = "right" | "top" | "bottom" | "left" | null | undefined 

interface NewNoteProps{
  onSave: ReturnType<typeof  api.note.create.useMutation>
}

const NewNote: FC<NewNoteProps> = ({onSave}) => {
  const [position, setPosition] = useState<SheetPositions>('bottom');
  
  const {
    currentTopic: { id },
  } = useNoteStore();
  
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

  const createdNote = (title: string, content: string) =>{
    onSave.mutate({
      title,
      content,
      topicId: id ?? '',
    });
  }

  return (
    <Sheet >
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent  size={position === 'bottom' ? "content": 'lg'} position={position} className="rounded-s-3xl">
        <NoteEditor onSave={createdNote}/>
      </SheetContent>
    </Sheet>
  );
};

export default NewNote;
