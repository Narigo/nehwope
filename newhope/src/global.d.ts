/// <reference types="@sveltejs/kit" />

interface NotesFolder {
  name: string;
  notes: Note[];
  title: string;
}

interface Note {
  content: string;
  file: string;
  title: string;
  variant?: 'dwarf' | 'elf' | 'human' | 'neutral' | 'orc';
}
