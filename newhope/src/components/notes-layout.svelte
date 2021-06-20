<script lang="ts">
  import { setContext } from 'svelte';

  export let note;
  setContext('note', note);
</script>

<svelte:head>
  {#if note.title}
    <title>{note.title} - Notes of NewHope</title>
  {/if}
</svelte:head>

<div>
  <article>
    <slot />
    {#if note.author}<div class="author">&dashv;&nbsp;{note.author}</div>{/if}
  </article>

  <nav>
    {#if !!note.previous}
      <a href={note.previous}>Zurück</a>
    {:else}
      <span>Zurück</span>
    {/if}
    <a href="..">Zum Index</a>
    {#if !!note.next}
      <a href={note.next}>Weiter</a>
    {:else}
      <span>Weiter</span>
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

  .author {
    font-size: smaller;
    margin-top: 48px;
    opacity: 50%;
    text-align: right;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }

  span {
    opacity: 20%;
  }
</style>
