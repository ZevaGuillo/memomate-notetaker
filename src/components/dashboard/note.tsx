import {type FC } from "react";
import {type RouterOutputs } from "~/utils/api";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteProps {
  note: NoteType;
}


const Note: FC<NoteProps> = ({note}) => {
  return <li>{note.title}</li>;
};

export default Note;
