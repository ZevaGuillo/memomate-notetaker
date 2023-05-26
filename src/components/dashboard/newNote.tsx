import { type FC } from "react";
import { SheetComponent } from "../ui/sheet";
import NoteEditor from "./NoteEditor";
import { type api } from "~/utils/api";
import { useNoteStore } from "~/store/notetackerStore";
import { Plus } from "lucide-react";

interface NewNoteProps {
  onSave: ReturnType<typeof api.note.create.useMutation>;
}

const NewNote: FC<NewNoteProps> = ({ onSave }) => {

  const {
    currentTopic: { id },
  } = useNoteStore();

  const createdNote = (title: string, content: string) => {
    onSave.mutate({
      title,
      content,
      topicId: id ?? "",
    });
  };

  return (
    <SheetComponent
      trigger={
        <div className="absolute top-0 right-0 h-14 w-14 md:h-10 md:w-auto flex items-center justify-between gap-2 rounded-full bg-purple-300 px-4 transition-all ease-in-out group-hover:bg-purple-200">
          <Plus
            size={25}
            className="transition-all ease-linear group-hover:scale-105"
          />
          <p className="hidden md:block text-sm font-semibold">New note</p>
        </div>
      }
      content={<NoteEditor onSave={createdNote} />}
    />
  );
};

export default NewNote;
