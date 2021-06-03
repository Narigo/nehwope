<script lang="ts">
  import { setContext } from 'svelte';

  export let note;
  setContext('note', note);
</script>

<div>
  <article>
    <slot />
  </article>

  <nav>
    {#if !!note.previous}
      <a href={note.previous}>Zurück</a>
    {:else}
      <a href="..">Zum Index</a>
    {/if}
    {#if !!note.next}
      <a href={note.next}>Weiter</a>
    {:else}
      <a href="..">Zum Index</a>
    {/if}
  </nav>
</div>

<style>
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  article {
    line-height: 2em;
    margin: 0 auto;
    max-width: 800px;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }
</style>
