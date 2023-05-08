import React from "react";
import NewNote from "./newNote";
import { useNoteStore } from "~/store/notetackerStore";
import { api, type RouterOutputs } from "~/utils/api";
import { useSession } from "next-auth/react";
import NoteList from "./noteList";

type Topic = RouterOutputs["topic"]["getAll"][0];

export const Dashboard = () => {
  const { data: sessionData } = useSession();
  const { currentTopic } = useNoteStore();

  const { data: notes, refetch: refetchNotes } = api.note.getAll.useQuery(
    {
      topicId: currentTopic.id ?? "",
    },
    {
      enabled:
        sessionData?.user !== undefined && currentTopic !== ({} as Topic),
    }
  );

  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  return (
    <div className="h-full">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold capitalize text-slate-700">
          {currentTopic.title}
        </h1>
        <NewNote onSave={createNote} />
      </div>
      <div className="h-full bg-slate-400 pb-2 pt-8">
        
        {notes && <NoteList notes={notes} />}
      </div>
    </div>
  );
};
