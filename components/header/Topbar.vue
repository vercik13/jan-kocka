<script setup>
import { Mail, Phone } from "lucide-vue-next"
</script>


<template>
  <div class="bg-gray-800 text-white text-xs sm:text-sm">
    <div class="container mx-auto flex justify-end items-center gap-2 p-2 flex-wrap">
      <a href="mailto:info@jan-kocka.cz" class="flex items-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors duration-200">
        <Mail class="w-4 h-4 sm:w-5 sm:h-5" />
        <span>info@jan-kocka.cz</span>
      </a>
      <a href="tel:+420739175831" class="flex items-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors duration-200">
        <Phone class="w-4 h-4 sm:w-5 sm:h-5"/>
        <span>+420 739 175 831</span>
      </a>
    </div>
  </div>
</template>
