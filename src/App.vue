<script setup>
import Jokes from "@/components/Jokes.vue";
</script>

<template>
  <div class="homepage">
    <h1 class="homepage__title">Jokes Application</h1>
    <Jokes />
  </div>
</template>

<style scoped lang="scss">
  .homepage {
    &__title {
      text-align: center;
      color: #2c3e50;
    }
  }
</style>
