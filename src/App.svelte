<script>
  import { Router, Link, Route } from "svelte-routing";
  import Tracker from './components/Tracker.svelte';
  import Event from './components/Event.svelte';
  import AltEndTracking from './components/AltEndTracking.svelte';

  export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="Event/:id" component="{Event}" />
    <Route path="Event" component="{Event}" />
    <Route path="End" component="{AltEndTracking}" />
    <Route path="/"><Tracker /></Route>
  </div>
</Router>