<script setup>
import {useCollectionStore} from "@/stores/collection.js";
const collectionStore = useCollectionStore();
</script>

<template>
  <div class="app">
    <h1 class="app__title">Jokes Application</h1>
  </div>
  <div class="app__nav">
    <router-link to="/">Homepage</router-link>
    <router-link to="/collection">Collection ({{ collectionStore.collection?.length }})</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped lang="scss">
.app {
  &__title {
    text-align: center;
    color: var(--secondary-color);
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: var(--grey);
      cursor: pointer;
      &:hover {
        color: var(--secondary-color);
      }
      &.router-link-active {
        color: var(--secondary-color);
      }
    }
  }
}
</style>
