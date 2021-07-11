<script lang="ts">
  import { setContext } from 'svelte';

  export let note;
  setContext('note', note);
</script>

<div>
  <div class="content">
    <nav>
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
    <nav>
      {#if !!note.next}
        <a href={note.next}>Weiter</a>
      {:else}
        <span>Weiter</span>
      {/if}
    </nav>
  </div>

  <nav class="index">
    <a href="..">Zum Index</a>
  </nav>
</div>

<style>
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }

  .content {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  }

  .index {
    justify-content: center;
    display: flex;
  }

  a {
    padding: 25px;
    text-align: center;
  }

  article {
    line-height: 2em;
    max-width: 800px;
  }

  .author {
    font-size: smaller;
    margin-top: 48px;
    opacity: 50%;
    text-align: right;
  }

  span {
    opacity: 20%;
  }
</style>
