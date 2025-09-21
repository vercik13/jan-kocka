
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const images = [
  '/obrabeni-ukazka.webp',
  '/obrabeni-ukazka1.webp',
  '/obrabeni-ukazka2.webp',
  '/obrabeni-ukazka3.webp',
  '/obrabeni-ukazka4.webp',
  '/obrabeni-ukazka5.webp',
  '/obrabeni-ukazka6.webp',
]

</script>

<template>
  <section class="container mx-auto py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="text-center md:text-left">
        <h2 class="text-3xl font-bold mb-4 uppercase">CNC Kovoobrábění</h2>
        <p class="text-lg mb-8">
          Zabýváme se kusovou a malosériovou výrobou. Nabízíme CNC frézování, soustružení, broušení. Výroba je prováděna na CNC strojích a konvenčních obráběcích strojích. Obrábění železných i neželezných kovů a plastů. Zajišťujeme i tepelné zpracování a povrchové úpravy výrobků. Zakázková výroba dle požadavků odběratelů. Včasné dodržení dodacích termínů a kvalita výroby jsou naší předností.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NuxtLink to="/" class="btn-primary">Zpět na hlavní stránku</NuxtLink>
           <NuxtLink to="/galerie" class="btn-primary">Zobrazit galerii</NuxtLink>
        </div>
      </div>

      <div>
        <Swiper :slides-per-view="1" :space-between="16" class="w-full">
          <SwiperSlide v-for="(img, i) in images" :key="i">
            <img :src="img" alt="Kovoobrábění" class="w-full h-80 object-cover rounded-lg shadow-md">
          </SwiperSlide>
        </Swiper>
      </div>
        
    </div>
  </section>
</template>
