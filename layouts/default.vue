<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>



<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow"
    :class="route.path !== '/' ? 'pt-[20vh]' : ''" >
      <Transition name="page" mode="out-in">
        <slot />
      </Transition>
    </main>

    <Footer />
  </div>
</template>

