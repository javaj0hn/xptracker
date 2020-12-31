<script>
import { results, eventDetails, mvpDetails, memberDetails } from './stores.js';
import { writable } from 'svelte/store';
</script>

<div class="container" id="form_results">
  <h1>Tracker Results</h1>
  <h2>Msg Drunk#0731 on discord for help</h2>
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
        </tr>
      </thead>
      <tbody>
      <tr>
        <td id="r_clan_name">{$eventDetails['clan_name']}</td>
        <td id="r_event_name">{$eventDetails['event_name']}</td>
        <td id="r_date">01/01/2000</td>
        <td id="r_mvp">{$mvpDetails['overall_mvp_rsn']}</td>
        <td id="r_melee_mvp">{$mvpDetails['strength_mvp_rsn']}</td>
        <td id="r_ranged_mvp">{$mvpDetails['ranged_mvp_rsn']}</td>
        <td id="r_magic_mvp">{$mvpDetails['magic_mvp_rsn']}</td>
        <td id="r_snare_mvp">{$mvpDetails['snare_mvp_rsn']}</td>
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
          <th><img src="https://oldschool.runescape.wiki/images/b/b7/Defence_icon.png" /> Defence</th>
          <th><img src="http://i.imgur.com/39ETEHl.gif" /> Hitpoints</th>
          <th><img src="http://i.imgur.com/NjqUqhC.gif" /> Ranged</th>
          <th><img src="http://i.imgur.com/bD1GLyq.gif" /> Magic</th>
        </tr>
      </thead>
      <tbody>
      	{#each $memberDetails as { rsn, overall_xp, attack_xp, strength_xp, defence_xp, hitpoints_xp, ranged_xp, magic_xp }}
        <tr>
        <td></td>
        <td>{rsn}</td>
        <td>{overall_xp}</td>
        <td>{attack_xp}</td>
        <td>{strength_xp}</td>
        <td>{defence_xp}</td>
        <td>{hitpoints_xp}</td>
        <td>{ranged_xp}</td>
        <td>{magic_xp}</td>
        </tr>
	      {/each}
      </tbody>
    </table>
  </div>
</div>