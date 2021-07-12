<template>
    <section id="contact-us" class="contact">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5>CONTACT US</h5>
          <h2>Get in Touch</h2>
        </div>
      </div>
      <form id="contact_form" @submit="validateAndSend">
        <div class="row">
          <div class="col-12 col-lg-6 email">
            <input placeholder="Your email" type="email" id="email" size="30" required v-model="email">
          </div>
          <div class="col-12 col-lg-6 email">
            <input placeholder="Subject" type="subject" id="subject" size="30" required v-model="subject">
          </div>
        </div>
        <div class="row">
          <div class="col-12 message">
            <textarea id="message" name="message" rows="5" cols="1" placeholder="Message here..." v-model="message">></textarea>
          </div>
          <div class="col-12">
            <div class="hero-btns contact-btn">
              <!-- Send Message Btn -->
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
  button[type="submit"]{
    background-color: #FF3946;
    border: 2px solid #FF3946;
    color: #fff;
    padding: 17px 35px;
    font-size: 1.0rem;
    border-radius: 30px;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    &:hover {
      background-color: #fff;
      border: 2px solid #FF3946;
      color: #314584;
      padding: 17px 35px;
      font-size: 1.0rem;
      border-radius: 30px;
    }
}
</style>


<script>
import axios from 'axios';
export default {
   name: "contact",
   data(){
       return {
           email:'',
           subject:'',
           message:'',
           BOT_TOKEN: '1818073939:AAGLY-cIgnSwJdG8hAQYLJfeHcD68S62erE',
           CHAT_ID:'-1001481769250'
       }
   },
   methods: {
     validateAndSend(e){
       e.preventDefault();
       let valid = true;
       //todo validation
       if(valid){
         let text = this.email + ' ' + this.subject + '; ' + this.message;
        axios 
          .get('https://api.telegram.org/bot' + this.BOT_TOKEN + '/sendMessage?chat_id=' + this.CHAT_ID + '&text=' + text)
          .then(()=>{
            this.email = '';
            this.subject = '';
            this.message = '';
          })
       }
     }
   }
}
</script>