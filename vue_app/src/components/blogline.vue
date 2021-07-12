<template>
    <section id="blog" class="blog">
    <div class="container-fluid">
      <div class="blog-aside">
        <img src="../assets/images/aside4.svg" alt="">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h5>BLOG STORIES</h5>
            <h2>Check Our News</h2>
          </div>
        </div>
        <div id="blog-drag" class="row blog-slider">
            <VueSlickCarousel v-bind="settings">
                <div class="col-12 col-lg-4 blog-box" v-for="item in list_items" :key="item.title">
                    <!-- Blog Post Title -->
                    <h6>{{ item.title }}</h6>
                    <!-- Blog Post Date -->
                    <p>{{ item.date}}</p>
                    <!-- Blog Post -->
                    <p>{{ item.text }}</p>
                </div>
            </VueSlickCarousel>
        </div>
        <!-- Blog Button to Show More or Less on Mobile&Tablet View  -->
        <button class="hide-me" id="blog-btn">Show More Stories</button>
      </div>
    </div>
  </section>  
</template>

<script>
import axios from 'axios';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default ({
    name:'blogline',
    components: { 
        VueSlickCarousel 
        },
    data(){
        return {
            list_items: [],
            settings: {
                arrows:true,
                dots:true,
                slidesToShow:3

            }
        }
    },
    created(){
        axios
            .get('data/blog.json')
            .then((resp)=>{
                this.list_items = resp.data;
            })
    }
})
</script>
