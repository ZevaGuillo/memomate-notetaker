import { type FC } from "react";
import { type RouterOutputs } from "~/utils/api";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteProps {
  note: NoteType;
}

const Note: FC<NoteProps> = ({ note }) => {
  return (
      <Card className="text-start flex h-full w-full flex-col justify-between rounded-2xl border-none bg-gradient-to-r from-orange-300 to-rose-300 text-slate-950 shadow-lg shadow-rose-200 transition-all hover:scale-105">
        <CardHeader>
          <CardTitle className="mb-2 flex-1 text-2xl">{note.title}</CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-between ">
          <p className="text-sm opacity-50">{note.updatedAt.toDateString()}</p>
        </CardFooter>
      </Card>
  );
};

export default Note;
