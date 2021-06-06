/// <reference types="@sveltejs/kit" />

interface NotesFolder {
  author?: string;
  name: string;
  notes: NoteFile[];
  title: string;
  teaser?: string;
}

interface NoteFile {
  file: string;
  next?: string;
  previous?: string;
  teaser?: string;
  title: string;
}

type NoteVariant = 'dwarf' | 'elf' | 'human' | 'neutral' | 'orc';
