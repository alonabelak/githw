<template>
  <div id="app">
    <siteHeader/>

    <router-view/>

    <siteFooter/>
  </div>
</template>

<style>
  @import url('../assets/css/bootstrap.min.css');
  @import url('../assets/css/main.css');
</style>
<script>
  import siteHeader from '@/components/header.vue';
  import siteFooter from '@/components/footer.vue';
  export default ({
  name:'default',
  components: {
   siteHeader,
   siteFooter
 }
})
</script>