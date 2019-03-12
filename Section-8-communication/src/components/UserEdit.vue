<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';

  export default {
    props: ['age'],
    methods: {
      editAge() {
        this.age = 30;
        eventBus.$emit('ageChanged', this.age);
      }
    }
  }
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
