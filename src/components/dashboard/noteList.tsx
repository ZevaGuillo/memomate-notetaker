import { type FC } from "react";
import { type RouterOutputs } from "~/utils/api";
import Note from "./note";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteListProps {
  notes: NoteType[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {notes &&
        notes.map((note) => (
          <Note key={note.id} note={note}/>
        ))}
    </ul>
  );
};

export default NoteList;
