<script lang="ts" setup>
import CommentComponent from "./CommentComponent.vue";

const props = defineProps({
  post: {
    type: Object,
    required: false,
  },
});
let { post } = props;

const toggleEditPost = ref(false);
const showAllComments = ref(false)
const ammountOfComments = ref(1)

const newComment = ref({
  authorId: "39605908",
  postId: post?.id,
  message: "",
});
const newMessage = ref({
  description: post?.description,
});
async function editPost() {
  try {
    const response = await $fetch(`http://130.61.148.159:80/post/${post?.id}`, {
      method: "PATCH",
      body: newMessage.value,
    });
  } catch (error) {
    console.log(error);
  }

  window.location.reload();
}
async function deletePost() {
  try {
    const response = await $fetch(`http://130.61.148.159:80/post/${post?.id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }

  window.location.reload();
}
async function createComment() {
  try {
    const response = await $fetch("http://130.61.148.159:80/comment", {
      method: "POST",
      body: newComment.value,
    });
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="w-1/3 bg-white/70 shadow-xl mt-6 rounded-xl p-4">
    <div class="space-y-3">
      <div class="w-full flex justify-between">
        <p>{{ post?.createdAt }}</p>
        <button
          class="px-2 hover:bg-green-200 rounded-lg"
          @click="toggleEditPost = !toggleEditPost"
        >
          Edit
        </button>
        <button class="px-2 hover:bg-redd-500 rounded-lg" @click="deletePost">
          X
        </button>
      </div>
      <p
        v-if="toggleEditPost == false"
        class="px-4 py-2 bg-black/20 rounded-lg shadow-md"
      >
        {{ post?.description }}
      </p>
      <input v-else type="text" v-model="newMessage" />
      <button @click="editPost" v-if="toggleEditPost == true">zapisz</button>
    </div>

    <div class="w-full flex flex-col gap-3 mt-4">
      <h1 class="w-full flex justify-center">Komentarze</h1>
      <div>
        <form @submit.prevent="createComment">
          <input type="text" v-model="newComment.message" />
          <button :disabled="newComment.message.length < 1">Wyślij</button>
        </form>
      </div>
      <CommentComponent v-for="comment in post?.comments" :comment="comment" />
      <button @click="showAllComments = !showAllComments">
      {{ showAllComments ? 'Ukryj komentarze' : 'Pokaż wszystkie komentarze' }}
    </button>
    </div>
  </div>
</template>
