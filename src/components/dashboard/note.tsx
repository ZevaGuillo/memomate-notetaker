import { type FC } from "react";
import { type RouterOutputs } from "~/utils/api";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Edit3 } from "lucide-react";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteProps {
  note: NoteType;
}

const Note: FC<NoteProps> = ({ note }) => {
  return (
    <Card className="bg-gradient-to-r from-orange-300 to-rose-300 border-none shadow-lg shadow-rose-200 flex flex-col justify-between text-slate-950 rounded-2xl h-56 w-56">
      <CardHeader>
        <CardTitle className="text-2xl mb-2 flex-1">{note.title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <p className="opacity-50 text-sm">{note.updatedAt.toDateString()}</p>
        <div className="p-2 grid place-content-center rounded-full bg-slate-800 transition-colors hover:bg-slate-700 cursor-pointer"><Edit3 color="#f2f2f2" size={20}/></div>
      </CardFooter>
    </Card>
  );
};

export default Note;
