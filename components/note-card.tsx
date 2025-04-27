import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateTime } from "@/lib/storage";
import { Note } from "@/lib/types";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";

interface NoteCardProp {
  note: Note;
  startEdit: () => void;
}

export const NoteCard = ({ note, startEdit }: NoteCardProp) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {note.title}{" "}
          <Button onClick={startEdit}>
            Edit <Edit />
          </Button>
        </CardTitle>
        <CardDescription>{formatDateTime(note.createdAt)}</CardDescription>
      </CardHeader>
      <CardContent>{note.content}</CardContent>
    </Card>
  );
};
