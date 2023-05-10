import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { aura } from "@uiw/codemirror-theme-aura";
import { useState, type FC } from "react";
import { SheetHeader, SheetTitle } from "../ui/sheet";
import { Input } from "../ui/input";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { type RouterOutputs } from "~/utils/api";

type NoteType = RouterOutputs["note"]["getAll"][0];

interface NoteEditorProps {
  onSave: (title: string, content: string) => void;
  defaultTitle?: string;
  defaultNote?: NoteType;
}

const NoteEditor: FC<NoteEditorProps> = ({
  onSave,
  defaultTitle,
  defaultNote,
}) => {
  const [code, setCode] = useState<string>(defaultNote?.content || '');
  const [title, setTitle] = useState<string>(defaultNote?.title || '');

  return (
    <>
      <SheetHeader>
        <SheetTitle>
          <h2 className="mb-4 text-3xl text-slate-50">{defaultTitle || 'New Note'}</h2>
        </SheetTitle>
        <h3 className="text-slate-50">Title</h3>
        <Input
          type="text"
          placeholder="Note Title"
          className="bg-slate-800 text-slate-50"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </SheetHeader>
      <div className="mt-2 h-[calc(80vh-16rem)] overflow-auto rounded-lg  md:h-[calc(100vh-16rem)]">
        <CodeMirror
          value={code}
          minHeight="100%"
          minWidth="100%"
          theme={aura}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value) => setCode(value)}
          className="h-full"
        />
      </div>
      <SheetPrimitive.Close>
        <button
          className="text-white"
          onClick={() => {
            if (title.length > 0 && code.length > 0) {
              onSave(title, code);
            }
          }}
        >
          Save
        </button>
      </SheetPrimitive.Close>
    </>
  );
};

export default NoteEditor;
