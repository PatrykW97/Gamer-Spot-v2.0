<script lang="ts" setup>

type Post = {
  id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image?:string;
};

const postMessage = ref("")

const data = ref<Post[] | null>(null)

onMounted(async () => {
  try {
    data.value = await $fetch('http://130.61.148.159:80/post');
  } catch (e) {
    console.error('Fetch error:', e)
  }
  console.log(data.value)
})

async function createPost() {
    const description = {description:postMessage.value}
    try{
      const response = await $fetch('http://130.61.148.159:80/post',{
        method:"POST",
        body: description
      })
    }catch(error){
      console.log(error)
    }
}
</script>

<template>
  <div class=" min-h-screen flex flex-col items-center w-full">
    <form @submit="createPost()" class="mt-24 flex flex-col">
      <p>Napisz posta!</p>
      <textarea class="min-h-24" v-model="postMessage"></textarea>
      <button>Wyślij</button>
    </form>
    POSTS!
    <div class="w-full flex justify-center " v-for="post in data">
      <PostComponent :post="post" />
    </div>
  </div>
</template>
