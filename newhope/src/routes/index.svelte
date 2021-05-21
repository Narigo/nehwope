<script lang="ts">
  import BaseLayout from '../components/base-layout.svelte';
  import Logo from '../components/logo.svelte';
</script>

<BaseLayout>
  <Logo slot="header" />
  <section>
    <h2>Willkommen in der Welt NewHopes!</h2>
    <p>Tretet ein und seht Euch um. Euer Fürstentum erwartet Euch.</p>
  </section>
</BaseLayout>

<style>
  section {
    padding: 2rem;
  }
</style>
