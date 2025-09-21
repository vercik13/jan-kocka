<script setup>
import { ref, computed } from 'vue'
import { NuxtLink } from '#components' 

const categories = ['Vše', 'Kovoobrábění', 'Svařování']

const activeCategory = ref('Vše')

const images = [
  { src: '/obrabeni-ukazka.webp', title: 'CNC', category: 'Kovoobrábění' },
  { src: '/obrabeni-ukazka1.webp', title: 'Vzor', category: 'Kovoobrábění' },
  { src: '/obrabeni-ukazka2.webp', title: 'Vzor', category: 'Kovoobrábění' },
  { src: '/obrabeni-ukazka3.webp', title: 'Vzor', category: 'Kovoobrábění' },
  { src: '/obrabeni-ukazka4.webp', title: 'Vzor', category: 'Kovoobrábění' },
  { src: '/obrabeni-ukazka5.webp', title: 'Vzor', category: 'Kovoobrábění' },
  { src: '/obrabeni-ukazka6.webp', title: 'Vzor', category: 'Kovoobrábění' },
  { src: '/svarovani-ukazka.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka1.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka2.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka3.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka5.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka6.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka7.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka8.webp', title: 'Vzor', category: 'Svařování' },
  { src: '/svarovani-ukazka9.webp', title: 'Vzor', category: 'Svařování' }
]

const filteredImages = computed(() => {
  if (activeCategory.value === 'Vše') return images
  return images.filter(img => img.category === activeCategory.value)
})
</script>


<template>
 <section id="galery" class="section">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-4 uppercase">Referenční galerie</h2>
        <p class="text-xl font-medium mb-10">
        Ukázky naší práce, které mluví samy za sebe — kvalita, přesnost a poctivé řemeslo.
        </p>
        <p class="text-lg mb-6">
        V naší galerii najdete ukázky realizovaných projektů z oblasti kovoobrábění a svařování.
        Každý výrobek je výsledkem precizní práce, moderního technologického vybavení a dlouholetých zkušeností.
        Prezentujeme zde různorodé zakázky — od drobných kovových dílů až po rozsáhlejší konstrukce — které
        odrážejí naši pečlivost, důraz na kvalitu a individuální přístup ke každému zákazníkovi.
        </p>
    </div>

    <!-- Kategorie / filtry -->
    <div class="flex justify-center gap-4 mb-10">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        class="px-5 py-2 rounded-full border transition"
        :class="activeCategory === cat
          ? 'bg-[#15204a] text-white border-[#15204a]'
          : 'bg-white text-[#15204a] border-[#15204a] hover:bg-gray-100'"
      >
        {{ cat }}
      </button>
    </div>



    <!-- Galerie -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="(img, i) in filteredImages"
        :key="i"
        class="group relative overflow-hidden rounded-xl shadow-md"
      >
        <img
          :src="img.src"
          :alt="img.title"
          class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
        >
          <p class="text-white font-medium text-center px-2">{{ img.title }}</p>
        </div>
      </div>
    </div>

    <NuxtLink 
      to="/"
      class="btn-primary inline-block mt-12">
      Zpět na hlavní stránku
    </NuxtLink>

  </section>
</template>
