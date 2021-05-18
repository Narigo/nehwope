<script lang="ts">
  import { assets } from '$app/paths';

  export let note: Note;
</script>

<article class={note.variant}>
  {#if note.variant && note.variant !== 'neutral'}
    {note.variant}
    <img src="{assets}/images/{note.variant}.svg" alt={note.variant} />
  {/if}
  {@html note.content}
</article>
<nav>
  <a href={note.previous}>Zurück</a>
  <a href={note.next}>Weiter</a>
</nav>

<style>
  article :not(.neutral) > :global(h1),
  article :not(.neutral) > :global(h2),
  article :not(.neutral) > :global(h3) {
    font-family: unset;
  }
  article :not(.neutral) > :global(h1) {
    font-size: 3em;
  }
  article :not(.neutral) > :global(h2) {
    font-size: 2.5em;
  }
  article :not(.neutral) > :global(h3) {
    font-size: 2em;
  }

  article :not(.neutral) > :global(h4) {
    font-size: 1.5em;
  }

  article :not(.neutral) {
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
  article.neutral {
    font: var(--neutral-font);
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
