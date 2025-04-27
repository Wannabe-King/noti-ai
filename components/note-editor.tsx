"use client";

import { Note } from "@/lib/types";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Save, X } from "lucide-react";
import { Button } from "./ui/button";

interface NoteEditorProp {
  note: Note;
  onSave: (note: Note) => void;
  onCancle: () => void;
}

export const NoteEditor = ({ note, onSave, onCancle }: NoteEditorProp) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    onSave({
      ...note,
      title: title.trim() || "Untitled Note",
      content,
    });
  };

  return (
    <Card>
      <CardHeader>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="text-xl font-bold border-none  focus-visible:ring-0"
        />
      </CardHeader>
      <CardContent>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start Your Note ... "
          className="text-xl border  focus-visible:ring-0"
        />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant={"outline"}
          className="hover:bg-blue-300 text-black p-1 rounded-md"
          onClick={handleSave}
        >
          Save <Save />
        </Button>
        <Button
          className="hover:bg-red-500 p-2 rounded-md text-white"
          onClick={onCancle}
        >
          Cancle <X />
        </Button>
      </CardFooter>
    </Card>
  );
};
