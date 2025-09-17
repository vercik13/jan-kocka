<script setup>
import { Mail, Phone, ChevronDown } from "lucide-vue-next"

defineProps({
  isOpen: Boolean
})
defineEmits(['toggle'])
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50 shadow-lg">
    <div class="bg-[#212947] text-white text-xs sm:text-sm">
      <div class="container mx-auto flex justify-end items-center gap-2 p-2 flex-wrap">
        <a href="mailto:info@jan-kocka.cz" class="flex items-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors duration-200">
          <Mail class="w-4 h-4 sm:w-5" />
          <span>info@jan-kocka.cz</span>
        </a>
        <a href="tel:+420739175831" class="flex items-center gap-1 sm:gap-2 hover:text-gray-300 transition-colors duration-200">
          <Phone class="w-4 h-4 sm:w-5 sm:h-5"/>
          <span>+420 739 175 831</span>
        </a>
      </div>
    </div>
    <nav class="bg-white">
      <div class="container mx-auto flex flex-wrap justify-between items-center p-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <img src="/logo.png" alt="Logo firmy" class="h-16 sm:h-20 md:h-24 w-auto" />
        </NuxtLink>

        <!-- Desktop menu -->
        <ul class="hidden md:flex gap-12 text-lg font-medium flex-wrap uppercase">
          <li><NuxtLink to="/" class="menu-link">Úvod</NuxtLink></li>
        <li class="relative group">
          <NuxtLink to="/sluzby/" class="flex items-center hover:text-[#15204a] transition-colors duration-200">
            Nabídka služeb <ChevronDown class="ml- 2w-4 h-4" />
          </NuxtLink>

          <ul class="absolute -left-4 top-full mt-0 hidden group-hover:block bg-white shadow-lg rounded-lg min-w-[220px] z-50">
            <li>
              <NuxtLink to="/sluzby/kovoobrabeni" class="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                CNC Kovoobrábění
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sluzby/svarovani" class="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                Svařování
              </NuxtLink>
            </li>
          </ul>
        </li>


          <li><NuxtLink to="/galerie" class="menu-link">Galerie</NuxtLink></li>
          <li><NuxtLink to="/#reference" class="menu-link">Reference</NuxtLink></li>
          <li><NuxtLink to="/kontakt" class="menu-link">Kontakt</NuxtLink></li>
        </ul>

        <!-- Mobile burger button -->
        <button @click="$emit('toggle')" class="md:hidden flex flex-col justify-between w-8 h-6 relative z-50">
          <div class="w-full h-0.5 bg-gray-700 mb-1"></div>
          <div class="w-full h-0.5 bg-gray-700 mb-1"></div>
          <div class="w-full h-0.5 bg-gray-700"></div>
        </button>
      </div>
    </nav>
  </div>
</template>
