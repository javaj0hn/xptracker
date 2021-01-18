<script>
import { onMount } from 'svelte';
import { Router, Link, Route } from "svelte-routing";
import Results from './Results.svelte';
import Header from './Header.svelte';

export let id;
export let eventDetails, mvpDetails, memberDetails;

onMount(async () => {
    console.log(id);
    if (id){
		const res = await fetch(`http://api.mossgiant.xyz/osrs/track/results/` + id);
		var results = await res.json();
		
		eventDetails = results[0]['event_details'];
  	mvpDetails = results[1];
    memberDetails = results[2];
    }
});

async function handleSubmit(event) {
  window.location.href = "http://tracker.mossgiant.xyz/Event/" + id;
}
</script>

<main>
<Header />
{#if eventDetails }
<div class="container" id="form_results">
  <div class="text-input stacked block">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Clan</th>
          <th>Event</th>
          <th>Date</th>
          <th>MVP</th>
          <th>Top Melee</th>
          <th>Top Ranged</th>
          <th>Top Magic</th>
          <th>Top Snarer</th>
          <th>Share</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td id="r_clan_name">{eventDetails['clan_name']}</td>
        <td id="r_event_name">{eventDetails['event_name']}</td>
        <td id="r_date">01/01/2000</td>
        <td id="r_mvp">{mvpDetails['overall_mvp_rsn']}</td>
        <td id="r_melee_mvp">{mvpDetails['strength_mvp_rsn']}</td>
        <td id="r_ranged_mvp">{mvpDetails['ranged_mvp_rsn']}</td>
        <td id="r_magic_mvp">{mvpDetails['magic_mvp_rsn']}</td>
        <td id="r_snare_mvp">{mvpDetails['snare_mvp_rsn']}</td>
        <td>http://cp-rs.com</td>
        </tr>
      </tbody>
    </table>
    <table id="tracker_table" class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>RSN</th>
          <th><img src="http://i.imgur.com/3nYEsXh.gif" /> Overall</th>
          <th><img src="http://i.imgur.com/bIz0RUd.gif" /> Attack</th>
          <th><img src="http://i.imgur.com/lnUDoaf.gif" /> Strength</th>
          <th><img src="http://i.imgur.com/39ETEHl.gif" /> Hitpoints</th>
          <th><img src="http://i.imgur.com/NjqUqhC.gif" /> Ranged</th>
          <th><img src="http://i.imgur.com/bD1GLyq.gif" /> Magic</th>
		  <th><img src="https://oldschool.runescape.wiki/images/b/b9/Snare.png" /> Snares</th>
        </tr>
      </thead>
      <tbody>
      	{#each memberDetails as { rsn, overall_xp, attack_xp, strength_xp, hitpoints_xp, ranged_xp, magic_xp, snare_count }, i}
        <tr>
        <td>{i + 1}</td>
        <td>{rsn}</td>
        <td>{#if overall_xp > 0}<span id='gainPlus'>+</span>{:else}{/if}{overall_xp}</td>
        <td>{#if attack_xp > 0}<span id='gainPlus'>+</span>{:else}{/if}{attack_xp}</td>
        <td>{#if strength_xp > 0}<span id='gainPlus'>+</span>{:else}{/if}{strength_xp}</td>
        <td>{#if hitpoints_xp > 0}<span id='gainPlus'>+</span>{:else}{/if}{hitpoints_xp}</td>
        <td>{#if ranged_xp > 0}<span id='gainPlus'>+</span>{:else}{/if}{ranged_xp}</td>
        <td>{#if magic_xp > 0}<span id='gainPlus'>+</span>{:else}{/if}{magic_xp}</td>
        <td>{#if snare_count > 0}<span id='gainPlus'>+</span>{:else}{/if}{snare_count}</td>
        </tr>
	      {/each}
      </tbody>
    </table>
  </div>
</div>
{:else}
<div class="container" id="form_2">
<form on:submit|preventDefault={handleSubmit}>
  <div class="text-input stacked block">
    <em>Event ID</em>
    <div class="form-group">
      <input type="text" id="event_id_provided" name="event_id_provided" bind:value={id}/>
      <label for="event_id_provided">Event ID</label>
    </div>
  </div>
  <button class="button -flower center" id="end_track">View Event</button>
  </form>
</div>
{/if}
</main>