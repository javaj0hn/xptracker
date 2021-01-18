<script>
  import Header from './Header.svelte';
  import { clanData, token, results, eventDetails, mvpDetails, memberDetails } from './stores.js';

  async function endTrackClick(event) {
  console.log("Submitted End Tracking");
  console.log($token);

  const res = await fetch('http://api.mossgiant.xyz/osrs/track/e/clan', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({
      token: $token,
    })
  })

  const json = await res.json()
  //var result = JSON.stringify(json);
  var result = json;

  eventDetails.set(result[0]['event_details']);
  mvpDetails.set(result[1]);
  memberDetails.set(result[2]);

  window.location.href = "http://tracker.mossgiant.xyz/Event/" + $token;
}

</script>
<Header />
<div class="container" id="form_2">
<form on:submit|preventDefault={endTrackClick}>
  <div class="text-input stacked block">
    <em>End Tracking</em>
    <div class="form-group">
      <input type="text" id="event_id_provided" name="event_id_provided" bind:value={$token}/>
      <label for="event_id_provided">Event ID</label>
    </div>
  </div>
  <button class="button -flower center" id="end_track">End Tracking</button>
  </form>
</div>