<script>
  import { onMount, afterUpdate } from 'svelte';
  import Spinner from './Spinner.svelte';
  import EndTracking from './EndTracking.svelte';
  import Results from './Results.svelte';
  import Header from './Header.svelte';

  import { clanData, token, results, eventDetails, mvpDetails, memberDetails } from './stores.js';
  
  let component;

    onMount(() => {
      component = "tracker";
  });

async function handleSubmit(event) {
  console.log("Submitted");
  console.log($clanData);

  component = "spinner";

  const res = await fetch('http://api.mossgiant.xyz/osrs/track/s/clan', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({
      clan_name: $clanData.clan_name,
      event_name: $clanData.event_name,
      server: $clanData.server,
      members: $clanData.members.split('\n')
    })
  })

  const json = await res.json()
  //var result = JSON.stringify(json);
  var result = json;

  console.log(result.token);

  token.set(result.token);

  component = "end";

  console.log("Completed");
}
async function endTrackClick(event) {
  console.log("Submitted End Tracking");
  console.log($token);

  component = "spinner";

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

  console.log(result);

  eventDetails.set(result[0]['event_details']);
  mvpDetails.set(result[1]);
  memberDetails.set(result[2]);

  console.log($memberDetails);
  //console.log($eventDetails);

  component = "results";
  
  console.log("Completed");
}
</script>
<Header />
{#if component === "spinner"}
<Spinner />
{/if}
{#if component === "end"}
<form on:submit|preventDefault={endTrackClick}>
<div class="container" id="form_2">
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
{/if}
{#if component === "results"}
<Results />
{/if}
{#if component === "tracker"}
<div id="home" class="container">
  <form on:submit|preventDefault={handleSubmit}>
  <div class="checkbox block">
    <em>Options</em>
    <input type="checkbox" id="checkbox1">
    <label for="checkbox1">Track Melee</label>
    <input type="checkbox" id="checkbox2">
    <label for="checkbox2">Track Ranged</label>
    <input type="checkbox" id="checkbox3">
    <label for="checkbox3">Track Magic</label>
    <input type="checkbox" id="checkbox4">
    <label for="checkbox4">Track Skills</label>
  </div>
  <div class="radio block">
    <em>Select Server</em>
    <input type="radio" id="radio1" name="radio-group">
    <label for="radio1">F2P</label>
    <input type="radio" id="radio2" name="radio-group">
    <label for="radio2">P2P</label>
  </div>
  <div class="text-input stacked block">
    <em>Clan Information</em>
    <div class="form-group">
      <input type="text" id="clan_name" name="clan_name" bind:value={$clanData.clan_name}/>
      <label for="clan_name">Clan Name</label>
    </div>
    <div class="form-group">
      <input type="text" id="event_name" name="event_name" bind:value={$clanData.event_name}/>
      <label for="event_name">Event Name</label>
    </div>
  </div>
  <div class="text-input stacked block">
    <em>Members</em>
    <div class="form-group">
      <textarea name="textarea" contentEditable="true" placeholder="One RSN Per Line" id="rsns" bind:value={$clanData.members}></textarea>
      <label for="members">RSN(s)</label>
    </div>
  </div>
  <center><button class="button -flower center" id="track_button">Begin Tracking</button>
  </center>
  </form>
</div>
{/if}