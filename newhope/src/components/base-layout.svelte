<script lang="ts">
  import Footer from '../components/footer.svelte';
  import Logo from './logo.svelte';
</script>

<slot name="full-header">
  <header>
    <slot name="header"><Logo /></slot>
  </header>
</slot>
<main>
  <slot />
</main>
<slot name="full-footer">
  <footer>
    <slot name="footer"><Footer /></slot>
  </footer>
</slot>

<style>
  header {
    align-items: center;
    background-color: var(--primary-color);
    display: flex;
    height: 50vh;
    margin: 0;
    padding: 0 2rem;
  }
  main {
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  footer {
    margin: 0;
    padding: 0;
  }
</style>
