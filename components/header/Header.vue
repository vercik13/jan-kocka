<script setup>
import { ref } from 'vue'
import Topbar from './Topbar.vue'
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
    <!-- Horní lišta -->
    <Topbar />

    <!-- Hlavní navigace -->
    <Navbar :is-open="isOpen" @toggle="toggleMenu" />

    <!-- Mobilní menu -->
    <MobileMenu :is-open="isOpen" @close="closeMenu" />
  </header>
</template>
