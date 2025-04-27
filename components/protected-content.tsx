"use client";

import { useState } from "react";
import { LogoutButton } from "@/components/logout-button";
import { AddContent } from "@/components/add-note";
import { NoteSidebar } from "@/components/note-sidebar";
import { NoteCard } from "@/components/note-card";
import { Note } from "@/lib/types";
import { NoteEditor } from "./note-editor";
import { EmptyState } from "./empty-state";

export function ProtectedContent() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>();
  const [editor, setEditor] = useState(false);

  const createNewNote = () => {
    const newNote: Note = {
      id: Date.now(),
      title: "New Note",
      content: "",
      createdAt: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setEditor(true);
  };

  const onSelectNote = (note: Note) => {
    setSelectedNote(note);
    setEditor(false);
  };

  const saveNote = (updatedNote: Note) => {
    setNotes(
      notes.map((note) => {
        if (note.id === updatedNote.id) {
          setSelectedNote(updatedNote);
          return updatedNote;
        }
        return note;
      })
    );
    setEditor(false);
  };

  const cancleEdit = () => {
    setEditor(false);
  };

  const startEdit = () => {
    setEditor(true);
  };

  const removeNote = (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
    if (selectedNote && selectedNote.id === noteId) {
      setSelectedNote(null);
      setEditor(false);
    }
  };

  const renderNoteContent = () => {
    if (selectedNote && editor) {
      return (
        <NoteEditor
          note={selectedNote}
          onSave={saveNote}
          onCancle={cancleEdit}
        />
      );
    }
    if (selectedNote) {
      return <NoteCard note={selectedNote} startEdit={startEdit} />;
    }
    return (
      <EmptyState
        message="Create new note"
        onButtonClick={createNewNote}
        buttonText="Create a new note"
      />
    );
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="min-w-sm sm:w-4xl h-full flex flex-col">
        <div className="md:flex justify-between items-center my-4">
          <h1 className="font-semibold text-4xl">Noti-AI</h1>
          <div className="flex gap-2">
            <AddContent onClick={createNewNote} />
            <LogoutButton />
          </div>
        </div>
        <div className="sm:grid grid-cols-3 gap-4 flex-1 py-4">
          <div className="sm:col-span-1">
            <NoteSidebar
              notes={notes}
              createNote={createNewNote}
              onSelectNote={onSelectNote}
              removeNote={removeNote}
              selectedNoteId={selectedNote?.id}
            />
          </div>
          <div className="sm:col-span-2">{renderNoteContent()}</div>
        </div>
      </div>
    </div>
  );
}
