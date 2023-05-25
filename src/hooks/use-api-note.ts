import { useSession } from "next-auth/react";
import { useNoteStore } from "~/store/notetackerStore";
import { type RouterOutputs, api } from "~/utils/api";

type Topic = RouterOutputs["topic"]["getAll"][0];

export const useApiNote = () => {

    const { data: sessionData } = useSession();
  const { currentTopic } = useNoteStore();

  const { data: notes, refetch: refetchNotes, isLoading } = api.note.getAll.useQuery(
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

  const updateNote = api.note.update.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });



  return {
    notes,
    createNote,
    updateNote,
    deleteNote,
    isLoading
  };
};
