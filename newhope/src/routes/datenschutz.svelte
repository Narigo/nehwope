<script lang="ts">
  import { assets } from '$app/paths';

  import BaseLayout from '../components/base-layout.svelte';
</script>

<svelte:head><title>NewHope - Datenschutz</title></svelte:head>

<BaseLayout>
  <h1 slot="header">Datenschutz</h1>
  <section>
    <h2>Gesammelte persönliche Daten</h2>
    <p>
      Wir sammeln auf dieser Webseite keine persönlichen Daten, loggen nicht selbst und speichern
      keine Cookies im Browser.
    </p>
    <h2>GitHub Pages</h2>
    <p>
      Diese Seite ist auf GitHub Pages gehostet. Das bedeutet, dass GitHub persönliche Informationen
      der Besucher sammeln kann, worauf wir keinen Einfluss haben. Laut Ihrer <a
        href="https://docs.github.com/en/github/site-policy/github-privacy-statement#additional-services"
        >Datenschutzerklärung</a
      > loggen Sie die IP-Adressen der Besucher, um rechtliche Anforderungen erfüllen zu können und die
      Sicherheit und Integrität der Webseite und ihres Services zu wahren.
    </p>
  </section>
</BaseLayout>

<style>
  section {
    padding: 2rem;
  }
</style>
