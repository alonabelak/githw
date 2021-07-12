<template>
    <header id="home">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <!-- Change Logo Img Here -->
        <a class="navbar-brand" href="#"><img src="../assets/images/logo.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div class="interactive-menu-button">
            <a href="#">
              <span>Menu</span>
            </a>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <!-- Nav Link -->
              <router-link class="nav-link" to="/">Home.</router-link>
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <router-link class="nav-link" to="/about">About Us.</router-link> 
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <router-link class="nav-link" to="/blog">Blog.</router-link> 
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" data-scroll href="#portfolio">Portfolio.</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-scroll href="#blog">Blog.</a>
            </li> -->
            <li class="nav-item">
              <!-- Nav Link -->
              <router-link class="nav-link" to="/contacts">Contact Us.</router-link>
            </li>
          </ul>
          <div class="contact-btn form-inline my-2 my-lg-0" >
            <!-- Contacgt Us Button -->
              <button @click="logout">Log out</button>
              <button @click="showModal = true">Contact Us2</button>

          </div>
        </div>
      </nav>
    </div>
    <!-- HERO SECTION -->    
    <div class="container-fluid hero" v-if="$route.path==='/'">
      <img src="../assets/images/hero.svg" alt="">
      <div class="container">
        <!-- Hero Title -->
        <h1>The Spirit of<br>Digital Agency.</h1>
        <!-- Hero Title Info -->
        <p>Vestibulum ac diam sit amet quam vehicula elementum<br> amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        <div class="hero-btns">
          <!-- Hero Btn First -->
          <a data-scroll href="#about-us">More About us</a>
          <!-- Hero Btn Second -->
          <a data-scroll href="#contact-us">Get in Touch.</a>
        </div>
      </div>
    </div>
    <vodal :show="show" animation="rotate" @hide="show = false">
      <h3 class="text-center">Callback</h3>
      <form @submit="sendCallback">
      <div class="form-element mb-3">
        <input type="text" class="form-control" placeholder="Name">
      </div>
      <div class="form-element mb-3">
        <input type="text" class="form-control" placeholder="Email">
      </div>
      <div class="form-element">
        <input type="text" class="form-control" placeholder="Phone">
      </div>
      <div class="form-element">
        <textarea class="form-control" placeholder="Message"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn">Send</button>
      </div>
      </form>
    </vodal>
    <modal v-if="showModal" @close="showModal = false" :class="showModal?'opened':''">
      <div slot="header">
        My header title
      </div>
      <div slot="body">
        <form @submit="sendCallback">
      <div class="form-element mb-3">
        <input type="text" class="form-control" placeholder="Name">
      </div>
      <div class="form-element mb-3">
        <input type="text" class="form-control" placeholder="Email">
      </div>
      <div class="form-element">
        <input type="text" class="form-control" placeholder="Phone">
      </div>
      <div class="form-element">
        <textarea class="form-control" placeholder="Message"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="btn">Send</button>
      </div>
      </form>
      </div>
      <div slot="footer"></div>
    </modal>
  </header>
</template>

<style lang="scss">
@import url('../assets/css/modal.scss');

.vodal-dialog {
  height: auto !important;
  top: 50% !important;
  bottom: unset !important;
  transform: translateY(-50%) !important;
}
</style>
<script>
import Vue from 'vue';
import Vodal from 'vodal';
import "vodal/common.css";
import "vodal/rotate.css";
Vue.component(Vodal.name, Vodal);
//use other component
import modal from '@/components/modal';

export default ({
    name: 'siteHeader',
    components: {
      modal
    },
    data() {
      return {
        show: false,
        showModal: false
      }
    },
    methods: {
      sendCallback(e){
        e.preventdefault();
        this.show = false;
      },
      logout(){
        localStorage.removeItem("my_user");
        this.$router.push('/login');
      }
    }

})
</script>
