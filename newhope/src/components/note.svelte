<script lang="ts">
  import { assets } from '$app/paths';

  export let note: Note;
</script>

<article class={note.variant}>
  <img src="{assets}/images/{note.variant}.svg" alt={note.variant} />
  {@html note.content}
</article>
<nav>
  <a href={note.previous}>Zurück</a>
  <a href={note.next}>Weiter</a>
</nav>

<style>
  article > :global(h1),
  article > :global(h2),
  article > :global(h3) {
    font-family: unset;
  }
  article > :global(h1) {
    font-size: 2em;
  }
  article > :global(h2) {
    font-size: 1.5em;
  }
  article > :global(h3) {
    font-size: 1.25em;
  }

  article {
    font-size: 150%;
  }

  article.dwarf {
    font: var(--dwarf-font);
  }
  article.elf {
    font: var(--elf-font);
  }
  article.human {
    font: var(--human-font);
  }
  article.orc {
    font: var(--orc-font);
  }

  img {
    float: right;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }
</style>
