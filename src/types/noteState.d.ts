import type { Topic } from "@prisma/client"

interface NoteState {
    topics: Topic[];
    currentTopic: Topic;
    addAllTopic: (topics: Topic[]) => void;
    setCurrentTopic: (topic: Topic) => void;
}
