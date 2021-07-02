<template>
    <header id="home">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <!-- Change Logo Img Here -->
        <a class="navbar-brand" href="#"><img src="images/logo.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div class="interactive-menu-button">
            <a href="#">
              <span>Menu</span>
            </a>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <!-- Nav Link -->
              <a class="nav-link" data-scroll href="#home">Home.<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <a class="nav-link" data-scroll href="#about-us">About Us.</a>
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <a class="nav-link" data-scroll href="#portfolio">Portfolio.</a>
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <a class="nav-link" data-scroll href="#blog">Blog.</a>
            </li>
            <li class="nav-item">
              <!-- Nav Link -->
              <a class="nav-link" data-scroll href="#contact-us">Contact Us.</a>
            </li>
            <li class="nav-item dropdown">
              <!-- Lang Dropdown Link -->
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- Lang Dropdown Choice -->
                <a class="dropdown-item" href="#">DE </a>
                <!-- Lang Dropdown Choice -->
                <a class="dropdown-item" href="#">ES </a>
              </div>
            </li>
          </ul>
          <form data-scroll href="#contact-us" class="contact-btn form-inline my-2 my-lg-0">
            <!-- Contacgt Us Button -->
            <button>Contact Us</button>
          </form>
        </div>
      </nav>
    </div>
    <!-- HERO SECTION -->    
    <div class="container-fluid hero" v-if="$route.path==='/'">
      <img src="images/hero.svg" alt="">
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
  </header>
</template>

<script>

export default ({
    name: 'siteHeader',
    created() {

    }
})
</script>
