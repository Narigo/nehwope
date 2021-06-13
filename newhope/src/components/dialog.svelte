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
  article.dwarf {
    font-family: var(--dwarf-font-family);
    font-size: 150%;
  }
  article.dwarf > :global(h1),
  article.dwarf > :global(h2),
  article.dwarf > :global(h3),
  article.dwarf > :global(h4) {
    font-family: var(--dwarf-font-family);
  }
  article.elf {
    font-family: var(--elf-font-family);
    font-size: 150%;
  }
  article.elf > :global(h1),
  article.elf > :global(h2),
  article.elf > :global(h3),
  article.elf > :global(h4) {
    font-family: var(--elf-font-family);
  }
  article.human {
    font-family: var(--human-font-family);
    font-size: 150%;
  }
  article.human > :global(h1),
  article.human > :global(h2),
  article.human > :global(h3),
  article.human > :global(h4) {
    font-family: var(--human-font-family);
  }
  article.orc {
    font-family: var(--orc-font-family);
    font-size: 150%;
  }
  article.orc > :global(h1),
  article.orc > :global(h2),
  article.orc > :global(h3),
  article.orc > :global(h4) {
    font-family: var(--orc-font-family);
  }

  article::after {
    clear: both;
    content: '';
    display: block;
  }

  img {
    float: right;
  }
</style>
