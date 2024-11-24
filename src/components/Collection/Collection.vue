<script setup>
import JokeCard from '@/components/JokeCard/JokeCard.vue'
import {ref} from "vue";
import {inCollectionCheck} from "@/composables/inCollectionCheck.js";
let currentCollection = localStorage.getItem('myCollection') || '[]'
let currentCollectionParsed = JSON.parse(currentCollection);

const myCollection = ref(currentCollectionParsed)
</script>

<template>
  <div class="jokes">
    <JokeCard v-for="joke in myCollection" :key="joke.id" :joke="joke" :inCollection="inCollectionCheck(joke.id)" />
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