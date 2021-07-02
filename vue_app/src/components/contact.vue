<template>
    <section id="contact-us" class="contact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5>CONTACT US</h5>
          <h2>Get in Touch</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6 email">
          <input placeholder="Your email" type="email" id="email" size="30" required v-model="email">
        </div>
        <div class="col-12 col-lg-6 email">
          <input placeholder="Subject" type="subject" id="subject" size="30" required>
        </div>
      </div>
      <form  id="contact_form" action="">
      <div class="row">
        <div class="col-12 message">
          <textarea id="message" name="message" rows="5" cols="1" placeholder="Message here..." v-model="message">></textarea>
        </div>
        <div class="col-12">
          <div class="hero-btns contact-btn">
            <!-- Send Message Btn -->
            <a href="#">Send Message</a>
          </div>
        </div>
      </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
   name: "contact",
   data(){
       return {
           email:'',
           subject:'',
           message:''
       }
   }
}
</script>