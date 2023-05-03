import { create } from "zustand"
import type { NoteState } from "~/types/noteState"

export const useNoteStore = create<NoteState>((set) => ({
    topics: [],
    addAllTopic: (addtopics) =>
        set({
            topics: [...addtopics],
        }),
    updateTopic: (id, updatedTopic) =>
        set((state) => ({
            topics: state.topics.map((topic) => (topic.id === id ? { ...topic, ...updatedTopic } : topic)),
        })),
    deleteTopic: (id) =>
        set((state) => ({
            topics: state.topics.filter((topic) => topic.id !== id),
        })),
}))