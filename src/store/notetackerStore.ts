import { create } from "zustand"
import type { NoteState } from "~/types/noteState"
import { type RouterOutputs } from '../utils/api';

type Topic = RouterOutputs['topic']['getAll'][0]

export const useNoteStore = create<NoteState>((set) => ({
    topicLoading: false,
    currentTopic: {} as Topic,
    setTopicLoading: (value) => set({ topicLoading: value }),
    setCurrentTopic: (topic: Topic) => set({ currentTopic: topic })
}))