<template>
    <div>
        <h2>Contact Us</h2>
        <contact/>
    </div>
</template>
<script>
import contact from '../components/contact.vue'
export default {
  components: { contact },
    setup() {
        contact
    },
}
</script>