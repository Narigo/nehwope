<script lang="ts">
  import { setContext } from 'svelte';

  export let note;
  setContext('note', note);
</script>

<div>
  <nav class="previous">
    {#if !!note.previous}
      <a href={note.previous}>Zurück</a>
    {:else}
      <span>Zurück</span>
    {/if}
  </nav>

  <article>
    <slot />
    {#if note.author}<div class="author">&dashv;&nbsp;{note.author}</div>{/if}
  </article>

  <nav class="next">
    {#if !!note.next}
      <a href={note.next}>Weiter</a>
    {:else}
      <span>Weiter</span>
    {/if}
  </nav>

  <nav class="index">
    <a href="..">Zum Index</a>
  </nav>
</div>

<style>
  div {
    display: grid;
    grid-template:
      'prev content next' minmax(max-content, 100%)
      'prev index next' auto / 1fr minmax(auto, 800px) 1fr;
    flex: 1;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }

  .previous {
    grid-area: prev;
  }

  span {
    opacity: 20%;
  }

  .next {
    grid-area: next;
    text-align: right;
  }

  article {
    grid-area: content;
    line-height: 2em;
  }

  .index {
    grid-area: index;
    text-align: center;
  }

  a {
    padding: 25px;
  }

  .author {
    font-size: smaller;
    margin-top: 48px;
    opacity: 50%;
    text-align: right;
  }
</style>
