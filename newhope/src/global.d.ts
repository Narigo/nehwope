/// <reference types="@sveltejs/kit" />

export interface NotesFolder {
  author?: string;
  name: string;
  notes: NoteFile[];
  title: string;
  teaser?: string;
}

export interface NoteFile {
  file: string;
  next?: string;
  previous?: string;
  teaser?: string;
  title: string;
}

export type DialogVariant = 'dwarf' | 'elf' | 'human' | 'neutral' | 'orc';
