<script lang="ts" setup>
import CommentComponent from './CommentComponent.vue';

const props = defineProps({
  post: {
    type: Object,
    required: false,
  },
});
let { post } = props;

const toggleEditPost = ref(false)
const newComment = ref({
  authorId:"93021532",
  postId:post?.id,
  message:""
})
const newMessage = ref({
  description:post?.description
})
async function editPost(){
    try{
      const response = await $fetch(`http://130.61.148.159:80/post/${post?.id}`,{
        method:"PATCH",
        body:newMessage.value
      })
    }catch(error){
      console.log(error)
    }

    window.location.reload()
}
async function deletePost(){
    try{
      const response = await $fetch(`http://130.61.148.159:80/post/${post?.id}`,{
        method:"DELETE",
      })
    }catch(error){
      console.log(error)
    }

    window.location.reload()
}
async function createComment(){
  try{
      const response = await $fetch('http://130.61.148.159:80/comment',{
        method:"POST",
        body: newComment.value
      })
    }catch(error){
      console.log(error)
    }
}

</script>

<template>
    <div class="w-1/3 bg-white/70 shadow-xl mt-6 rounded-xl p-4">
        <div class="w-full flex justify-between">
            <p >{{ post?.createdAt }}</p>
            <button class="px-2 hover:bg-green-200 rounded-lg" @click="toggleEditPost = !toggleEditPost">Edit</button>
            <button class="px-2 hover:bg-redd-500 rounded-lg" @click="deletePost">X</button>
        </div>
        <p  v-if="toggleEditPost == false">{{post?.description}}</p>
        <input v-else type="text" v-model="newMessage">
        <button @click="editPost" v-if="toggleEditPost == true">zapisz</button>
        <div>
          <form @submit="createComment">
          <input type="text" v-model="newComment.message">
            <button :disabled="newComment.message.length < 1">Wyślij</button>
          </form>
        </div>
        <div class="flex flex-col gap-3 mt-6">
          <CommentComponent v-for="comment in post?.comments" :comment="comment"/>
        </div>
    </div>
</template>