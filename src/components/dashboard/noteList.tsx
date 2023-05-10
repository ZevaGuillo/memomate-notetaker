import { type FC } from "react";
import { type RouterOutputs } from "~/utils/api";
import { SheetComponent } from "../ui/sheet";
import Note from "./note";
import NoteView from "./noteView";
import { Edit3 } from "lucide-react";
import NoteEditor from "./NoteEditor";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteListProps {
  notes: NoteType[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {notes &&
        notes.map((note) => (
          <div key={note.id} className="relative">
            <SheetComponent
              trigger={<Note note={note} />}
              content={<NoteView note={note} />}
            />

            {/* Editor */}
            <SheetComponent
              trigger={
                <div className="absolute bottom-4 right-6 grid cursor-pointer place-content-center rounded-full bg-slate-800 p-2 transition-colors hover:bg-slate-700">
                  <Edit3 color="#f2f2f2" size={20} />
                </div>
              }
              content={
                <NoteEditor
                  onSave={() => {
                    console.log();
                  }}
                  defaultTitle="Edit Note"
                  defaultNote={note}
                />
              }
            />
          </div>
        ))}
    </ul>
  );
};

export default NoteList;
