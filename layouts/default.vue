<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Hlavička -->
    <Header />
    <HeroSlider v-if="route.path === '/'" class="h-[80vh]" />

    <!-- Obsah stránky -->
    <main class="flex-grow"
      :class="route.path !== '/' ? 'pt-[20vh]' : ''" >
      <slot />
    </main>

    <!-- Patička -->
    <Footer />
  </div>
</template>
