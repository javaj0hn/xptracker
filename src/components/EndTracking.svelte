<script>
import { clanData, token, results, eventDetails, mvpDetails, memberDetails } from './stores.js';

async function handleSubmit(event) {
  console.log("Submitted End Tracking");
  console.log($token);

  const res = await fetch('http://localhost:8000/osrs/track/e/clan', {
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

  console.log(result);

  eventDetails.set(result[0]['event_details']);
  mvpDetails.set(result[1]);
  memberDetails.set(result[2]);

  console.log($memberDetails);
  //console.log($eventDetails);
  
  console.log("Completed");
}

</script>
<form on:submit|preventDefault={handleSubmit}>
<div class="container" id="form_2">
  <h1>End Tracking</h1>
  <h2>Msg Drunk#0731 on discord for help</h2>
  <center>
    <h4 id="endMsg">Save this ID or leave this page open during your event so you can end tracking after your event has
      completed.</h4>
  </center>
  <div class="text-input stacked block">
    <em>End Tracking</em>
    <div class="form-group">
      <input type="text" id="event_id_provided" name="event_id_provided" bind:value={$token}/>
      <label for="event_id_provided">Event ID</label>
    </div>
  </div>
  <button class="button -flower center" id="end_track">End Tracking</button>
</div>
</form>