<template>
  <div class="about">
    <services/>
    <about/>
  </div>
</template>

<script>
import Services from '@/components/services';
import About from '@/components/about';
export default ({
  components: {
    Services,
    About
  }
})
</script>
