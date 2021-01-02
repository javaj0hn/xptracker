<script>
import {writable, get} from 'svelte/store'
</script>
<div class="container" id="form_loader">
  <center>
    <div id="status_msg">Loading...</div>
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </center>
</div>