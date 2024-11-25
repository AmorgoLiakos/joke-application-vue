<script setup>
  import JokeCard from '@/components/JokeCard/JokeCard.vue'
  import Loading from '@/components/Loading.vue'
  import {fetchData} from "@/composables/fetchData.js";
  import {onMounted, ref} from "vue";
  import {useCollectionStore} from "@/stores/collection.js";
  const collectionStore = useCollectionStore();

  const jokes = ref('');
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

  onMounted( () => {
    homeData()
  })
</script>

<template>
  <div class="jokes__type-toggle">
    <button class="toggle-btn" value="programming" @click="toggleFunc" :disabled="loading.value">Programming</button>
    <button class="toggle-btn active" value="random" @click="toggleFunc" :disabled="loading.value">Random</button>
  </div>
  <div class="jokes">
    <JokeCard v-if="!loading" v-for="joke in jokes" :key="joke.id" :joke="joke" :inCollection="collectionStore.inCollectionCheck(joke.id)" />
    <Loading v-else />
  </div>
</template>

<style scoped lang="scss">
  @use "jokes.scss";
</style>