<header>
  <slot name="header">this is the default header</slot>
</header>
<main>
  <slot />
</main>
<footer>
  <slot name="footer">default footer</slot>
</footer>

<style>
  header {
    display: flex;
    align-items: center;
    height: 50vh;
    margin: 0;
    padding: 0;
  }
  main {
    flex: 1;
  }
  footer {
    padding: 2em;
  }
</style>
