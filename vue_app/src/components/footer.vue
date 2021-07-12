<template>
    <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5>DOOB</h5>
          <h3>CREATIVITY ABOVE</h3>
          <ul class="contact-nav">
            <li>
              <router-link to="/home">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About us</router-link>
            </li>
            <li>
              <router-link to="/contacts">Contact us</router-link>
            </li>
          </ul>
          <h6>© 2019 - Doob,All Right Reserved</h6>
          <ul class="social">
            <li v-for="soc in soc_list" :key="soc.title"><a :href="soc.link" target="_blank" rel="noopener nofollow" :title="soc.title"><i :class="soc.icon"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>

export default ({
    name: "siteFooter",
    data(){
        return {
            soc_list:[
                {
                    title: "Facebook",
                    icon: "icofont-facebook",
                    link: "https://facebook.com"
                },
                {
                    title: "Twitter",
                    icon: "icofont-twitter",
                    link: "https://twitter.com"
                },
                {
                    title: "Dribbble",
                    icon: "icofont-dribbble",
                    link: "https://dribbble.com"
                },
                {
                  title: "LinkedIn",
                    icon: "icofont-linkedin",
                    link: "https://linkedin.com"
                }
            ]
        }
    }
})
</script>
<style >
@import url('../assets/css/common/footer.css');
@import url('../assets/css/icofont.min.css');
</style>
