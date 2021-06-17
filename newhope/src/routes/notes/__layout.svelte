<script lang="ts">
  import BaseLayout from '../../components/base-layout.svelte';
</script>

<BaseLayout>
  <h1 slot="full-header">notes of newhope</h1>
  <section>
    <slot />
  </section>
</BaseLayout>

<svelte:head><title>Notes of NewHope</title></svelte:head>

<style>
  h1 {
    background-color: var(--primary-color);
    margin: 0;
    padding: 0 2rem;
  }
  section {
    box-shadow: inset 0 30px 20px -10px var(--primary-color),
      inset 0 -30px 20px -10px var(--primary-color);
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 2rem;
  }
</style>
