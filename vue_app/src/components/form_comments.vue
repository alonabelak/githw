<template>
    <div>
        <hr>
        <h3 class="text-center">Add comment</h3>
        <form id="contact_form" @submit="addComment">
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
                <button type="submit">Add comment</button>
                </div>
            </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
   name:"formComments",
   data(){
       return {
            email:'',
            subject:'',
            message:''
       }
   },
   methods: {
       addComment(e){
            e.preventDefault();
            let valid = true;
            if (valid){
                this.$emit('add', {email:this.email, subject:this.subject, message:this.message});
                this.email = '';
                this.subject = '';
                this.message = '';
            }
        }
   }
}
</script>