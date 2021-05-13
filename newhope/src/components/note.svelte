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
    font-size: calc(initial * 1);
  }

  article {
    font-size: 150%;
  }

  article.dwarf {
    font-family: var(--dwarf-font-family);
  }
  article.elf {
    font-family: var(--elf-font-family);
  }
  article.human {
    font-family: var(--human-font-family);
  }
  article.orc {
    font-family: var(--orc-font-family);
  }

  img {
    float: right;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }
</style>
