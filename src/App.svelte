<script>
  import { Router, Link, Route } from "svelte-routing";
  import Tracker from './components/Tracker.svelte';
  import Event from './components/Event.svelte';

  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="Event">Event</Link>
  </nav>
  <div>
    <Route path="Event/:id" component="{Event}" />
    <Route path="/"><Tracker /></Route>
  </div>
</Router>