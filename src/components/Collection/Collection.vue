<script setup>
  import JokeCard from '@/components/JokeCard/JokeCard.vue'
  import {useCollectionStore} from "@/stores/collection.js";
  import {ref} from "vue";
  const collectionStore = useCollectionStore();

  const searchInput = ref()
  const searchHelperFunc = () => {
    collectionStore.searchFunc(searchInput.value)
  }
</script>

<template>
  <div class="actions">
    <button class="actions__sort-btn" @click="collectionStore.sortFunc()">Sort collection jokes alphabetically</button>
    <input class="actions__search" v-if="collectionStore.collection?.length" type="text" placeholder="Search jokes..." v-model="searchInput" @input="searchHelperFunc()" />
  </div>
  <div class="jokes">
    <JokeCard v-for="joke in collectionStore.searchedJokes" :key="joke.id" :joke="joke" :inCollection="collectionStore.inCollectionCheck(joke.id)" />
    <div class="result" v-if="!collectionStore.collection?.length">No Jokes in my Collection</div>
    <div class="result" v-if="!collectionStore.searchedJokes?.length && collectionStore.collection?.length" >No jokes with this setup or punchline found...</div>
  </div>
</template>

<style scoped lang="scss">
  @use './collection.scss';
</style>