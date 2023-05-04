import { type RouterOutputs } from '../utils/api';

type Topic = RouterOutputs['topic']['getAll'][0]

interface NoteState {
    topics: Topic[];
    currentTopic: Topic;
    addAllTopic: (topics: Topic[]) => void;
    setCurrentTopic: (topic: Topic) => void;
}
