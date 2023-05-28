import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useToast } from "~/components/ui/use-toast";
import { useNoteStore } from "~/store/notetackerStore";
import { RouterOutputs, api } from "~/utils/api";

type Topic = RouterOutputs["topic"]["getAll"][0];

export const useApiTopic = () => {
    const { toast } = useToast()

    const { topicLoading, setTopicLoading, setCurrentTopic } = useNoteStore();

    const { data: sessionData } = useSession();

    const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
            onSuccess: (data) => {
                if(data[0]){
                    setCurrentTopic(data[0])
                  }else{
                    setCurrentTopic({} as Topic)
                  }
                setTopicLoading(false);
            },
            refetchOnWindowFocus: false,
            refetchInterval: false,
            refetchIntervalInBackground: false,
        }
    );

    const { data } = api.topic.init.useQuery(
        undefined,
        {
            enabled: sessionData?.user !== undefined,
            onSuccess: (data) => {
                if(data.topic){
                    setCurrentTopic(data.topic)
                }
                setTopicLoading(false);
            },
            refetchOnWindowFocus: false,
            refetchInterval: false,
            refetchIntervalInBackground: false,
        }
    )

    const createTopic = api.topic.create.useMutation({
        onMutate: ()=>{
            setTopicLoading(true);
        },
        onSuccess: (data) => {
            setCurrentTopic(data)
            setTopicLoading(false);
            toast({
                description: "Topic successfully created!",
            })
        },
    });

    useEffect(() => {
        void refetchTopics();
    }, [topicLoading])

    return {
        topics,
        createTopic,
    };
};
