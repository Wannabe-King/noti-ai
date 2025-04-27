import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "./empty-state";
import { NoteItem } from "./note-item";
import { Note } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";

interface NoteSiderbarProp {
  notes: Note[];
  onSelectNote: (note: Note) => void;
  createNote: () => void;
  removeNote: (noteId: number) => void;
}

export const NoteSidebar = ({
  notes,
  createNote,
  onSelectNote,
  removeNote,
}: NoteSiderbarProp) => {
  return (
    <Card className="h-full">
      <CardHeader className="px-3">
        <CardTitle>My Notes</CardTitle>
      </CardHeader>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <CardContent className="px-3 h-full">
          {notes.length == 0 ? (
            <EmptyState
              message="No notes present"
              onButtonClick={createNote}
              buttonText="Create your first note"
            />
          ) : (
            <div className="flex flex-col gap-2">
              {notes.map((note) => (
                <NoteItem
                  onSelectNote={() => onSelectNote(note)}
                  key={note.id}
                  note={note}
                  removeNote={removeNote}
                ></NoteItem>
              ))}
            </div>
          )}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};
