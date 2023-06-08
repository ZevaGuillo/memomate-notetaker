import React from "react";
import NewNote from "./newNote";
import { useNoteStore } from "~/store/notetackerStore";
import NoteList from "./noteList";
import { useApiNote } from "~/hooks/use-api-note";
import { Skeleton } from "../ui/skeleton";

export const Dashboard = () => {
  const { currentTopic, topicLoading } = useNoteStore();
  const { notes, createNote, deleteNote, updateNote, isLoading } = useApiNote();

  return (
    <div className="relative h-full">
      {!currentTopic.icon ? (
        <>
          {topicLoading ? (
            <div className="flex flex-col gap-12">
              <Skeleton className="h-10 w-48 bg-slate-300" />
              <Skeleton className="absolute right-0 top-0 h-14 w-14 md:h-10 md:w-32 rounded-full bg-slate-300" />
              <Skeleton className="h-56 w-56 bg-slate-300 pt-12" />
            </div>
          ) : (
            <>
              <div className="pt-20">
                <h2 className="text-3xl text-slate-500">
                  You don{"'"}t have any notes to display at the moment.
                </h2>
                <p className="text-2xl text-slate-400">
                  Before adding notes, you need to create a topic. A topic is a
                  <br />
                  category or context in which you can organize your notes
                </p>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="flex justify-between gap-3 md:pr-8">
            {!!currentTopic.icon && (
              <>
                <h1 className="text-2xl font-bold flex gap-1 capitalize text-slate-700">
                  <span>{currentTopic.icon}</span>
                  {currentTopic.title}
                </h1>
                <NewNote onSave={createNote} />
              </>
            )}
          </div>
          <div className="h-full pt-12">
            {notes && (
              <NoteList
                isLoading={isLoading}
                notes={notes}
                onUpdate={updateNote}
                onDelete={deleteNote}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
