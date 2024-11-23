<script setup>
  defineProps({
    joke: Object
  })
</script>

<template>
  <div class="single-joke-card">
    <div class="single-joke-card__head">
      <span>add to my collection btn goes here</span>
    </div>
    <div class="single-joke-card__body">
      <span class="single-joke-card__setup">{{ joke?.setup }}</span>
      <span class="single-joke-card__punchline">{{ joke?.punchline }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .single-joke-card {
    padding: 2rem;
    border: 1px solid #000;
    border-radius: 0.5rem;
    &__head {
      padding: 1rem;
      border-radius: 0.3rem;
      background-color: lightseagreen;
      margin-bottom: 0.5rem;
    }
    &__body {
      padding: 1rem;
      border-radius: 0.3rem;
      background-color: lightgray;
      display: flex;
      flex-direction: column;
    }
  }
</style>