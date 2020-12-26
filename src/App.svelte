<script>
  import Tracker from './components/Tracker.svelte'
  import Spinner from './components/Spinner.svelte'

  let home = true;
  let spinner = false;
  let enterToken = false;
  let results = false;

  
</script>

<Tracker />
{#if spinner}
<Spinner />
{/if}