import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useToast } from "~/components/ui/use-toast";
import { useNoteStore } from "~/store/notetackerStore";
import { api } from "~/utils/api";


export const useApiTopic = () => {
    const { toast } = useToast()

    const { topicLoading, setTopicLoading } = useNoteStore();

    const { data: sessionData } = useSession();

    const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
            refetchOnWindowFocus: false,
            refetchInterval: false,
            refetchIntervalInBackground: false,
        }
    );

    const createTopic = api.topic.create.useMutation({
        onSuccess: () => {
            setTopicLoading(!topicLoading);
            toast({
                description: "Topic successfully created!",
            })
        },
    });

    useEffect(()=>{
        void refetchTopics();
    },[topicLoading])

    return {
        topics,
        createTopic,
    };
};
