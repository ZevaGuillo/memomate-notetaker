import React, { type FC } from "react";
import { SheetHeader, SheetTitle } from "../ui/sheet";
import ReactMarkdown from "react-markdown";
import { type RouterOutputs } from "~/utils/api";
import { ScrollArea } from "../ui/scroll-area";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteListProps {
  note: NoteType;
}

const NoteView: FC<NoteListProps> = ({ note }) => {
  return (
    <>
      <SheetHeader>
        <SheetTitle>
          <h2 className="mb-4 text-3xl text-slate-50">{note.title}</h2>
        </SheetTitle>
      </SheetHeader>
      <ScrollArea className="mt-2 h-[calc(80vh-16rem)] overflow-auto rounded-lg bg-slate-950 text-slate-50  md:h-[calc(100vh-8rem)]">
        <article className="prose prose-invert prose-img:rounded-xl prose-a:text-purple-600 prose-pre:bg-slate-800">
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </article>
      </ScrollArea>
    </>
  );
};

export default NoteView;
