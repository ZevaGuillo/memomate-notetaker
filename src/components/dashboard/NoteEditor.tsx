import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { aura } from "@uiw/codemirror-theme-aura";
import { useState, type FC } from "react";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { Input } from "../ui/input";

interface NoteEditorProps {
  onSave?: (note: { title: string; content: string }) => void;
}

const NoteEditor: FC<NoteEditorProps> = ({ onSave }) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <>
      <SheetHeader>
        <SheetTitle>
            <h2 className="text-slate-50">Title</h2>
          <Input
            type="text"
            placeholder="Note Title"
            className="bg-slate-800 text-slate-50"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </SheetTitle>
        <SheetDescription>
          <div className="overflow-hidden rounded-lg">
            <CodeMirror
              value={code}
              height="50vh"
              width="500px"
              minWidth="100%"
              minHeight="30vh"
              theme={aura}
              extensions={[
                markdown({ base: markdownLanguage, codeLanguages: languages }),
              ]}
              onChange={(value) => setCode(value)}
              className=""
            />
          </div>
        </SheetDescription>
      </SheetHeader>
    </>
  );
};

export default NoteEditor;
