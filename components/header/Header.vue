<script setup>
import { ref } from 'vue'
import Navbar from './Navbar.vue'
import MobileMenu from './MobileMenu.vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="shadow-md relative z-50">
    <Navbar :is-open="isOpen" @toggle="toggleMenu" />
    <MobileMenu :is-open="isOpen" @close="closeMenu" />
  </header>
</template>
