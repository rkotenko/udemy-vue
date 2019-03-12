<template>
   <div>
     <ServerStatus v-for="server in 5"></ServerStatus>
   </div>
</template>

<script>
import ServerStatus from './ServerStatus';

export default {
  components: {
    ServerStatus
  }
}
</script>

<style>

</style>
