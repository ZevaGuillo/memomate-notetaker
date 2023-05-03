import type { Topic } from "@prisma/client"
import { create } from "zustand"
import type { NoteState } from "~/types/noteState"

export const useNoteStore = create<NoteState>((set) => ({
    topics: [],
    currentTopic: {} as Topic,
    addAllTopic: (addtopics) =>
        set({
            topics: [...addtopics],
        }),
    setCurrentTopic: (topic) => set({currentTopic: topic})
}))