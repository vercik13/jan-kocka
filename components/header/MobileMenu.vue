<script setup>
import { ref } from 'vue'

defineProps({
  isOpen: Boolean
})
defineEmits(['close'])

const isServicesOpen = ref(false)

// --- animace výšky submenu ---
const beforeEnter = (el) => {
  el.style.maxHeight = '0'
  el.style.opacity = '0'
}
const enter = (el) => {
  el.style.transition = 'max-height 0.4s ease, opacity 0.4s ease'
  requestAnimationFrame(() => {
    el.style.maxHeight = el.scrollHeight + 'px'
    el.style.opacity = '1'
  })
  el.addEventListener(
    'transitionend',
    () => {
      el.style.maxHeight = 'none'
    },
    { once: true }
  )
}
const leave = (el) => {
  el.style.maxHeight = el.scrollHeight + 'px'
  el.style.opacity = '1'
  requestAnimationFrame(() => {
    el.style.transition = 'max-height 0.4s ease, opacity 0.3s ease'
    el.style.maxHeight = '0'
    el.style.opacity = '0'
  })
}
</script>

<template>
  <transition name="slide-right">
    <div
      v-if="isOpen"
      class="fixed top-0 right-0 w-80 h-full bg-gray-800 text-white z-50 flex flex-col justify-start pt-20 items-center uppercase"
    >
      <!-- Close button -->
      <button
        @click="$emit('close')"
        class="absolute top-16 right-4 w-10 h-4.5 flex flex-col justify-between items-center focus:outline-none"
      >
        <span class="block h-0.5 w-full bg-white rotate-45 translate-y-2"></span>
        <span class="block h-0.5 w-full bg-white opacity-0"></span>
        <span class="block h-0.5 w-full bg-white -rotate-45 -translate-y-2"></span>
      </button>

      <!-- Menu links -->
      <NuxtLink
        @click="$emit('close')"
        to="#about"
        class="mb-6 hover:text-gray-300 text-2xl"
      >Úvod</NuxtLink>

      <!-- Nabídka služeb -->
      <div class="mb-6 w-full text-center">
        <button
          @click="isServicesOpen = !isServicesOpen"
          class="w-full text-2xl hover:text-gray-300 flex justify-center items-center gap-2 uppercase"
        >
          Nabídka služeb <span class="text-lg">⮟</span>
        </button>

        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div
            v-show="isServicesOpen"
            class="mt-2 flex flex-col gap-2 overflow-hidden"
          >
            <NuxtLink
              @click="$emit('close')"
              to="/sluzby/kovoobrabeni"
              class="text-xl hover:text-gray-300"
            >CNC Kovoobrábění</NuxtLink>
            <NuxtLink
              @click="$emit('close')"
              to="/sluzby/svarovani"
              class="text-xl hover:text-gray-300"
            >Svařování</NuxtLink>
          </div>
        </transition>
      </div>

      <NuxtLink
        @click="$emit('close')"
        to="/galerie"
        class="mb-6 hover:text-gray-300 text-2xl"
      >Galerie</NuxtLink>
      <NuxtLink
        @click="$emit('close')"
        to="/#reference"
        class="mb-6 hover:text-gray-300 text-2xl"
      >Reference</NuxtLink>
      <NuxtLink
        @click="$emit('close')"
        to="/kontakt"
        class="hover:text-gray-300 text-2xl"
      >Kontakt</NuxtLink>
    </div>
  </transition>
</template>

<style>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
.slide-right-enter-to,
.slide-right-leave-from {
  transform: translateX(0%);
}
</style>
