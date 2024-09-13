<script setup lang="ts">
const props = defineProps({
  comment: {
    type: Object,
    required: false,
  },
});
let { comment } = props;

const toggleEditComment = ref(false)
const editedComment = ref(comment.message)

async function deleteComment() {
  try {
    const response = await $fetch(
      `http://130.61.148.159:80/comment/${comment.id}`,
      {
        method: "DELETE",
      }
    );
  } catch (error) {
    console.log(error);
  }
  window.location.reload();
}

async function editComment(){
  try {
    const response = await $fetch(
      `http://130.61.148.159:80/comment/${comment.id}`,
      {
        method: "PATCH",
      }
    );
  } catch (error) {
    console.log(error);
  }
  window.location.reload();
}
</script>

<template>
  <div
    class="w-full flex justify-between bg-black/10 py-2 px-4 rounded-lg shadow-md"
  >
    <p v-if="toggleEditComment == false">{{ comment?.message }}</p>
    <input v-else type="text" v-model="editedComment">
    <div>
      <button :disabled="editedComment.length < 1" v-if="toggleEditComment == true" @click="editComment" class="hover:bg-blue-500 px-2 rounded-lg">wyslij</button>
      <button @click="toggleEditComment = !toggleEditComment" class="hover:bg-blue-500 px-2 rounded-lg">edit</button>
      <button @click="deleteComment" class="hover:bg-redd-500 px-2 rounded-lg">X</button>
    </div>
  </div>
</template>
