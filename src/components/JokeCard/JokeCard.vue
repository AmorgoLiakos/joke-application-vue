<script setup>
  import {toggleCollection} from "@/composables/toggleCollection.js";
  import Heart from "@/assets/Icons/Heart.vue";
  import HeartInCollection from "@/assets/Icons/HeartInCollection.vue";
  import {onMounted, ref} from "vue";

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
      <span class="single-joke-card__collection-btn" @click="toggleCollection(joke?.id)">
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
  @import "joke-card.scss";
</style>