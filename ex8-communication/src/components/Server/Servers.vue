<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <Server v-for="server in servers" :server="server"></Server>
        </ul>
    </div>
</template>

<script>
  import { eventBus } from '../../main.js';
  import Server from './Server.vue';

  // create array of server objects to use in list above
  // clicking a server loads the details into serverDetails
  export default {
    data() {
      return {
        servers: [
          { id: 1, status: 'Normal'},
          { id: 2, status: 'Normal'},
          { id: 3, status: 'Critical'},
          { id: 4, status: 'Normal'}
        ]
      }
    },
    components: {
      Server
    }
  }
</script>

<style>

</style>
