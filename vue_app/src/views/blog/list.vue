<template>
    <div class="blog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5>BLOG STORIES</h5>
                    <h2>Check Our News</h2>
                </div>
            </div>
            <div class="blog_list d-flex flex-wrap">
                <div class="blog-box" v-for="item in cutItems()" :key="item.id">
                    <router-link :to="'blog/'+item.id">
                        <img :src="item.image" :alt="item.title">
                    </router-link>
                    <h3>{{ item.title}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.blog-box {
    max-width: 350px;
    width: 33.3333%;
}
</style>
<script>
import axios from 'axios';
export default {
    name:"blog_list",
    data(){
        return {
            list_item:[],
            limit:21
        }
    },
    created() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((resp)=>{
                this.list_item = resp.data;
            })
    },
    methods: {
        cutItems(){
            let rez = [];
            for(let i=0;i<this.limit;i++){
                this.list_item[i].image = 'https://via.placeholder.com/350/0000FF/FFFFFF/808080/?text=' +this.list_item[i].title.substr(0,25);
                rez.push(this.list_item[i]);  
            }
            return rez;
        }
    }
}
</script>