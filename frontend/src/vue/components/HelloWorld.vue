<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script setup>
defineProps({
  msg: String
})
</script>