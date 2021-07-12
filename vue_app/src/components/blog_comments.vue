<template>
    <div>
        <h4>Comments</h4>
        <ul class="comment_list">
            <li v-for="item in list" :key="item.id" class="d-flex">
                <div class="user_data">
                    <div class="userpic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png" alt="">
                    </div>
                    <p>{{ item.email }}</p>
                </div>
                <div class="comment">
                    <h5>{{ item.name }}</h5>
                    <p>{{ item.body }}</p>
                </div>
            </li>
        </ul>
        <formComments @add="addComment"></formComments>
    </div>
</template>
<style lang="scss" scoped>
.userpic {
    width: 120px;
    img {
        width: 100%;

    }
}
</style>

<script>
import axios from 'axios';
import formComments from '@/components/form_comments.vue';
export default {
    name: 'blogComments',
    props:['blog_id'],
    components:{
        formComments
    },
    data(){
        return {
            list:[],
        }
    },
    created(){
        axios 
            .get('https://jsonplaceholder.typicode.com/posts/'+ this.blog_id +'/comments')
            .then((resp)=>{
                this.list = resp.data;
            })
    },
    methods: {
        addComment(data){
            this.list.push({
                postId:this.list[0].postId,
                id:this.list.length,
                name:data.subject,
                email:data.email,
                body:data.message
                });
            
        }
    }
}
</script>