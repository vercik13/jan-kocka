<script setup>
import { ChevronDown } from "lucide-vue-next"
defineProps({
  isOpen: Boolean
})
defineEmits(['toggle'])
</script>

<template>
  <nav class="bg-white relative z-50">
    <div class="container mx-auto flex flex-wrap justify-between items-center p-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0">
        <img src="/logo.png" alt="Logo firmy" class="h-16 sm:h-20 md:h-24 w-auto" />
      </NuxtLink>

      <!-- Desktop menu -->
      <ul class="hidden md:flex gap-12 text-lg font-medium flex-wrap uppercase">
        <li><NuxtLink to="/" class="hover:text-[#6b3f36] transition-colors duration-200">Úvod</NuxtLink></li>
      <li class="relative group">
        <NuxtLink to="/sluzby/" class="flex items-center hover:text-[#6b3f36] transition-colors duration-200">
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


        <li><NuxtLink to="/galerie" class="hover:text-[#6b3f36] transition-colors duration-200">Galerie</NuxtLink></li>
        <li><NuxtLink to="/#reference" class="hover:text-[#6b3f36] transition-colors duration-200">Reference</NuxtLink></li>
        <li><NuxtLink to="/kontakt" class="hover:text-[#6b3f36] transition-colors duration-200">Kontakt</NuxtLink></li>
      </ul>

      <!-- Mobile burger button -->
      <button @click="$emit('toggle')" class="md:hidden flex flex-col justify-between w-8 h-6 relative z-50">
        <div class="w-full h-0.5 bg-gray-700 mb-1"></div>
        <div class="w-full h-0.5 bg-gray-700 mb-1"></div>
        <div class="w-full h-0.5 bg-gray-700"></div>
      </button>
    </div>
  </nav>
</template>
