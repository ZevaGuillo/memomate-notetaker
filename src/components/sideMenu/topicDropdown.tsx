import { MoreHorizontal, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import EditTopic from "./editTopic";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { type RouterOutputs, api } from "~/utils/api";
import { type FC } from "react";
import { useNoteStore } from "~/store/notetackerStore";
import { useToast } from "../ui/use-toast";
import { useSession } from "next-auth/react";
type Topic = RouterOutputs["topic"]["getAll"][0];

interface TopicDropdown {
  topic: Topic;
}

const TopicDropdown: FC<TopicDropdown> = ({ topic }) => {

  const { toast } = useToast();
  const { topicLoading, setTopicLoading, setCurrentTopic } = useNoteStore();
  const { data: sessionData } = useSession();

  const { refetch } = api.topic.getAll.useQuery(
    undefined,
    {
        enabled: sessionData?.user !== undefined,
        onSuccess:(data) => {
          if(data[0]){
            setCurrentTopic(data[0])
          }else{
            setCurrentTopic({} as Topic)
          }
        },
        refetchOnWindowFocus: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
    }
);

  const updateTopic = api.topic.update.useMutation({
    onSuccess: () => {
      setTopicLoading(!topicLoading);
      toast({
        description:"Topic successfully updated!",
      });
    },
  });

  const deleteTopic = api.topic.delete.useMutation({
    onSuccess: () => {
      setTopicLoading(!topicLoading);
      toast({
        description:"Topic successfully deleted!",
      });
    },
  });


  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-900 text-slate-400">
        <EditTopic topic={topic} save={updateTopic} />
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault();
              }}
            >
              Delete <Trash2 size={17} />
            </DropdownMenuItem>
          </AlertDialogTrigger>
          <AlertDialogContent className="text-slate-50">
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Topic and Notes</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this topic and all its
                associated notes? This action cannot be undone, and all
                information will be permanently lost. Please confirm your
                choice.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
              onClick={() => {
                deleteTopic.mutate({
                  id: topic.id
                })
                void refetch();
              }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TopicDropdown;
