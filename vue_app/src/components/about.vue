<template>
    <!-- ABOUT SECTION -->
  <section class="about">
    <div class="container">
      <services></services>
      <about></about>

    </div>
  </section>
</template>
<script>
import Services from '../components/services.vue';
import About from '../components/about.vue'
export default ({
  components: {
      Services,
      About,
  }
})
</script>
