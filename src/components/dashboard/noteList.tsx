import { type FC } from "react";
import { type RouterOutputs } from "~/utils/api";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Note from "./note";
import { usePositionSheet } from "~/hooks/use-position-sheet";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteListProps {
  notes: NoteType[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  const {position} = usePositionSheet()
  return (
    <ul className="flex flex-wrap gap-4">
      {notes &&
        notes.map((note) => (
          <Sheet key={note.id}>
            <SheetTrigger className="text-start group">
              <Note note={note} />
            </SheetTrigger>
            <SheetContent
            size={position === "bottom" ? "content" : "lg"}
            position={position}
            className="rounded-s-3xl"
            >
            </SheetContent>
          </Sheet>
        ))}
    </ul>
  );
};

export default NoteList;
