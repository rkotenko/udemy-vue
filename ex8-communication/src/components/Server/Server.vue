<template>
  <li @click="loadDetails" class="list-group-item">                    
    <span>
      Server #{{ server.id }}
    </span>
    
  </li>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
  props: ['server'],
  methods: {
    loadDetails() {
      eventBus.$emit('serverClicked', this.server);
    },
    
  }
}
</script>

<style scoped>
  li:hover {
    cursor: pointer;
  }
</style>
