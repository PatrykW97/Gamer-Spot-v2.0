<script lang="ts" setup>

const data = ref(null)
const message = ref("")

onMounted(async () => {
  try {
    data.value = await $fetch('http://130.61.148.159:80/post')
  } catch (e) {
    console.error('Fetch error:', e)
  }
  console.log(data.value)
})




</script>

<template>
  <div class="bg-slate-300 min-h-screen flex justify-center">
    <form class="mt-24 flex flex-col">
      <p>Napisz posta!</p>
      <textarea class="min-h-24" v-model="message"></textarea>
      <button>Wyślij</button>
    </form>
  </div>
</template>
