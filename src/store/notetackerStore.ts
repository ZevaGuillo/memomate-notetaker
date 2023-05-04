import { create } from "zustand"
import type { NoteState } from "~/types/noteState"
import { type RouterOutputs } from '../utils/api';

type Topic = RouterOutputs['topic']['getAll'][0]

export const useNoteStore = create<NoteState>((set) => ({
    topics: [],
    currentTopic: {} as Topic,
    addAllTopic: (addtopics) =>
        set({
            topics: [...addtopics],
        }),
    setCurrentTopic: (topic) => set({currentTopic: topic})
}))