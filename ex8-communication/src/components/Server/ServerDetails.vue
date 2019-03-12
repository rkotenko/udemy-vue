<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>Id: {{ server.id }}<br>Status: {{ server.status }}</p>
        <button @click="fixStatus">Fix Status</button>
    </div>

</template>

<script>
  import { eventBus } from '../../main.js';

  export default {
    data() {
      return {
        server: null
      }
    },
    created() {
      eventBus.$on('serverClicked', server => {
        this.server = server
      })
    },
    methods: {
      fixStatus() {
        this.server.status = 'Normal';
      }
    }
  }

</script>

<style>

</style>
