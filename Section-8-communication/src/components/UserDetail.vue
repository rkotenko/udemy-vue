<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';

  export default {
    props: ['age', 'name', 'resetName'],
    created() {
      eventBus.$on('ageChanged', (age) => {
        this.age = age;
      })
    }
  }
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
