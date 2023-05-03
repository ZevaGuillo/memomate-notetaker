import type { Note, Topic } from "@prisma/client"

interface NoteState {
    topics: Topic[];
    addAllTopic: (topics: Topic[]) => void;
    updateTopic: (id: string, topic: Partial<Topic>) => void;
    deleteTopic: (id: string) => void;
    // addNote: (topicId: string, note: Note) => void;
}

interface User {
    id: string,
    name: string,
    email: string,
    loggedIn: false
}
