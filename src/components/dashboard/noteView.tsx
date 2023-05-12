import React, { type FC } from "react";
import { SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";
import ReactMarkdown from "react-markdown";
import { api, type RouterOutputs } from "~/utils/api";
import { ScrollArea } from "../ui/scroll-area";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteListProps {
  note: NoteType;
  
  onDelete: (id:string) => void;
}

const NoteView: FC<NoteListProps> = ({ note, onDelete }) => {


  return (
    <>
      <SheetHeader>
        <SheetTitle>
          <h2 className="mb-4 text-3xl text-slate-50">{note.title}</h2>
        </SheetTitle>
      </SheetHeader>
      <ScrollArea className="mt-2 h-[calc(80vh-16rem)] overflow-auto rounded-lg bg-slate-950 text-slate-50  md:h-[calc(100vh-8rem)]">
        <article className="prose prose-invert prose-a:text-purple-600 prose-pre:bg-slate-800 prose-img:rounded-xl">
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </article>
      </ScrollArea>
      <SheetFooter>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="absolute bottom-4 right-4 grid cursor-pointer place-content-center rounded-full bg-slate-800 p-2 transition-colors hover:bg-slate-700">
              <Trash2 color="#F23005" size={20} />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="text-slate-50">
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Note Confirmation</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this note? This action cannot be
                undone. Click {'"'}Delete{'"'} to confirm or {'"'}Cancel{'"'} to
                go back.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <SheetPrimitive.Close>
                <AlertDialogAction
                  onClick={() => {
                    onDelete(note.id)
                  }}
                >
                  Delete
                </AlertDialogAction>
              </SheetPrimitive.Close>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SheetFooter>
    </>
  );
};

export default NoteView;
