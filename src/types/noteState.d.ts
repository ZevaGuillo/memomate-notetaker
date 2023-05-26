import { type RouterOutputs } from '../utils/api';

type Topic = RouterOutputs['topic']['getAll'][0]

interface NoteState {
    topicLoading: boolean,
    currentTopic: Topic;
    setTopicLoading: (value: boolean) => void;
    setCurrentTopic: (topic: Topic) => void;
}
