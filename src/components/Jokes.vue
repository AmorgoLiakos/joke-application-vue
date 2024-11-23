<script setup>
import JokeCard from '@/components/JokeCard.vue'
</script>

<template>
  <div class="jokes">
    <JokeCard v-for="i in (12)" />
  </div>
</template>

<style scoped lang="scss">
  .jokes {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>