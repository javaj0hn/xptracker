<script>
import {writable, get} from 'svelte/store'

const formData = writable({
  clan_name: '',
  server: '',
  trackCombat: '',
  trackSkills: '',
  event_name: '',
  members: []
})

async function handleSubmit(event) {
  console.log("Submitted");
  console.log($formData);

  const res = await fetch('http://localhost:8000/osrs/track/s/clan', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    body: JSON.stringify({
      clan_name: $formData.clan_name,
      event_name: $formData.event_name,
      server: $formData.server,
      members: $formData.split('\n')
    })
  })

  const json = await res.json()
  result = JSON.stringify(json)
  console.log(result);

  console.log("Completed");
}
</script>
<div class="container">
  <h1>EXP Tracker</h1>
  <h2>Msg Drunk#0731 on discord for help</h2>
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
      <input type="text" id="clan_name" name="clan_name" bind:value={$formData.clan_name}/>
      <label for="clan_name">Clan Name</label>
    </div>
    <div class="form-group">
      <input type="text" id="event_name" name="event_name" bind:value={$formData.event_name}/>
      <label for="event_name">Event Name</label>
    </div>
  </div>
  <div class="text-input stacked block">
    <em>Members</em>
    <div class="form-group">
      <textarea name="textarea" contentEditable="true" placeholder="One RSN Per Line" id="rsns" bind:value={$formData.members}></textarea>
      <label for="members">RSN(s)</label>
    </div>
  </div>
  <center><button class="button -flower center" id="track_button">Begin Tracking</button>
    <a class="button -flower center" id="token_already">Already have a token?</a>
  </center>
  </form>
</div>