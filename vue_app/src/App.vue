<template>
  <div id="app">
    <siteHeader></siteHeader>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </div> -->
    <router-view/>
    <siteFooter></siteFooter>
  </div>
</template>

<style>
  @import url('assets/css/bootstrap.min.css');
  @import url('assets/css/main.css');
</style>
<script>
  import siteHeader from '@/components/header.vue';
  import siteFooter from '@/components/footer.vue';
export default ({
 components: {
   siteHeader,
   siteFooter
 }
})
</script>


