<script lang="ts">
  import { assets } from '$app/paths';

  export let variant: NoteVariant = 'neutral';
</script>

<article class={variant}>
  {#if variant && variant !== 'neutral'}
    <img src="{assets}/images/{variant}.svg" alt={variant} />
  {/if}
  <slot />
</article>

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

  article::after {
    clear: both;
    content: '';
    display: block;
  }

  img {
    float: right;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }
</style>
