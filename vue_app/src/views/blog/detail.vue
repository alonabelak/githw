<template>
    <div class="blog blog_detail">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>{{ item.title }}</h2>
                    <hr>
                   <p>{{ item.body}}</p>
                </div>
            </div>
            <div class="text-center">
                <router-link to="/blog" class="btn">To blog</router-link>
            </div>


            <blogComments :blog_id="id"></blogComments>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import blogComments from '@/components/blog_comments.vue'
export default {
    name:"blog_detail",
    components: {
        blogComments
    },
    data(){
        return {
            id:this.$route.params.id,
            item:{}
        }
    },
    mounted(){
        axios 
            .get('https://jsonplaceholder.typicode.com/posts/'+this.id)
            .then((resp)=>{
                this.item = resp.data;
            });
        window.scrollTo(0, 0);    
    }
}
</script>