import { type FC } from "react";
import { type RouterOutputs } from "~/utils/api";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Note from "./note";
import { usePositionSheet } from "~/hooks/use-position-sheet";
import NoteView from "./noteView";
import { Edit3 } from "lucide-react";
import NoteEditor from "./NoteEditor";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteListProps {
  notes: NoteType[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  const { position } = usePositionSheet();
  return (
    <ul className="flex flex-wrap gap-4">
      {notes &&
        notes.map((note) => (
          <div key={note.id} className="relative">
            <Sheet>
              <SheetTrigger className="group text-start">
                <Note note={note} />
              </SheetTrigger>
              <SheetContent
                size={position === "bottom" ? "content" : "lg"}
                position={position}
                className="rounded-s-3xl"
              >
                <NoteView note={note} />
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger className="group text-start">
                <div className="absolute bottom-4 right-6 grid cursor-pointer place-content-center rounded-full bg-slate-800 p-2 transition-colors hover:bg-slate-700">
                  <Edit3 color="#f2f2f2" size={20} />
                </div>
              </SheetTrigger>
              <SheetContent
                size={position === "bottom" ? "content" : "lg"}
                position={position}
                className="rounded-s-3xl"
              >
                <NoteEditor onSave={()=>{console.log()}} defaultTitle="Edit" defaultNote={note}/>
              </SheetContent>
            </Sheet>
          </div>
        ))}
    </ul>
  );
};

export default NoteList;
