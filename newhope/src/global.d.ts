/// <reference types="@sveltejs/kit" />

interface NotesFolder {
  name: string;
  notes: NoteFile[];
  title: string;
}

interface NoteFile {
  file: string;
  teaser?: string;
  title: string;
}

type NoteVariant = 'dwarf' | 'elf' | 'human' | 'neutral' | 'orc';
