<script setup>
import JokeCard from '@/components/JokeCard.vue'
import {fetchData} from "@/composables/fetchData.js";
import {onMounted, ref} from "vue";

const jokes = ref('');
const API_URL = 'https://official-joke-api.appspot.com/jokes/random/12';

onMounted(
    async () => {
            jokes.value = await fetchData(API_URL)
          }
)

</script>

<template>
  <div class="jokes">
    <JokeCard v-for="joke in jokes" :key="joke.id" :joke="joke" />
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