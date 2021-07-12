<template>
  <div class="home">
    <!-- <services/> -->
    <!-- PORTFOLIO SECTION -->
  <section id="portfolio" class="portfolio">
    <div class="container-fluid">
      <div class="portfolio-aside">
        <img src="images/aside3.svg" alt="">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>See some of our<br>Creative work.</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 work-box">
            <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  <!-- Replace Patch to Image Under -->
                  <img src="../assets/images/1.png" class="photobox__preview" alt="Preview">
                  <!-- Replace Image Title Under -->
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
          </div>
          <div class="col-12 col-lg-4 work-box">
            <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  <!-- Replace Patch to Image Under -->
                  <img src="../assets/images/2.png" class="photobox__preview" alt="Preview">
                  <!-- Replace Image Title Under -->
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
          </div>
          <div class="col-12 col-lg-4 work-box">
            <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  <!-- Replace Patch to Image Under -->
                  <img src="../assets/images/3.png" class="photobox__preview" alt="Preview">
                  <!-- Replace Image Title Under -->
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4 work-box">
            <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  <!-- Replace Patch to Image Under -->
                  <img src="../assets/images/4.png" class="photobox__preview" alt="Preview">
                  <!-- Replace Image Title Under -->
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
          </div>
          <div class="col-12 col-lg-4 work-box">
            <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  <!-- Replace Patch to Image Under -->
                  <img src="../assets/images/5.png" class="photobox__preview" alt="Preview">
                  <!-- Replace Image Title Under -->
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
          </div>
          <div class="col-12 col-lg-4 work-box">
            <div class="photobox photobox_type10">
                <div class="photobox__previewbox">
                  <!-- Replace Patch to Image Under -->
                  <img src="../assets/images/6.png" class="photobox__preview" alt="Preview">
                  <!-- Replace Image Title Under -->
                  <span class="photobox__label">Awesome Work</span>
                </div>
              </div>
          </div>
        </div>
        <!-- Hidden Images From Portfolio -->
        <div id="hiden-gallery" class="hide">
          <div class="row">
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <!-- Replace Patch to Image Under -->
                    <img src="../assets/images/5.png" class="photobox__preview" alt="Preview">
                    <!-- Replace Image Title Under -->
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <!-- Replace Patch to Image Under -->
                    <img src="../assets/images/3.png" class="photobox__preview" alt="Preview">
                    <!-- Replace Image Title Under -->
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 work-box">
              <div class="photobox photobox_type10">
                  <div class="photobox__previewbox">
                    <!-- Replace Patch to Image Under -->
                    <img src="../assets/images/1.png" class="photobox__preview" alt="Preview">
                    <!-- Replace Image Title Under -->
                    <span class="photobox__label">Awesome Work</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 more-btn">
            <!-- Show Me More/Less Button -->
            <a class="more-btn-inside">Show More.</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- BLOG SECTION -->
  <blogline/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import blogline from '@/components/blogline.vue';

export default {
  name: 'Home',
  components: {
   blogline
  }
}
</script>
