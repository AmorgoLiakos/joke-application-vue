<script setup>
  import Jokes from "@/components/Jokes/Jokes.vue";
</script>

<template>
  <div class="app">
    <h1 class="app__title">Jokes Application</h1>
  </div>
</template>

<style scoped lang="scss">
.app {
  &__title {
    text-align: center;
    color: var(--primary-color);
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      font-size: 1.2rem;
      text-decoration: none;
      color: var(--primary-color);
      cursor: pointer;
      &:hover {
        color: var(--accent);
      }
      &.router-link-active {
        color: var(--accent);
      }
    }
  }
</style>
