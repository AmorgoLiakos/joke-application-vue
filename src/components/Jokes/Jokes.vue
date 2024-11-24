<script setup>
import JokeCard from '@/components/JokeCard/JokeCard.vue'
import {fetchData} from "@/composables/fetchData.js";
import {inCollectionCheck} from "@/composables/inCollectionCheck.js";
import {onMounted, ref} from "vue";

const jokes = ref('');
const collectionJokes = ref('');
const loading = ref(false);

const API_URLs = {
  'home': 'https://official-joke-api.appspot.com/jokes/ten',
  'random': 'https://official-joke-api.appspot.com/jokes/ten',
  'programming': 'https://official-joke-api.appspot.com/jokes/programming/ten',
}

const toggleActiveClass = (elClass, elToBeActive) => {
  Array.from(document.querySelectorAll(elClass)).forEach((el) => {el.classList.remove('active');});
  elToBeActive.classList.add('active');
}
const toggleFunc = async (e) => {
  loading.value = true
  jokes.value = await fetchData(API_URLs[e.target.value.toLowerCase()]);
  toggleActiveClass('.toggle-btn', e.target)
  loading.value = false
}
const homeData = async () => {
  loading.value = true
  jokes.value = await fetchData(API_URLs['home'])
  loading.value = false
}
const CollectionJokesData = () => {
  collectionJokes.value = JSON.parse(localStorage.getItem('myCollection'))
}

onMounted( () => {
  homeData()
  CollectionJokesData()
})
</script>

<template>
  <div class="jokes__type-toggle">
    <button class="toggle-btn" value="programming" @click="toggleFunc" :disabled="loading.value">Programming</button>
    <button class="toggle-btn active" value="random" @click="toggleFunc" :disabled="loading.value">Random</button>
  </div>
  <div class="jokes">
    <JokeCard v-if="!loading" v-for="joke in jokes" :key="joke.id" :joke="joke" :inCollection="inCollectionCheck(joke.id)" />
    <div v-else> Loading...</div>
  </div>
</template>

<style scoped lang="scss">
  @import "jokes.scss";
</style>