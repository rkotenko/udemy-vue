<template>
    <div class="container">
        <AppHeader></AppHeader>
        <hr>
        <div class="row">
            <Servers></Servers>
            <ServerDetails></ServerDetails>
        </div>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>
  import AppHeader from './AppHeader';
  import Servers from './Servers';
  import ServerDetails from './ServerDetails';
  import Footer from './Footer';

  export default {
    components: {
      AppHeader,
      Servers,
      ServerDetails,
      Footer
    }
  }
</script>

<style>

</style>
