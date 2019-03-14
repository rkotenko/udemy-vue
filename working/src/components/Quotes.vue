<template>
  <div>
    <h1>
      <slot name="title"></slot>
    </h1>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  div {
    border: 1px solid black;
    margin: 30px auto;
    box-shadow: 1px 1px 3px 3px;
    text-align: center;
    padding: 20px;
  }
</style>