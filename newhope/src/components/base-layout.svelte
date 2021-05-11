<slot name="full-header">
  <header>
    <slot name="header">this is the default header</slot>
  </header>
</slot>
<main>
  <slot />
</main>
<slot name="full-footer">
  <footer>
    <slot name="footer">inner footer</slot>
  </footer>
</slot>

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
