import React from "react";
import NewNote from "./newNote";
import { useNoteStore } from "~/store/notetackerStore";
import NoteList from "./noteList";
import { useApiNote } from "~/hooks/use-api-note";


export const Dashboard = () => {
  const { currentTopic } = useNoteStore();
  const {notes, createNote, deleteNote, updateNote, isLoading} = useApiNote()

  return (
    <div className="h-full relative">
      <div className="flex justify-between md:pr-8 gap-3">
        <h1 className="text-2xl font-bold capitalize text-slate-700">
          {currentTopic.title}
        </h1>
        <NewNote onSave={createNote} />
      </div>
      <div className="h-full pt-12">
        {notes && <NoteList isLoading={isLoading} notes={notes} onUpdate={updateNote} onDelete={deleteNote}/>}
      </div>
    </div>
  );
};
