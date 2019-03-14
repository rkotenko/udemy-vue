<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <Quotes>
                <h1 slot="title">Title</h1>
                <p slot="content">{{ quote }}</p>
              </Quotes>  
            </div>
        </div>
    </div>
</template>

<script>
  import Quotes from './components/Quotes.vue';

  export default {
    data() {
      return {
        quote: "Inspirational!"
      }
    },
    components: {
      Quotes
    }    
  }
</script>

<style>
</style>
