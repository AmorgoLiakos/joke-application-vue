<script setup>
  import JokeCard from '@/components/JokeCard/JokeCard.vue'
  import {useCollectionStore} from "@/stores/collection.js";
  const collectionStore = useCollectionStore();
</script>

<template>
  <div class="jokes">
    <JokeCard v-for="joke in collectionStore.collection" :key="joke.id" :joke="joke" :inCollection="collectionStore.inCollectionCheck(joke.id)" />
    <div v-if="!collectionStore.collection?.length">No Jokes in my Collection</div>
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