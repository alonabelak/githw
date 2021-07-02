<template>
    <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5>DOOB</h5>
          <h3>CREATIVITY ABOVE</h3>
          <ul class="contact-nav">
            <li><a data-scroll href="#home">Home.</a></li>
            <li><a data-scroll href="#about-us">About Us.</a></li>
            <li><a data-scroll href="#portfolio">Portfolio.</a></li>
            <li><a data-scroll href="#blog">Blog.</a></li>
            <li><a data-scroll href="#contact-us">Contact.</a></li>
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
