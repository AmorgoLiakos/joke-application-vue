<script setup>
  import Heart from "@/assets/Icons/Heart.vue";
  import HeartInCollection from "@/assets/Icons/HeartInCollection.vue";
  import {onMounted, ref} from "vue";
  import {useCollectionStore} from "@/stores/collection.js";
  const collectionStore = useCollectionStore();

  defineProps({
    joke: Object,
    inCollection: Boolean
  })

  const showBody = ref(false)

  onMounted( () => {
    showBody.value = true;
  })

</script>

<template>
  <div class="single-joke-card" :class="{programming: joke?.type === 'programming'}">
    <div class="single-joke-card__head">
      <span class="single-joke-card__collection-btn" @click="collectionStore.toggleJokeFromCollection(joke?.id)">
        <HeartInCollection v-if="inCollection" />
        <Heart v-else />
      </span>
    </div>
    <div class="single-joke-card__body">
      <transition name="fade-setup">
        <span v-if="showBody" class="single-joke-card__setup">{{ joke?.setup }}</span>
      </transition>
      <transition name="fade-punchline">
        <span v-if="showBody" class="single-joke-card__punchline">{{ joke?.punchline }}</span>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "joke-card.scss";
</style>