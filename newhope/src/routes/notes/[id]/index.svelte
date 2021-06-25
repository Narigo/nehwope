<script lang="ts">
  import { page } from '$app/stores';

  const { id } = $page.params;
  export let notes;
</script>

<div>hello from [id]={id}</div>
<div>{notes}</div>
