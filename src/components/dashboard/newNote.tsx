import { type FC } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import NoteEditor from "./NoteEditor";
import { type api } from "~/utils/api";
import { useNoteStore } from "~/store/notetackerStore";
import { Plus } from "lucide-react";
import { usePositionSheet } from "~/hooks/use-position-sheet";

interface NewNoteProps {
  onSave: ReturnType<typeof api.note.create.useMutation>;
}

const NewNote: FC<NewNoteProps> = ({ onSave }) => {
  const {position} = usePositionSheet()

  const {
    currentTopic: { id },
  } = useNoteStore();

  const createdNote = (title: string, content: string) => {
    onSave.mutate({
      title,
      content,
      topicId: id ?? "",
    });
  };

  return (
    <Sheet>
      <SheetTrigger className="group">
        <div className="bg-purple-300 px-4 rounded-full group-hover:bg-purple-200 h-full flex gap-2 justify-between items-center transition-all ease-in-out">
        <Plus size={25} className="group-hover:scale-105 transition-all ease-linear"/>
        <p className="text-sm font-semibold">
          New note
          </p>
        </div>
      </SheetTrigger>
      <SheetContent
        size={position === "bottom" ? "content" : "lg"}
        position={position}
        className="rounded-s-3xl"
      >
        <NoteEditor onSave={createdNote} />
      </SheetContent>
    </Sheet>
  );
};

export default NewNote;
