<script lang="ts">
  import { assets } from '$app/paths';

  import { setContext } from 'svelte';

  export let note;
  setContext('note', note);
</script>

<div>
  <nav class="previous">
    {#if !!note.previous}
      <a href={note.previous}><img src={`${assets}/images/previous.svg`} alt="Zurück" /></a>
    {:else}
      <span><img src={`${assets}/images/previous.svg`} alt="Zurück (bereits am Anfang)" /></span>
    {/if}
  </nav>

  <article>
    <slot />
    {#if note.author}<div class="author">&dashv;&nbsp;{note.author}</div>{/if}
  </article>

  <nav class="next">
    {#if !!note.next}
      <a href={note.next}><img src={`${assets}/images/next.svg`} alt="Weiter" /></a>
    {:else}
      <span><img src={`${assets}/images/next.svg`} alt="Weiter (bereits am Ende)" /></span>
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

  nav {
    height: 100%;
    width: 100%;
  }

  .previous {
    grid-area: prev;
  }

  span {
    display: block;
    opacity: 20%;
    padding: 25px;
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
    display: block;
    padding: 25px;
    text-align: center;
    vertical-align: middle;
    height: calc(100% - 50px);
    width: calc(100% - 50px);
  }

  .author {
    font-size: smaller;
    margin-top: 48px;
    opacity: 50%;
    text-align: right;
  }
</style>
