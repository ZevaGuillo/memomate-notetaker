import { type FC } from "react";
import { Input } from "../ui/input";
import { cn } from "~/lib/utils";
interface NewTopicProps {
  open: boolean;
}

const NewTopic: FC<NewTopicProps> = ({ open }) => {
  return (
    <div
      className={cn(
        "mb-10 h-20  opacity-100 transition-opacity delay-75 ease-in flex justify-center items-center pl-2 pr-4",
        { "opacity-0": !open }
      )}
    >
      {/* TODO: new Topic */}
      {/* <h1>hola</h1> */}
      <Input className="bg-slate-900" placeholder="New Topic"/>
    </div>
  );
};

export default NewTopic;
