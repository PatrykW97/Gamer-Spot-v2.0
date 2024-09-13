<script setup lang="ts">
const props = defineProps({
  comment: {
    type: Object,
    required: false,
  },
});
let { comment } = props;


</script>


<template>
    <div>
        <p>{{ comment?.message }}</p>
    </div>
</template>