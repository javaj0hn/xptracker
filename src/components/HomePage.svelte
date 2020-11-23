<div class="container" id="form_loader">
  <h1>EXP Tracker</h1>
  <h2>Msg Drunk#0731 on discord for help</h2>
  <center>
    <div id="status_msg">Loading...</div>
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </center>
</div>
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
        </tr>
      </thead>
      <tbody>
        <td id="r_clan_name">Corrupt Pures</td>
        <td id="r_event_name">F2P Prep vs. Fi</td>
        <td id="r_date">01/01/2000</td>
        <td id="r_mvp">Drunkin R2h</td>
        <td id="r_melee_mvp">Zezima</td>
        <td id="r_ranged_mvp">Toxine</td>
        <td id="r_magic_mvp">Chain</td>
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
      </tbody>
    </table>
  </div>
</div>

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
      <input type="text" id="event_id_provided" name="event_id_provided" />
      <label for="event_id_provided">Event ID</label>
    </div>
  </div>
  <button class="button -flower center" id="end_track">End Tracking</button>
</div>
<div class="container" id="form_1">
  <h1>EXP Tracker</h1>
  <h2>Msg Drunk#0731 on discord for help</h2>
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
      <input type="text" id="clan_name" name="clan_name" />
      <label for="clan_name">Clan Name</label>
    </div>
    <div class="form-group">
      <input type="text" id="event_name" name="event_name" />
      <label for="event_name">Event Name</label>
    </div>
  </div>
  <div class="text-input stacked block">
    <em>Members</em>
    <div class="form-group">
      <textarea name="textarea" contentEditable="true" placeholder="One RSN Per Line" id="rsns"></textarea>
      <label for="members">RSN(s)</label>
    </div>
  </div>
  <center><button class="button -flower center" id="track_button">Begin Tracking</button>
    <a class="button -flower center" id="token_already">Already have a token?</a>
  </center>
</div>