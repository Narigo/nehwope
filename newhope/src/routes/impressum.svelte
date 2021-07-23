<script lang="ts">
  import { assets } from '$app/paths';

  import BaseLayout from '../components/base-layout.svelte';
</script>

<svelte:head><title>NewHope - Impressum</title></svelte:head>

<BaseLayout>
  <h1 slot="header">Impressum</h1>
  <section>
    <h2>Inhaltlich verantwortlich</h2>
    <p>Jörn Bernhardt</p>
    <p>
      Goethestr. 46<br />
      84032 Landshut
    </p>
    <p>joern.bernhardt+newhope-website (at) googlemail (dot) com</p>
    <h2>Lizenzen und Danksagungen</h2>
    <h3>Verwendete Open-Source Tools und Bibliotheken</h3>
    <p>
      Siehe <a href="https://github.com/Narigo/newhope">Quellcode auf GitHub</a> für eine genaue Auflistung
      aller verwendeten Bibliotheken zum Erstellen dieser Seite.
    </p>
    <h3>Schriftarten / Fonts</h3>
    <p>
      In <a href="{assets}/fonts/font-licenses.txt">font-licenses.txt</a> ist eine genaue Auflistung
      der verwendeten Schriftarten auf dieser Seite.
    </p>
    <h3>Bilder</h3>
  </section>
</BaseLayout>

<style>
  section {
    padding: 2rem;
  }
</style>
