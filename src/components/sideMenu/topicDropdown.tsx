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
type Topic = RouterOutputs["topic"]["getAll"][0];

interface TopicDropdown {
  topic: Topic 
}

const TopicDropdown: FC<TopicDropdown> = ({topic}) => {


  const updateTopic = api.topic.update.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
  });



  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-900 text-slate-400">
        <EditTopic topic={topic} save={updateTopic}/>
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
              <AlertDialogTitle>Delete Note Confirmation</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this note? This action cannot be
                undone. Click {'"'}Delete{'"'} to confirm or {'"'}Cancel
                {'"'} to go back.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
              // onClick={() => {
              // }}
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
