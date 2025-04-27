import { Note } from "@/lib/types";
import { X } from "lucide-react";

interface NoteItemProp {
  note: Note;
  removeNote: (noteId: number) => void;
  onSelectNote: () => void;
}

export const NoteItem = ({ note, removeNote, onSelectNote }: NoteItemProp) => {
  console.log(note.id);
  return (
    <div
      onClick={onSelectNote}
      className={`p-2 rounded-md cursor-pointer
         ${true ? "bg-blue-500" : ""}
       hover:bg-accent transition-colors flex justify-between items-center`}
    >
      {note.title}

      {
        <X
          onClick={(e) => {
            e.stopPropagation();
            removeNote(note.id);
          }}
        />
      }
    </div>
  );
};
